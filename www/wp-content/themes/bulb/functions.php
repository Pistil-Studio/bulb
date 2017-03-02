<?php

// REMOVE WP EMOJI
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/**
 * Enqueue scripts and styles.
 */
function bulb_scripts() {
    //wp_enqueue_style( 'bulb-style-modules', get_template_directory_uri(). '/css/modules.min.css' );
    wp_enqueue_style( 'bulb-style-all', get_template_directory_uri(). '/css/main.min.css' );

    wp_enqueue_script( 'bulb-app', get_template_directory_uri() . '/js/app.js', array(), '20151215', true );


}
add_action( 'wp_enqueue_scripts', 'bulb_scripts' );



