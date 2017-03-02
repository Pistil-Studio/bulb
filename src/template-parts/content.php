<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-header">
		<?php
		if ( is_single() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		?>
	</div><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>

        <div class="grid-4">
            <div class="square box push"><div class="content">content</div></div>
            <div class="square box"><div class="content">content</div></div>
        </div>

        <div class="grid-4">
            <div class="square box push"><div class="content">content</div></div>
            <div class="square box parallaxable" data-level="0.5"><div class="content">content</div></div>
        </div>

        <div class="grid-2">
            <div class="square box push parallaxable" data-level="1.5"><div class="content">content</div></div>
        </div>

        <div class="grid-4">
            <div class="square box push revealable"><div class="content">content</div></div>
            <div class="square box"><div class="content">content</div></div>
        </div>


        <?php
        if(is_front_page()) {
                echo '<div class="grid-2">
            <div class="square box push parallaxable" data-level="1.5"><div class="content">content</div></div>
        </div>

        <div class="grid-4">
            <div class="square box push revealable"><div class="content">content</div></div>
            <div class="square box"><div class="content">content</div></div>
        </div>';
        }
        ?>

	</div><!-- .entry-content -->
</article>
