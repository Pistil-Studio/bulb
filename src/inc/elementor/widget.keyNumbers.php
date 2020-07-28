<?php

namespace Elementor;

/**
 * Class My_Widget
 */
class Bulb_WidgetKeyNumbers extends Bulb_WidgetBase {

    public function get_name() {
        return 'bulb-keyNumbers';
    }

    public function get_title() {
        return __( 'Bulb - KeyNumbers', 'elementor' );
    }

    public function get_icon() {
        return 'fas fa-percentage';
    }

    protected function _register_controls() {

        $this->start_controls_section(
            'section_KEYWORD',
            [
                'label' => __( 'KeyNumbers', 'elementor' ),
            ]
        );

        $this->add_control(
            'prefix',
            [
                'label' => __( 'Prefix', 'elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __( 'Enter a prefix', 'elementor' ),
                'title' => __( 'Prefix', 'elementor' ),
            ]
        );

        $this->add_control(
            'number',
            [
                'label' => __( 'Number', 'elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __( 'Enter a number', 'elementor' ),
                'title' => __( 'Number', 'elementor' ),
            ]
        );

        $this->add_control(
            'suffix',
            [
                'label' => __( 'Suffix', 'elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __( 'Enter a suffix', 'elementor' ),
                'title' => __( 'Suffix', 'elementor' ),
            ]
        );

        $this->add_control(
            'body',
            [
                'label' => __( 'Body', 'elementor' ),
                'type' => Controls_Manager::TEXTAREA,
                'default' => '',
                'placeholder' => __( 'Enter a body', 'elementor' ),
                'title' => __( 'Body', 'elementor' ),
            ]
        );

        $this->end_controls_section();
        $this->addBulbExtendedControl();
    }

    protected function render() {
        $settings = $this->get_settings();

        $html = '
            <div class="keyNumbers">
                <div class="keyNumbers__title">
                    <span class="keyNumbers__title__prefix">'.$settings['prefix'].'</span>
                    <span class="keyNumbers__title__number">'.$settings['number'].'</span>
                    <span class="keyNumbers__title__suffix">'.$settings['suffix'].'</span>
                </div>
                <div class="keyNumbers__body">'.$settings['body'].'</div>
             </div>';

        echo $html;
    }

    public function render_plain_content() {
        echo $this->get_settings( 'editor' );
    }

    protected function _content_template() {
        ?>
        <div class="keyNumbers">
            <div class="keyNumbers__title">
                <span class="keyNumbers__title__prefix">{{{settings.prefix}}}</span>
                <span class="keyNumbers__title__number">{{{settings.number}}}</span>
                <span class="keyNumbers__title__suffix">{{{settings.suffix}}}</span>
            </div>
            <div class="keyNumbers__body">{{{settings.body}}}</div>
        </div>
        <?php
    }

}
