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