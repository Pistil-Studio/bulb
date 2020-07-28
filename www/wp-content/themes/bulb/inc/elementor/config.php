<?php

namespace Elementor;

include 'extends.php';

add_action( 'elementor/widgets/widgets_registered', function( $widgets_manager ) {

    include 'widget.base.php';
    include 'widget.video.php';

    $widgets_manager->register_widget_type( new Bulb_WidgetVideo());

    // suppression de tout les widget que nous ne voulons pas
    $widgetsToDelete = array(
        'accordion', 'heading', 'button', 'divider', 'spacer', 'icon', 'google-maps',
        'image-box', 'icon-box', 'image-gallery', 'image-carousel', 'icon-list', 'counter', 'progress',
        'testimonial', 'tabs', 'toggle', 'social-icons', 'alert', 'menu-anchor', 'sidebar', 'audio', 'shortcode', 'html', 'google_maps', 'video'
    );


    foreach($widgetsToDelete as $widgetToDelete){
        $widgets_manager->unregister_widget_type($widgetToDelete);
    }
} );


