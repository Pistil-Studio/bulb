////////////////////////////////////////
// Vendors
////////////////////////////////////////
global.$ = require('jquery');
global.Verge = require('verge');
global._ = require('underscore');
global.Barba = require('barba.js');
global.Utils = require('./modules/utils');



////////////////////////////////////////
// Bulb micro Framework
////////////////////////////////////////
const Bulb = require('./modules/bulb');





////////////////////////////////////////
// On configure toutes les vues ici
const HomeView = require('./pages/home').init();



class Website extends Bulb{
    /**
     * Evenements lancé uniquement au lancement du site
     */
    startEvents(){
        Utils.debug('App : startEvents');
    }

    /**
     * Evenement lancé à chaque changement de page
     */
    defaultEvents() {
        Utils.debug('App : defaultEvents');
    }
}

////////////////////////////////////////
$('document').ready(function () {
    var App = new Website();
    App.startEvents();
    App.defaultEvents();
})

