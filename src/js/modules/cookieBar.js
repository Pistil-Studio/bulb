import $ from 'jquery';
import Utils from "./utils";
/**
 *
 */
class Cookiebar{

    constructor(){

        this.$bar = $('.cookie-bar');
        this.$close = this.$bar.find('.cookie-bar__close');
        let self = this;

        if(Utils.getCookie('cookieBar') != "1"){
            setTimeout(function(){
                self.$bar.removeClass('cookie-bar_closed');
            }, 2000);
        }

        this.$close.on('click', function(){
            self.$bar.addClass('cookie-bar_closed');
            Utils.setCookie('cookieBar', 1, 1);
            return false;
        });
    }
}


module.exports = Cookiebar;
