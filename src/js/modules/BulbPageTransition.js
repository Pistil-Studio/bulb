import barba from '@barba/core';
import gsap from 'gsap';
import emitter from 'tiny-emitter/instance';
import $ from 'jquery';
import Utils from "./utils";

class BulbPageTransition{

    constructor(bulb){
        Utils.debug('BulbPageTransition : Construct');
        this.bulb = bulb;
        this.init();
    }

    init(){

        let _self = this;

        // On va configurer notre BarbaJs de manière assez minimaliste, pour qu'il fonctionne avec Analytics et Locomotive Scroll
        barba.hooks.beforeLeave((data) => {
            // petit evenement catchable pas notre appli au besoin
            emitter.emit('barba::beforeLeave');

            // on destroy locotomtive scroll
            this.bulb.scroll.destroy();

        });



        barba.hooks.after((data) => {

            this.refreshCustomHtml(data);

            // petit evenement catchable pas notre appli au besoin
            emitter.emit('barba::after');

            // on re init locotomtive scroll
            this.bulb.scroll.init();

            // on envoie un event analytics car rechargement en ajax
            if(typeof ga === "function"){
                ga('set', 'page', window.location.pathname);
                ga('send', 'pageview');
            }
        });





        // C'est la transition par defaut un volet qui masque le site pour laisser apparaitre la nouvelle page
        barba.init({
            debug: true,
            transitions: [{
                name: 'default',
                leave(data) {
                    console.debug('default-transition leave', _self);
                    return _self.bulb.openLoader();
                    // on peut faire des disparition plus sympa plutot qu'un simple overlay
                    //let tl = gsap.timeline();
                    //tl.to(data.current.container, {duration: 1, opacity: 0});
                    //return tl;
                },
                enter(data) {
                    console.debug('default-transition enter');
                    return _self.bulb.closeLoader();
                    let tl = gsap.timeline();
                    tl.fromTo(data.next.container, {opacity: 0}, {duration: 1, opacity: 1});
                    return tl;
                }
            }]
        })
    }

    /**
     * Permet de refresh des datas provenant de la page arrivante
     * Dans notre cas, on met à jours la classe du body, et on injuecte les styles "inlines" d'elementor
     * @param data
     */
    refreshCustomHtml(data){

        // on va sauvegarder les styles custom d'elementor, plus changer au besoin les styles sur le body
        let htmlObject = document.createElement('html');
        htmlObject.innerHTML = data.next.html;
        let newClassesToInject  = htmlObject.querySelector("body").className;
        let elementorsCssToInject = $(htmlObject).find('#elementor-frontend-inline-css').html();


        // on ajoute la classe du body
        $('body').removeClass().addClass(newClassesToInject);
        // on charge les styles iliens d'elementor
        $('#elementor-frontend-inline-css').html(elementorsCssToInject);


        console.debug(this);
    }

}


export default BulbPageTransition;

