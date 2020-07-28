<?php
define('SITE_NAME', 'bulb');
define('SITE_VERSION', '1.0.0');

define('PAGE_MENTIONS', 0);


// inclusion des ressources nécessaires
require 'inc/cpt.php';
require 'inc/backend.php';
require 'inc/assets.php';
require 'inc/ajax.php';
require 'inc/filters.php';
require 'inc/elementor/config.php';


// REMOVE WP EMOJI
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );


// déclarations des menus
register_nav_menus( array(
    'main_menu' => 'Menu principal'
) );


function theme_prefix_setup() {

    add_theme_support( 'custom-logo', array(
        'height'      => 150,
        'width'       => 150,
        'flex-width' => true,
        'flex-height' => true,
    ) );

}
add_action( 'after_setup_theme', 'theme_prefix_setup' );

/**
 * Enqueue scripts and styles.
 */
function bulb_scripts() {


    wp_enqueue_style( 'bulb-style-all', get_template_directory_uri(). '/assets/css/main.min.css', array(), SITE_VERSION );

    wp_enqueue_script('preloadjs', 'https://code.createjs.com/preloadjs-0.6.2.min.js', array(), null, false);
    wp_localize_script( 'preloadjs', 'adminAjax', admin_url( 'admin-ajax.php' ) );


}
add_action( 'wp_enqueue_scripts', 'bulb_scripts' );




