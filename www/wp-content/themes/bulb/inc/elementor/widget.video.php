<?php

namespace Elementor;

/**
 * Class My_Widget
 */
class Bulb_WidgetVideo extends Bulb_WidgetBase
{
    public function get_name()
    {
        return 'bulb-video';
    }

    public function get_title()
    {
        return __('Bulb - Video', 'elementor');
    }

    public function get_icon()
    {
        return 'fa fa-video';
    }

    protected function _register_controls()
    {
        $this->start_controls_section(
            'section_VIDEO',
            [
                'label' => __('Video', 'elementor'),
                'tab' => Controls_Manager::TAB_CONTENT
            ]
        );

        $this->add_control(
            'photo',
            [
                'label' => __('Importer une image', 'elementor'),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => Utils::get_placeholder_image_src()
                ]
            ]
        );

        $this->add_control(
            'idVideo',
            [
                'label' => __('ID VIDEO', 'elementor'),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __('Enter ID VIDEO', 'elementor'),
                'title' => __('Entrer l\'id dela vidéo', 'elemenor')
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => __('IMAGE', 'elementor'),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __('Enter IMAGE URL', 'elementor'),
                'title' => __('Entrer l\'url de l\'image', 'elemenor')
            ]
        );

        $this->add_control(
            'url',
            [
                'label' => __('VIDEO', 'elementor'),
                'type' => Controls_Manager::TEXT,
                'default' => '',
                'placeholder' => __('Enter URL', 'elementor'),
                'title' => __('Entrer  l\'url de la video', 'elemenor')
            ]
        );

        $this->add_control(
            'parallaxe',
            [
                'label' => __('Parallaxe', 'elementor'),
                'type' => Controls_Manager::SWITCHER,
                'default' => '',
                'title' => __('Ajout du parallaxe à la video', 'elemenor')
            ]
        );

        $this->end_controls_section();
    }

    protected function render()
    {
        $settings = $this->get_settings();

        $parallaxable = '';
        if(!empty($settings['parallaxe'])){
            $parallaxable = 'parallaxable';
        }

        echo <<<HTML
			<div class="video {$parallaxable}" data-uid="{$settings['idVideo']}" data-level="4">
				<div class="video__content">
					<div class="video__image" style="background-image: url({$settings['photo']['url']});">
						<div class="video__image__play"></div>
					</div>
					<div class="video-frame" id="player{$settings['idVideo']}"></div>
				</div>
			</div>
HTML;

    }

    public function render_plain_content()
    {
        echo $this->get_settings('editor');
    }

    protected function _content_template()
    {
        ?>
        <div class="video" data-uid="{{ settings.idVideo }}">
            <div class="video__content">
                <div class="video__image" style="background-image: url({{ settings.photo.url }})">
                    <div class="video__image" data-video-image={{ settings.photo.url}}>
                        <div class="video__image__play"></div>
                    </div>
                    <div class="video-frame" id="player{{ settings.idVideo }}"></div>
                </div>
            </div>
        <?php
    }
}
