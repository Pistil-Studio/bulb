import Utils from "./utils";
import Barba from 'barba.js';
import Verge from 'verge';

/**
 * Gestion des changements de page smooth
 * Nous utilisons Barba.js pour faire ceci
 * http://Barbajs.org/
 */
class SmoothPagesTransition{

	/**
	 *
	 */
	constructor(Bulb){
		Utils.debug('SmoothPage : Construct');
		this.bulb = Bulb;
	}

	/**
	 *
	 */
	init(){
		let self = this;

		console.debug('Barba', Barba);

		this.changePreventCheck();

		Barba.Pjax.start();
		Barba.Pjax.getTransition = function() {
			return self.pageTransition();
		};

		Barba.Dispatcher.on('initStateChange', function(currentStatus) {
			Utils.debug('loading new page');
		});

		Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
			Utils.debug('new page ready');
		});


	}


	changePreventCheck(){

		console.debug('SmoothPageTransition : changePreventCheck');

		Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;

		Barba.Pjax.preventCheck = function(evt, element) {

			if (!Barba.Pjax.originalPreventCheck(evt, element)) {
				return false;
			}

			// No need to check for element.href -
			// originalPreventCheck does this for us! (and more!)
			if (/.pdf/.test(element.href.toLowerCase())) {
				return false;
			}

			// on vire tous les liens de l'admin bar
			if($(element).parents('#wpadminbar').length){
				return false;
			}

			return true;
		};
	}

	/**
	 * Transition de disparition par defaut de Bulb
	 * Pas glop, mais c'est du vite fait bien fait
	 * @param elt
	 * @returns {Promise}
	 */
	pageDefaultCleanTransition(elt){
		return new Promise(function(resolve){
			resolve(true);
		})
	}


	/**
	 * Transition d'apparition par defaut de Bulb
	 * Pas glop, mais c'est du vite fait bien fait
	 * @param elt
	 * @param BarbaBaseTrantion
	 */
	pageDefaultAppearTransition(elt, BarbaBaseTrantion, bulb) {
		BarbaBaseTrantion.done();
		$(bulb.options.containerScrollable).trigger('SmoothPagesTransition:buildNextPage');
		/*
			gsap.set(
					$(elt),
					{
							visibility: 'visible',
							opacity: 1,
							y: Verge.viewportH()
					}
			);
			var t = new gsap.timeline(
					{
							paused: true,
							onComplete: function(){
									BarbaBaseTrantion.done();
									$(bulb.options.containerScrollable).trigger('SmoothPagesTransition:buildNextPage');
							}
					}
			);
			t.to($(elt), 1.5, {y: 0, ease: Expo.easeInOut})
			t.play();
		 */
	}


	/**
	 *
	 * @returns {*|Object}
	 */
	pageTransition(){
		var self = this;

		return Barba.BaseTransition.extend({


			start: function() {
				var _this = this;

				Utils.debug('page transition : start');
				self.bulb.menu.close();
				self.bulb.openLoader();

				Promise
					.all([this.newContainerLoading, _this.clearCurrentPage()])
					.then( this.loadNextPageAssets.bind(this) );


			},


			/**
			 *
			 */
			clearCurrentPage: function(){
				let _this = this;
				let cleaningTransition = self.pageDefaultCleanTransition(_this.oldContainer);
				Utils.debug('pageTransition : clearCurrentPage');
				return cleaningTransition;
			},


			/**
			 *
			 */
			loadNextPageAssets: function(){
				Utils.debug('pageTransition : loadNextPageAssets    ');
				Utils.debug(this);
				let _this = this;
				let preloadAssetsPromise = self.bulb.preloadAssets();
				preloadAssetsPromise.then(function(){
					_this.buildNextPage();
				});

			},






			buildNextPage: function() {
				var _this = this;

				Utils.debug('pageTransition : buildNextPage');
				self.bulb.defaultEvents();
				self.bulb.closeLoader();


				/*
				ga('send', {
						hitType: 'pageview',
						page: location.pathname
				});
				*/

				self.pageDefaultAppearTransition(this.newContainer, this, self.bulb);
			}
		});

	}



}

export default  SmoothPagesTransition;
