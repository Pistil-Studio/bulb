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

}

////////////////////////////////////////
$('document').ready(function () {
    var App = new Website();
})

