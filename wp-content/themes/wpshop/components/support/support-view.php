<section class="component component-support">
  <div class="l-contain-narrow">
    <div class="l-col l-row-center l-col-center">

      <?php if (get_sub_field('support_heading')) { ?>
        <h2>

          <?php if (get_sub_field('support_has_icon')) { ?>
            <i class="fas <?php the_sub_field('support_icon'); ?>" aria-hidden="true"></i>
          <?php } ?>

           <?php the_sub_field('support_heading'); ?>

        </h2>
      <?php } ?>

      <?php if (get_sub_field('support_copy')) { ?>
        <?php the_sub_field('support_copy'); ?>
      <?php } ?>

      <?php if (get_sub_field('support_cta_copy')) { ?>
        <a href="<?php the_sub_field('support_cta_link'); ?>" class="btn btn-l gtm-link-support">

          <?php if (get_sub_field('support_cta_has_icon')) { ?>
            <i class="fa <?php the_sub_field('support_cta_icon'); ?>" aria-hidden="true"></i>
          <?php } ?>

          <?php the_sub_field('support_cta_copy'); ?>
        </a>
      <?php } ?>

    </div>
  </div>
</section>
