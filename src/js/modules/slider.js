import Utils from "./utils";
import $ from 'jquery';
import 'slick-carousel';

class Slider {

    /**
     * @param options
     */
    constructor() {

        Utils.debug('SLIDER :: construct');

        this.$widgets = $('.barba-container:last-child .slider');

        if(this.$widgets.length === 0){
            return;
        }


        this.$widgets.each((index, elt) => {
            this.init($(elt));
        })

    }




    init($elt) {
        console.debug('SLIDER :: init', $elt.find('.slick'));

        let $slick = $elt.find('.slick');

        $slick.slick({
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
            arrows: false,
            dots: true,
        });

        $elt.find('.slider__control__btnLeft').on('click', () => {
            $slick.slick('slickPrev');
        });
        $elt.find('.slider__control__btnRight').on('click', () => {
            $slick.slick('slickNext');
        });

    }


}

module.exports = Slider;
