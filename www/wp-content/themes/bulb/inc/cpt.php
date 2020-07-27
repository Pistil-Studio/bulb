<?php

/* **************************************************************** */
/* Toute la conf pour ititialiser les customs post types */
/* **************************************************************** */


add_action( 'init', 'bulb_cpt_init', 0 );
function bulb_cpt_init(){


    /*
    $labels = array(
        'name' => __( 'CPT', SITE_NAME ),
        'singular_name' => __( 'CPT', SITE_NAME ),
        'add_new' => __( 'Ajouter un CPT', SITE_NAME ),
        'add_new_item' => __( 'Ajouter un CPT', SITE_NAME ),
        'edit_item' => __( 'Editer un CPT', SITE_NAME ),
        'new_item' => __( 'Ajouter un CPT', SITE_NAME ),
        'view_item' => __( 'Voir', SITE_NAME ),
        'search_items' => __( 'Chercher un CPT', SITE_NAME ),
        'not_found' => __( 'Aucun CPT trouvé', SITE_NAME ),
        'not_found_in_trash' => __( 'Aucun CPT trouvé', SITE_NAME )
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'supports' => array( 'title', 'excerpt' ),
        'taxonomies' => array('post_tag' ),
        'capability_type' => 'post',
        'rewrite' => array(
            "slug" => 'cpt',
            'with_front' => false
        ),
        'menu_position' => 5,
        'has_archive' => true,
        'menu_icon'	=> 'dashicons-welcome-widgets-menus',
    );
    register_post_type( 'cpt', $args );



    $taxonomy_labels = array(
        'name' => _x( 'Categorie', SITE_NAME ),
        'menu_name' => _x( 'Categories', SITE_NAME ),
    );
    $taxonomy_args = array(
        'labels' => $taxonomy_labels,
        'public' => true,
        'show_in_nav_menus' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_tagcloud' => true,
        'hierarchical' => true,
        'rewrite' => array( 'slug' => 'categorie'),
        'query_var' => true
    );
    register_taxonomy( 'cpt_categorie', array( 'cpt' ), $taxonomy_args );
    */



}