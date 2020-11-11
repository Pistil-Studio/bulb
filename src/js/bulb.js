import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import modular from 'modujs';

import Utils from "./lib/utils";
import Cookiebar  from './bulbAssets/cookieBar';
import Menu from './bulbAssets/menu';
import BulbPageTransition from './bulbPageTransition';
import * as modules from './bulbModules';




/**
 * Bulb Micro "Framework"
 */
class Bulb {

    constructor (){

        Utils.copyrights();
        Utils.debug('Construct Bulb');

        this.name = 'Bulb web starter';
        this.version = '2.0';
        this.dev = true;

        // les différents container dont nous aurons besoin
        this.$app = $('#app');
        // correspond au loader entre le chargement des pages
        this.$pageLoader = $('.pageLoader');


        this.options = {
            useTicker: false,
            useScrollEffects: true,
            usePageTransition: true,
        };
        // correspond au loader principal à l'arrivée sur le site
        this.$mainLoader = $('.mainLoader');
        this.init();
    }


    /**
     *
     */
    init(){
        Utils.debug('Bulb init');
        this.initEvents();

        // gestion des modules
        this.modules = new modular({
            modules: modules
        });
        this.modules.init(this.modules);


        // Lancement du ticker au besoin
        if(this.options.useTicker){
            this.ticker();
        }

        // utilisation d'une librairie de scroll "locomotive"
        if(this.options.useScrollEffects){
            this.scroll = new LocomotiveScroll({
                el: this.$app.get(0),
                smooth: true
            });
        }
        // gestion des transition entre les page (barbaJs)
        if(this.options.usePageTransition){
            this.pageTransition = new BulbPageTransition(this)
        }

        // tous les composant qui son chargés quoi qu'il arrive
        new Cookiebar();
        new Menu();

        this.closeMainLoader();

    }

    /**
     *
     */
    closeMainLoader() {
        let tl = new gsap.timeline({
            onComplete: () => {
                this.$mainLoader.remove();
            }
        });
        tl.delay(1);
        tl.add([
                gsap.to(this.$mainLoader.find('.mainLoader-logo'), {duration: 1.5, xPercent: -1000,  ease: 'Expo.easeInOut'}),
                gsap.to(this.$mainLoader,{duration: 1.5, xPercent: 100, ease: 'Expo.easeInOut'})
            ]
        );
        tl.play();
    }


    /**
     *
     * @returns {Promise}
     */
    preloadAssets(){

        var self = this;
        //Utils.debug('####### try to preloadAssets');

        return new Promise(function(resolve){

            let $preloadAssets = $('.barba-container').find('.preloadAssets');
            if($preloadAssets.length == 1){
                $preloadAssets = $preloadAssets.eq(0);
            } else if($preloadAssets.length > 1) {
                $preloadAssets = $preloadAssets.eq($preloadAssets.length-1);
            }

            if($preloadAssets.length){
                let toload = $.parseJSON($preloadAssets.html());
                var preload = new createjs.LoadQueue(true);
                Utils.debug('####### to Load : ');
                Utils.debug(toload);
                preload.on("complete", function(){  Utils.debug('####### Assets loaded'); resolve(true)});
                preload.loadManifest(toload);
            } else {
                resolve(true)
            }

        });

    }

	openLoader(){
		Utils.debug('Bulb :: Open loader');
        return new Promise(resolve => {
            let TL = new gsap.timeline({
                    onComplete: resolve
                }
            );
            TL.fromTo(this.$pageLoader, {skewX: 10, xPercent: -10}, {duration: 2, skewX: 0, scaleX: 1, xPercent: 0, ease: 'Expo.easeInOut'});
            TL.set(this.$pageLoader, {transformOrigin: 'right center'});
            TL.play()
        });
	}

	closeLoader(){
		Utils.debug('Bulb :: Close loader');
		let TL = new gsap.timeline();
		TL.to(this.$pageLoader, {duration: 1.2, scaleX: 0, ease: 'Expo.easeInOut'});
		TL.set(this.$pageLoader, {transformOrigin: 'left center'});
		TL.play();
	}


    /**
     *
     */
    initEvents(){
        Utils.debug('initEvents');



        this.resizeHandler();
        $(window).on('resize orientationchange', this.resizeHandler());
    }

    /**
     * Todo : debounce la fonction
     * On mettra ici tout ce qui est propre au resize du site
     */
    resizeHandler(){
        //this.debug('resizeHandler');
    }


    /**
     * Todo : vérifier le ticker
     */
    ticker(){
        console.debug('Ticker');
        requestAnimationFrame( this.ticker() );
    }

}
export default Bulb;
