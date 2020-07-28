<?php

namespace Elementor;

/**
 * Class Cif_WidgetBase
 * Tous les widget créés sur ce site doivent étendre cette objet
 * le but est de mutualiser un certain nombre de propriétés communes
 */
class Bulb_WidgetBase extends Widget_Base {


    public function get_name() {
        return 'bulb-widgetbase';
    }

    public function get_categories() {
        return [ 'basic' ];
    }

    protected function addBulbExtendedControl(){

        /*
        $this->start_controls_section(
                'section_advanced_cif',
                [
                        'label' => __( 'Cif', 'elementor' ),
                        'tab'   => Controls_Manager::TAB_ADVANCED,
                ]
        );
        $this->add_control(
                'ratio',
                [
                        'label'       => __( 'Ratio', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'default' => '1x1',
                        'options' => [
                                '1x1'  => __( '1*1 (square)', 'elementor' ),
                                '2x2'  => __( '1*1 (square big)', 'elementor' ),
                                '2x1'  => __( '2*1 (wide)', 'elementor' ),
                                'auto' => __( 'auto (ajusted from content)', 'elementor' ),
                                'autoHalf' => __( '50% width auto (ajusted from content)', 'elementor' ),
                        ],
                        'prefix_class' => 'ratio-'
                ]
        );

        $this->add_control(
                'ratio_automobile',
                [
                        'label' => __( 'Hauteur automatique sur mobile', 'elementor' ),
                        'type' => Controls_Manager::SWITCHER,
                        'default' => '',
                        'prefix_class' => 'ratio-automobile-'
                ]
        );

        $this->add_control(
                'switch_with_prev',
                [
                        'label' => __( 'Inverser le bloc avec le précédent sur mobile', 'elementor' ),
                        'type' => Controls_Manager::SWITCHER,
                        'default' => '',
                        'prefix_class' => 'mobileinvert-'
                ]
        );

        $this->add_control(
                'valign',
                [
                        'label'       => __( 'Alignement vertical', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'default' => 'top',
                        'options' => [
                                'top'  => __( 'Top', 'elementor' ),
                                'middle'  => __( 'middle', 'elementor' ),
                                'bottom' => __( 'bottom', 'elementor' ),
                        ],
                        'prefix_class' => 'valign-'
                ]
        );

        $this->add_control(
                'bgColor',
                [
                        'label' => __( 'Background Color', 'elementor' ),
                        'type' => Controls_Manager::COLOR,
                        'default' => '#ffffff',
                        'scheme' => [
                                'type' => Scheme_Color::get_type(),
                                'value' => Scheme_Color::COLOR_1,
                        ],
                        'selectors' => [
                                '{{WRAPPER}}' => 'background-color: {{VALUE}}',
                        ],
                ]
        );


        $this->add_control(
                'bgImg',
                [
                        'label' => __( 'Background Image', 'elementor' ),
                        'type' => Controls_Manager::MEDIA,
                        'selectors' => [
                                '{{WRAPPER}}' => 'background-image: url("{{URL}}");',
                        ],
                ]
        );

        $this->add_control(
                'link_to',
                [
                        'label' => __( 'Link to', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'default' => 'none',
                        'options' => [
                                'none' => __( 'None', 'elementor' ),
                                'etude-de-cas' => __( 'Etude de cas', 'elementor' ),
                                'post' => __( 'Blog', 'elementor' ),
                                'page' => __( 'Page', 'elementor' ),
                                'external' => __( 'Externe', 'elementor' ),
                        ],
                ]
        );


        $this->add_control(
                'link_etude-de-cas',
                [
                        'label' => __( 'Lien vers étude de cas', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'options' => $this->getPostsSelect('etude-de-cas'),
                        'condition' => [
                                'link_to' => 'etude-de-cas',
                        ],
                        'show_label' => false,
                ]
        );

        $this->add_control(
                'link_post',
                [
                        'label' => __( 'Lien vers le post', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'options' => $this->getPostsSelect('post'),
                        'condition' => [
                                'link_to' => 'post',
                        ],
                        'show_label' => false,
                ]
        );

        $this->add_control(
                'link_page',
                [
                        'label' => __( 'Lien vers la page', 'elementor' ),
                        'type' => Controls_Manager::SELECT,
                        'options' => $this->getPostsSelect('page'),
                        'condition' => [
                                'link_to' => 'page',
                        ],
                        'show_label' => false,
                ]
        );


        $this->add_control(
                'link_url',
                [
                        'label' => __( 'URL de la page', 'elementor' ),
                        'type' => Controls_Manager::TEXT,
                        'condition' => [
                                'link_to' => 'external',
                        ],
                        'show_label' => false,
                ]
        );


        */



    }


    /**
     * @param $postType
     * @return array
     */
    protected function getPostsSelect($postType){

        $args = array(
            'posts_per_page' => -1,
            'post_type' => $postType
        );
        $etudedecas = get_posts( $args );
        $works = array();
        $works[0] = __('none', 'elementor');
        foreach( $etudedecas as  $etude){
            $works[$etude->ID] = $etude->post_title;
        }
        return $works;

    }

}
