

/**
 * Classse d'utilitaires divers
 * Si une fonction peut être utiles pour une autre projet, on met ici
 */
export default class Utils {

	constructor (){
		//this.debug('Utils : construct')
	}

	/**
	 *
	 * @param mes
	 */
	static copyrights(mes){
		if(console != undefined){
			console.log('');
			console.log('%c Devs by Pistil Studio', 'background: #ff4d6d; color: #fbf2e8; padding: 5px');
			console.log('');
		}
	}


	/**
	 *
	 * @param element
	 * @returns {*|number}
	 */
	static getTranslateY(element) {
		var style = window.getComputedStyle(element.get(0));
		var matrix = style.getPropertyValue("-webkit-transform") || style.getPropertyValue("-moz-transform") || style.getPropertyValue("-ms-transform") || style.getPropertyValue("-o-transform") || style.getPropertyValue("transform");
		if (matrix === 'none') {
			matrix = 'matrix(0,0,0,0,0)';
		}
		var values = matrix.match(/([-+]?[\d\.]+)/g);
		return parseFloat(values[14]) || parseFloat(values[5]) || 0;
	};


	/**
	 *
	 * @param msg
	 */
	static debug(msg){
		if(console != undefined){
			console.log(msg);
		}
	}



	static isTabOrMobile(){
		let w = Verge.viewportW();
		if(w <= 1024){
			return true;
		} else {
			return false;
		}
	}

	static isIe(){

		let ua = window.navigator.userAgent;

		let msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		let trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		let edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		// other browser
		return false;
	}


	/**
	 *
	 * @param cname
	 * @param cvalue
	 * @param exdays
	 */
	static setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}


	/**
	 *
	 * @param cname
	 * @returns {*}
	 */
	static getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}


	static disabledHover(){

		var touch = 'ontouchstart' in document.documentElement
			|| navigator.maxTouchPoints > 0
			|| navigator.msMaxTouchPoints > 0;

		if (touch) { // remove all :hover stylesheets
			try { // prevent exception on browsers not supporting DOM styleSheets properly
				for (var si in document.styleSheets) {
					var styleSheet = document.styleSheets[si];
					if (!styleSheet.rules) continue;

					for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
						if (!styleSheet.rules[ri].selectorText) continue;

						if (styleSheet.rules[ri].selectorText.match(':hover')) {
							styleSheet.deleteRule(ri);
						}
					}
				}
			} catch (ex) {}
		} else {
			$('body').addClass('noTouch');
		}
	}


}
