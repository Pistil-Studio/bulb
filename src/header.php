<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="app" id="app" data-barba="wrapper">

    <header>
        <?php get_template_part('template-parts/cookieBar'); ?>

        <div class="logo">
            <?php echo bulb_mainLogo(); ?>
        </div>

        <div class="main-menu">
            <div class="main-menu__btn">MENU</div>
            <div class="main-menu__content">
            <nav><?php wp_nav_menu( array('theme_location' => 'main_menu') ); ?></nav>
            </div>
        </div>

        <div class="pageLoader">
            <div class="pageLoader__overlay"></div>
            <div class="pageLoader__loader">loading</div>
        </div>

    </header>


    <div id="barba-wrapper">
        <main class="barba-wrapper-refreshable" data-barba="container" data-barba-namespace="home">
