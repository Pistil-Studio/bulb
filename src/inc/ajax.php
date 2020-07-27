<?php

/**
 * **********************************************************************
 * Exemple de declaration d'une méthode ajax
 * **********************************************************************

add_action( 'wp_ajax_nopriv_get_post_popin', 'get_post_popin' );
add_action( 'wp_ajax_get_post_popin', 'get_post_popin' );
function get_post_popin() {
    global $wpdb;
    $query = new WP_Query(array(
        'post__in' => array($_POST['id'])
    ));
    if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post();
        get_template_part( 'partials/post', 'popin' );
    endwhile;
    endif;
    wp_die();
}


 */
?>