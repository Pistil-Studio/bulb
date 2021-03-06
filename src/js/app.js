////////////////////////////////////////
// Vendors
////////////////////////////////////////
import $ from 'jquery';



////////////////////////////////////////
// Bulb micro Framework
////////////////////////////////////////
import Bulb from "./modules/bulb";
import Utils from "./modules/utils";




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

