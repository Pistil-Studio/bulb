<?php

/**
 * **********************************************************************
 * Nous stoquons ici toutes les fonctions propres au site
 * **********************************************************************

*/


if(!function_exists('bulb_mainLogo')) {
    function bulb_mainLogo(){
        if ( function_exists( 'the_custom_logo' ) ) {
            the_custom_logo();
        } else {
            return 'ici le logo de base du site';
        }
    }
}
