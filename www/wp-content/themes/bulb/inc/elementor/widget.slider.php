<?php

namespace Elementor;

/**
 * Class My_Widget
 */
class Bulb_WidgetSlider extends Bulb_WidgetBase {

    public function get_name() {
        return 'bulb-slider';
    }

    public function get_title() {
        return __( 'Bulb - Slider', 'elementor' );
    }

    public function get_icon() {
        return 'fa  fa-images';
    }

    protected function _register_controls(){

        $this->start_controls_section(
            'section_slider',
            [
                'label' => __( 'Slider', 'elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new Repeater();

        $repeater->add_control(
            'image', [
                'label' => __( 'Image', 'elementor' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'items',
            [
                'label' => __( 'Add items', 'elementor' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'title_field' => 'Items',
            ]
        );

        $this->end_controls_section();
    
    }

    protected function render() {

        $settings = $this->get_settings();

        $html = '<div class="slider">';
        $html.= '<div class="slider__content slick">';
        if($settings['items']) {
            foreach ($settings['items'] as $item) {
                $html.= '<div class="slider__content__item" style="background-image: url('.$item['image']['url'].')"></div>';
            }
        }
        $html.= '</div>';
        $html.= '<div class="slider__control"><div class="slider__control__btnLeft btn btn--left"><span></span></div><div class="slider__control__btnRight btn btn--right"><span></span></div></div>';
        $html.= '</div>';

        echo $html;
    }


    public function render_plain_content() {
        echo $this->get_settings( 'editor' );
    }

    protected function _content_template() {
        ?>

        <div class="slider">
            <div class="slider__content slick">
                <# if ( settings.items.length ) { #>
                <# _.each( settings.items, function( item,index ) {  #>
                <div class="slider__content__item" style="background-image: url({{item.image.url}})"></div>
                <# }); #>
                <# } #>
            </div>
            <div class="slider__control"><div class="slider__control__btnLeft btn btn--left"><span></span></div><div class="slider__control__btnRight btn btn--right"><span></span></div></div>
        </div>

        <?php
    }


}
