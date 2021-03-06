  <header class="header">

    <div class="header-content l-row l-row-justify l-contain-wide">

      <a class="logo-link l-col l-col-left l-row-center" href="<?= esc_url(home_url('/')); ?>" aria-label="WP Shopify logo link">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 100 100" xml:space="preserve"><style>.st0{fill:#415aff}</style><path class="st0" d="M9.5 26.8h9.4c5.2 0 9.9 2.9 12.3 7.6l10 19.9.1.1 9.1-14.5-5.6-12.4c-.2-.4.1-.8.5-.8h13c5.5 0 10.4 3.2 12.6 8.2l6.9 15.5.7 1.6 1 2.2L90 37.1l3.4-5.4C86.2 15 69.5 3.3 50.2 3.3c-17.4 0-32.6 9.5-40.7 23.5z"/><path class="st0" d="M94.6 35L77.2 63.1l-9.8 15.7c-.5.6-1.3.8-2 .4-.6-.4-.8-1.3-.4-1.9l4.5-7.3c-2.8.3-5.8-1-7.2-4L51.8 42.9 29.4 78.8c-.5.6-1.3.8-2 .4-.6-.4-.8-1.3-.4-1.9l4.5-7.2c-2.9.4-5.9-1-7.3-4l-17-34.8c-2.6 5.8-4 12.2-4 19 0 26 21 47 47 47s47-21 47-47c0-5.4-.9-10.5-2.6-15.3z"/></svg>
      </a>

      <?php if (is_page('checkout')) { ?>

        <?php if (has_nav_menu('checkout_navigation')) : ?>
          <nav class="nav-primary l-row l-row-right l-fill l-col-center">
            <?php wp_nav_menu(['theme_location' => 'checkout_navigation', 'menu_class' => 'nav l-row']); ?>
          </nav>
        <?php endif; ?>

      <?php } else { ?>

        <?php if (has_nav_menu('primary_navigation')) : ?>
          <nav class="nav-primary l-row l-row-center l-fill l-col-center">
            <?php wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav l-row']); ?>
          </nav>
        <?php endif; ?>

        <?php if (has_nav_menu('primary_sub')) : ?>
         <!-- <div class="sub-nav-wrapper">
          <nav class="nav-primary-sub l-row l-row-right l-fill l-col-center">
            <?php wp_nav_menu(['theme_location' => 'primary_sub', 'menu_class' => 'nav l-row']); ?>
          </nav>
          <i class="fal fa-ellipsis-v"></i>
          </div> -->
        <?php endif; ?>

      <?php } ?>

      <?php if( !is_page('checkout') ) { ?>

        <div class="header-account l-row l-row-right l-col-center">

          <?php if (is_user_logged_in()) {  ?>
            <a href="/account" class="btn btn-account">My Account</a>
            <a href="<?= wp_logout_url('/login'); ?>" class="menu-item-manual">Logout</a>
          <?php } else { ?>
            <span class="btn btn-download-free getting-started-trigger" target="_blank">Start for free</span>
            <a href="/login" class="menu-item-manual">Login</a>
          <?php } ?>

        </div>

      <?php } ?>

      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/imgs/icon-mobile.svg" class="icon-mobile-open" alt="Mobile WP Shopify Menu Icon" />

    </div>

  </header>

<div class="mobile-menu-wrapper">
   <?php wp_nav_menu(['theme_location' => 'mobile_navigation', 'menu_class' => 'nav-mobile l-row']); ?>
   <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/imgs/icon-mobile-close.svg" class="icon-mobile icon-mobile-close" alt="Mobile WP Shopify Menu Close Icon" />
</div>