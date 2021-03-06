<?php

/**
 * **********************************************************************
 * Nous stoquons ici toutes la configuration propre au backend
 * **********************************************************************
 */

add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );

/*
Exemple pour ajouter une page de configuration pour ACF Pro
if( function_exists('acf_add_options_page') ) {

    // add parent
    $parent = acf_add_options_page(array(
        'page_title' 	=> 'Aristophane General Settings',
        'menu_title' 	=> 'Aristophane Settings',
        'redirect' 		=> false
    ));


    // add sub page
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Social Settings',
        'menu_title' 	=> 'Social',
        'parent_slug' 	=> $parent['menu_slug'],
    ));

    // add sub page
    acf_add_options_sub_page(array(
        'page_title' 	=> 'Keys Settings',
        'menu_title' 	=> 'keys',
        'parent_slug' 	=> $parent['menu_slug'],
    ));

}

*/