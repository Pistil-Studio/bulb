<?php get_header(); ?>

		<?php
		if ( have_posts() ) :

			if ( is_home() && ! is_front_page() ) : ?>
                <h1 class="page-title"><?php single_post_title(); ?></h1>

        <?php
			endif;
			while ( have_posts() ) : the_post();
				get_template_part( 'template-parts/content');
			endwhile;
			the_posts_navigation();
		else :
			//get_template_part( 'template-parts/content', 'none' );
		endif; ?>


<?php
get_footer();