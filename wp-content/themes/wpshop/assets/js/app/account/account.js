import {
  onInputAddError,
  addValidInputClass,
  insertValidIcon,
  removeValidIcon,
  hideInputError,
  removeValidClass
} from '../forms/validation';

import {
  reduceFormData,
  enableForm,
  disableForm,
  insertMessage,
  clearFormFields
} from '../utils/utils';


import {
  getAccountCat,
  updateAccountProfile,
  updateAccountPassword
} from '../ws/ws';


/*

On account cat click

*/
function onAccountCatClick($) {

  $('.account-cat').on('click', async function(e) {

    var $element = $(this);
    var stuff = await getAccountCat( $element.data('account-cat') );

    $('.content').html($(stuff));

  });
}

//
// function onAccountDownloads() {
//
// }
//
// function onAccountLicenses() {
//
// }
//
// function onAccountOrders() {
//
// }
//
// function onAccountProfile() {
//
// }

//
// function onAccountCatLinks() {
//   onAccountBilling();
//   onAccountDownloads();
//   onAccountLicenses();
//   onAccountOrders();
//   onAccountProfile();
// }







function onProfileChange($) {

  $("#form-account-profile-general").submit(function(e) {
    e.preventDefault();

  }).validate({
    rules: {
      wps_customer_email: {
        email: true,
        remote: {
          url: "/wp/wp-admin/admin-ajax.php",
          type: "post",
          data: {
            action: 'wps_check_existing_username',
            email: function() {
              return $("#wps_customer_email").val();
            }
          }
        },
      }
    },
    messages: {
      wps_customer_email: {
        email: "Please enter a valid email",
        remote: "Sorry but it looks like another user already has that email. Please choose a different one."
      }
    },
    highlight: onInputAddError,
    unhighlight: function(element) {

      removeValidIcon($(element));
      hideInputError($(element));
      addValidInputClass($(element));
      insertValidIcon($(element));

    },
    submitHandler: async function(form) {

      var $form = $(form);

      disableForm($form);

      var emailUpdated = await updateAccountProfile( reduceFormData($form) );

      enableForm($form);

      if(emailUpdated.email && emailUpdated.name) {
        // insertMessage('Successfully updated email and name', 'success');
        window.location.href = '/login?email-name-change=true';

      } else if(emailUpdated.email && !emailUpdated.name) {
        // insertMessage('Successfully updated email', 'success');
        window.location.href = '/login?email-change=true';

      } else if(!emailUpdated.email && emailUpdated.name) {
        insertMessage('Successfully updated name', 'success');

        removeValidIcon($form.find('input'));
        removeValidClass($form.find('input'));

      } else {
        insertMessage('Sorry we couldn\'t update your profile. Please try again.', 'error');

      }


    }

  });

}


/*

On Password Change

*/
function onPasswordChange($) {

  $("#form-account-profile-password").submit(function(e) {

    e.preventDefault();

  }).validate({
    rules: {
      wps_customer_password_current: {
        required: true
      },
      wps_customer_password_new: {
        required: true
      },
      wps_customer_password_new_confirm: {
        required: true,
        equalTo: "#form-input-password"
      }
    },
    messages: {
      password: {
        required: "New passwords must match"
      }
    },
    highlight: onInputAddError,
    unhighlight: function(element) {

      removeValidIcon($(element));
      hideInputError($(element));
      addValidInputClass($(element));
      insertValidIcon($(element));

    },
    submitHandler: async function(form) {
      var $form = $(form);

      disableForm($form);

      var passUpdated = await updateAccountPassword( reduceFormData($form) );

      if (!passUpdated) {
        insertMessage('Error updating password, please try again', 'error');

      } else {

        insertMessage('Successfully updated password', 'success');

      }

      clearFormFields($form);
      enableForm($form);


    }

  });

}


function showUpgrades($) {
  $('.account-view-upgrades').on('click', function(e) {
    e.preventDefault();

    $('#edd_sl_license_upgrades').toggleClass('is-hidden');

  });
}


function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}


/*

Init Account

*/
function initAccount($) {

  onAccountCatClick($);
  onProfileChange($);
  onPasswordChange($);
  showUpgrades($);

  var clipboard = new Clipboard('.copy-trigger');

  clipboard.on('success', function(e) {

    var $notice = jQuery('.notice-copy');

    $notice.addClass('is-notifying');

    setTimeout(function() {
      $notice.removeClass('is-notifying');
      e.clearSelection();
    }, 2500);

    // jQuery(e.trigger).focus().select();

    selectElementContents(jQuery(e.trigger)[0]);





  });

  clipboard.on('error', function(e) {

  });


  $('.edd_download_file_link').text('Download WP Shopify').show();

}

export { initAccount }
