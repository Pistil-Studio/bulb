<?php

/**
 * **********************************************************************
 * Tous les utilitaires génériques (pas propre au site
 * **********************************************************************



/*
 Utilisé pour précharger des ressources a chaque chargement de page
    bulb_preloadAssets(array(array(
        'src' => $visuelHeader['url'],
        'id' => md5($visuelHeader['url'])
    )));
*/
if(!function_exists('buld_preloadAssets')) {

    function bulb_preloadAssets($assets){
        $assets = json_encode($assets);
        echo '<div class="preloadAssets">' . $assets . '</div>';
    }

}