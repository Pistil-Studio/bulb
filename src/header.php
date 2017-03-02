<?php
// sleep(3); // temporaire, pour simuler le chargement des page en ajax

 $rand = rand(1,2);
 if(is_front_page()){
     $page = 'home';
 } else {
     $page = 'single';
 }


?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>



<div id="app">


    <div id="barba-wrapper">
        <div class="barba-container" data-namespace="<?php echo $page; ?>">

            <header>
                <a href="/">Home link</a>
                <nav><?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?></nav>
            </header>


            <main>