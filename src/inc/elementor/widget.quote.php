<?php

namespace Elementor;

/**
 * Class My_Widget
 */
class Bulb_WidgetQuote extends Bulb_WidgetBase {


    public function get_name() {
        return 'bulb-quote';
    }

    public function get_title() {
        return __( 'Bulb - Quote', 'elementor' );
    }

    public function get_icon() {
        return 'fa  fa-quote-right';
    }

    protected function _register_controls() {

        $this->start_controls_section(
            'section_QUOTE',
            [
                'label' => __( 'Quote', 'elementor' ),
            ]
        );


        $this->add_control(
            'quote',
            [
                'label' => __( 'Text', 'elementor' ),
                'type' => Controls_Manager::TEXTAREA,
                'default' => '',
                'placeholder' => __( 'Enter quote author', 'elementor' ),
                'title' => __( 'Enter quote author', 'elementor' ),
            ]
        );

        $this->add_control(
            'authorName',
            [
                'label' => __( 'Author name', 'elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __( 'Enter quote author name', 'elementor' ),
                'title' => __( 'Enter quote author name', 'elementor' ),
            ]
        );
        $this->add_control(
            'authorTitle',
            [
                'label' => __( 'Author title', 'elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __( 'Enter quote author title', 'elementor' ),
                'title' => __( 'Enter quote author title', 'elementor' ),
            ]
        );

        $this->end_controls_section();

        $this->addBulbExtendedControl();

    }


    protected function render() {
        $settings = $this->get_settings();



        echo <<<HTML
		<div class="quote containerMini">
			<div class="quote__icn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 47 39"
					width="47px" height="39px">
					<path fill-rule="evenodd"  fill="rgb(63, 58, 59)"
								d="M28.016,0.743 L28.016,19.734 L38.837,19.734 C38.837,25.727 33.992,30.586 28.016,30.586 L28.016,38.724 C38.475,38.724 46.952,30.223 46.952,19.734 L46.952,0.743 L28.016,0.743 ZM0.965,19.734 L11.786,19.734 C11.786,25.727 6.941,30.586 0.965,30.586 L0.965,38.724 C11.424,38.724 19.901,30.223 19.901,19.734 L19.901,0.743 L0.965,0.743 L0.965,19.734 Z"/>
				</svg>
			</div>
			<div class="quote__content gradientTxt">
				{$settings['quote']}
			</div>
			<div class="quote__author">
				<div class="quote__author__name">{$settings['authorName']}</div>
				<div class="quote__author__title">{$settings['authorTitle']}</div>
			</div>
		</div>
HTML;


    }


    public function render_plain_content() {
        echo $this->get_settings( 'editor' );
    }


    protected function _content_template() {
        ?>

        <div class="quote containerMini">
            <div class="quote__icn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 47 39"
                    width="47px" height="39px">
                    <path fill-rule="evenodd"  fill="rgb(63, 58, 59)"
                          d="M28.016,0.743 L28.016,19.734 L38.837,19.734 C38.837,25.727 33.992,30.586 28.016,30.586 L28.016,38.724 C38.475,38.724 46.952,30.223 46.952,19.734 L46.952,0.743 L28.016,0.743 ZM0.965,19.734 L11.786,19.734 C11.786,25.727 6.941,30.586 0.965,30.586 L0.965,38.724 C11.424,38.724 19.901,30.223 19.901,19.734 L19.901,0.743 L0.965,0.743 L0.965,19.734 Z"/>
                </svg>
            </div>
            <div class="quote__content gradientTxt">
                {{{ settings.quote }}}
            </div>
            <div class="quote__author">
                <div class="quote__author__name">{{{ settings.authorName }}}</div>
                <div class="quote__author__title">{{{ settings.authorTitle }}}</div>
            </div>
        </div>

        <?php
    }

}
