import $ from 'jquery';
import Utils from "./utils";
import Verge from 'verge';

/**
 *
 */
class Menu{

    /**
     *
     * @param options
     */
    constructor(Bulb){

        Utils.debug('Construct menu');

        this.bulb = Bulb;
        this.menuOpen = false;
        this.$menu = $('.main-menu');
        this.$btn = $('.main-menu__btn');
        this.TL_menu = false;
        this.init();

    }


    /**
     * Init
     */
    init(){
        Utils.debug('Init menu');

        let self = this;
        self.$btn.on('click', function(e){
            e.preventDefault();
            if(!self.menuOpen){
                self.open();
            } else {
                self.close();
            }
        });
    }


    /**
     * Open
     */
    open(){

        Utils.debug('Menu:Open');

        let self = this;
        self.menuOpen = true;
        self.$menu.addClass('main-menu_open');
        self.$btn.addClass('main-menu__btn_open');


        if(self.TL_menu) self.TL_menu.pause();
        self.TL_menu = new TimelineMax();
        self.TL_menu.add([
            gsap.to(self.$menu.find('.main-menu__content'), 0.4, {autoAlpha: 1, ease: Expo.easeInOut}),
        ]);

    }


    /**
     * Close
     */
    close(){

        Utils.debug('Menu:Close');

        let self = this;
        self.menuOpen = false;
        self.$menu.removeClass('main-menu_open');
        self.$btn.removeClass('main-menu__btn_open');


        if(self.TL_menu) self.TL_menu.pause();
        self.TL_menu = new TimelineMax();
        self.TL_menu.add([
            gsap.to(self.$menu.find('.main-menu__content'), 0.4, {autoAlpha: 0, ease: Expo.easeInOut})
        ]);

    }



}


module.exports = Menu;
