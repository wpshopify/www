import { initPlugins } from './plugins/plugins'
import { initForms } from './forms/forms'
import { initMailinglist } from './mailinglist/mailinglist'
import { initAccount } from './account/account'
import { initMobile } from './mobile/mobile'
import { initDriftTracking, initDownloadTracking } from './analytics/analytics'
import { initFAQs } from './faqs/faqs'
;(function ($) {
  $(function () {
    initPlugins($)
    initForms($)

    initAccount($)
    initFAQs()

    initMobile($)

    initDriftTracking($)
    initDownloadTracking()

    jQuery('iframe[src*="youtube"]').parent().fitVids()

    // grab an element
    var myElement = document.querySelector('.header')

    if (myElement) {
      var headroom = new Headroom(myElement)
      headroom.init()
    }

    if (window.innerWidth > 1000) {
      var placement = 'right'
    } else {
      var placement = 'bottom'
    }

    jQuery('.getting-started-trigger').each(function () {
      tippy(this, {
        content: document.getElementById('getting-started-wrapper').cloneNode(true),
        interactive: true,
        trigger: 'click',
        animation: 'shift-toward',
        theme: 'light',
        arrow: true,
        arrowType: 'round',
        distance: 7,
        placement: placement,
        maxWidth: 450,
        duration: [280, 0],
        moveTransition: 'transform 0.2s ease-out',
        offset: [0, 20],
        onCreate: function (instance) {
          var $form = jQuery(instance.popper).find('.mailinglist-form')
          initMailinglist($form)
        },
      })
    })

    jQuery('.testimonials').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 20,
    })

    initMailinglist(jQuery('.mailinglist-form-inline'))

    jQuery('.screenshots-nav-list li').on('click', function () {
      var type = jQuery(this).data('type')
      if (!type) {
        return
      }

      var $container = jQuery(this).closest('.l-row')

      $container.find('.is-visible').removeClass('is-visible')
      jQuery(this).addClass('is-visible')

      var $screenshot = $container.find(
        '.screenshot-images .screenshot-image[data-type="' + type + '"]'
      )
      var $screenshotContent = $container.find(
        '.screenshot-content .screenshot[data-type="' + type + '"]'
      )

      $screenshot.addClass('is-visible')
      $screenshotContent.addClass('is-visible')
    })

    jQuery('.price-toggle-label-wrapper').on('click', function () {
      jQuery(this).closest('.component-purchase').toggleClass('is-monthly')
    })
  })
})(jQuery)
