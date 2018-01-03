/**
 *
 */

const SmoothScroll = require('./smoothscroll.js')
const SmoothPagesTransition = require('./smoothPagesTransition.js');
const Barba = require('barba.js');
const Menu = require('./menu.js');
const Sharer = require('./sharer');
const Cookiebar = require ('./cookieBar');

class Bulb {

    constructor (){

        Utils.copyrights();
        Utils.debug('Construct Bulb');

        this.name = 'Bulb web starter';
        this.version = '0.1';
        this.dev = true;
        this.options = {
            containerScrollable: '#app',
            itemsReveable: '.revealable',
            itemsParallaxable: '.parallaxable'
        };

        this.smoothscroll = new SmoothScroll(this);
        this.smoothPagesTransitions = new SmoothPagesTransition(this);

        this.menu = new Menu(this);
        this.sharer = new Sharer(this);
        this.cookieBar = new Cookiebar();

        this.$pageLoader = $('.page-loader');

        this.init();

    }


    /**
     *
     */
    init(){
        this.debug('Bulb init');
        this.initEvents();
        this.smoothPagesTransitions.init();
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
        let TL = new TimelineMax();
        TL.to(this.$pageLoader, 1, {autoAlpha: 1});
        TL.play()
    }

    closeLoader(){
        Utils.debug('Bulb :: Close loader');
        let TL = new TimelineMax();
        TL.to(this.$pageLoader, 1, {autoAlpha: 0});
        TL.play();
    }


    /**
     *
     */
    initEvents(){
        this.debug('initEvents');
        this.resizeHandler();
        this.requestAnimationFrameHandler();

        $(window).on('resize orientationchange', this.resizeHandler);
    }

    /**
     * On mettra ici tout ce qui est propre au resize du site
     */
    resizeHandler(){
        this.debug('resizeHandler');
        this.smoothscroll.resizeContainer();
    }



    /**
     *
     */
    requestAnimationFrameHandler(){
        var _this = this;
        requestAnimationFrame(function(){_this.smoothscroll.scrolling()});
    }



    /**
     * permet d'afficher dans la console si le mode dev est activé
     * @param msg
     */
    debug(msg){
        if(this.dev)
            Utils.debug(msg);
    }

}

module.exports = Bulb;