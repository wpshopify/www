<?php use Roots\Sage\Titles; 

if (is_home()) {
   $post_id = get_option( 'page_for_posts' );
} else {
   $post_id = get_the_ID();
}

if (!get_field('page_settings_hide_title', $post_id) ) { ?>

  <div class="page-header">

    <?php if(is_page('Checkout')) { ?>
      <h1 class="has-icon">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-check" class="svg-inline--fa fa-shield-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z"></path></svg>
        <?= Titles\title(); ?>
      </h1>

    <?php } else if(is_page('purchase-confirmation')) { ?>

      <h1 class="has-icon">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/prod/imgs/icon-check.svg" alt="Payment Success" class="icon icon-small icon-thumbs-up">
        <?= Titles\title(); ?>
      </h1>

    <?php } else { ?>
      <h1 itemprop="name"><?= Titles\title(); ?></h1>

    <?php } ?>

  </div>

<?php } ?>
