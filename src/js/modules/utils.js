

/**
 * Classse d'utilitaires divers
 * Si une fonction peut être utiles pour une autre projet, on met ici
 */
var Utils = function() {


    /**
     *
     * @param mes
     */
    Utils.prototype.copyrights = function(mes){
        if(console != undefined){
            console.log('');
            console.log('%c Devs by Pistil Studio', 'background: #ff4d6d; color: #fbf2e8; padding: 5px');
            console.log('');
            //console.log('Made with :  GSAP');
        }
    }


    /**
     *
     * @param element
     * @returns {*|number}
     */
    Utils.prototype.getTranslateY = function(element) {
        var style = window.getComputedStyle(element.get(0));
        var matrix = style.getPropertyValue("-webkit-transform") || style.getPropertyValue("-moz-transform") || style.getPropertyValue("-ms-transform") || style.getPropertyValue("-o-transform") || style.getPropertyValue("transform");
        if (matrix === 'none') {
            matrix = 'matrix(0,0,0,0,0)';
        }
        var values = matrix.match(/([-+]?[\d\.]+)/g);
        return values[14] || values[5] || 0;
    };


    /**
     *
     * @param msg
     */
    Utils.prototype.debug = function(msg){
        if(console != undefined){
            console.log(msg);
        }
    }


}

module.exports = new Utils();