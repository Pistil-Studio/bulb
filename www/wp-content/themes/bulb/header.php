<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="app" id="app">

    <header>
        <?php get_template_part('template-parts/cookieBar'); ?>

        <div class="logo">
            <?php function theme_prefix_the_custom_logo() {

                if ( function_exists( 'the_custom_logo' ) ) {
                    the_custom_logo();
                }

            }
            theme_prefix_the_custom_logo();
            ?>
        </div>

        <div class="main-menu">
            <div class="main-menu__btn">MENU</div>
            <div class="main-menu__content">
            <nav><?php wp_nav_menu( array('theme_location' => 'main_menu') ); ?></nav>
            </div>
        </div>

        <div class="page-loader">
            page loading (ajax call)
        </div>

    </header>


    <div id="barba-wrapper">
        <div class="barba-container" data-namespace="barbanamespace">
            <main>
