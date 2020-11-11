<?php get_header(); ?>

    <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
                get_template_part( 'template-parts/content');
            endwhile;
        endif;
    ?>

    <?php get_template_part( 'template-parts/fake-content'); ?>

<?php
get_footer();
