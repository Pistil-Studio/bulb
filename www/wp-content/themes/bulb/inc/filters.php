<?php


/**
 * **********************************************************************
 * Tous les filters sur le wordpress
 * **********************************************************************


/**
 * Filter for adding wrappers around embedded objects
 */
function responsive_embeds( $content ) {
    $content = preg_replace( "/<iframe.+?src=\"(.+?)\"/Si", '<div class="embed-container embed-responsive-16by9"><iframe src="\1" frameborder="0" allowfullscreen>', $content );
    $content = preg_replace( "/<\/iframe>/Si", '</iframe></div>', $content );
    return $content;
}
add_filter( 'the_content', 'responsive_embeds' );