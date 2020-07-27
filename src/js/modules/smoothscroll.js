import Utils from "./utils";
/**
 *
 */
class SmoothScroll{

	/**
	 *
	 * @param options
	 */
	constructor(Bulb){

		Utils.debug('Construct SmoothScroll');

		var self = this;
		this.bulb = Bulb;
		this.containerScrollable = $(this.bulb.options.containerScrollable);
		this.itemsReveable = $(this.bulb.options.itemsReveable);
		this.itemsParallaxable = $(this.bulb.options.itemsParallaxable);
		this.itemsFixedToTop = $(this.bulb.options.itemsFixedToTop);


		$('#app').on('SmoothPagesTransition:buildNextPage', () => {
			this.scrollParallaxResize();
		});


		if(this.containerScrollable){
			this.resizeContainer();
		}

		if(this.itemsParallaxable){
			this.scrollParallaxResize();
		}

		if(this.itemsFixedToTop){
			this.scrollFixedToTopInit();
			this.scrollFixedToTop();
		}

	}

	/**
	 *
	 */
	resizeContainer() {
		Utils.debug('resizeContainer');
		$('body').css({
			height: this.containerScrollable.outerHeight()
		});
	}


	/**
	 * Lorsqu'un item apparait sur le viewport
	 */
	scrollRevealHandler(elt){
		var element = $(elt);
		element.addClass('visible');
	}

	/**
	 * Lorsqu'un item dispparait sur le viewport
	 */
	scrollDisapearHandler(elt){
		var element = $(elt);
		element.removeClass('visible');
	}


	/**
	 *
	 */
	scrolling(){
		let self = this;

		this.windowHeight = $(window).height();
		this.windowScrollTop = $(window).scrollTop();

		/*
		if(this.containerScrollable){
				this.scrollableActions();
		}
		*/

		// on check si le site est scrollé
		if(this.windowScrollTop > 100){
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}

		if(this.itemsReveable){
			this.revealableActions();
		}

		if(this.itemsParallaxable){
			this.parallaxableActions();
		}

		if(this.itemsFixedToTop){
			this.scrollFixedToTop();
		}

		requestAnimationFrame(function(){self.scrolling()});

	}


	/**
	 * permet d
	 */
	revealableActions(){

		var revealableElements = $(this.bulb.options.itemsReveable);
		var self = this;
		revealableElements.each(function(){
			var element = $(this);
			if(Verge.inViewport(element)){
				self.scrollRevealHandler(this);
			} else {
				self.scrollDisapearHandler(this);
			}
		})
	}

	/**
	 * Action pour scroller le site (smooth)
	 */
	scrollableActions(){

		var destY = this.windowScrollTop;
		var currentY = -Utils.getTranslateY(this.containerScrollable);

		if (Math.round(currentY) != Math.round(destY)) {
			var newY = Math.round(currentY + ((destY - currentY) * 0.1));
			this.containerScrollable.css({
				transform: 'translate3d(0, -' + newY + 'px, 0)'
			});
			$(window).trigger('smoothscroll');
		}

	}

	/**
	 *
	 */
	scrollParallaxResize(){

		Utils.debug('SmoothScroll : scrollParallaxResize');

		$(this.bulb.options.itemsParallaxable).each(function() {
			var element = $(this);

			/*
			var transform = element.css('transform');
			element.css({
					transform: ''
			});
			*/
			element.attr('data-top', element.offset().top);
			element.attr('data-bottom', element.offset().top + element.outerHeight());
			element.attr('data-start', element.offset().top - $(window).height());
			element.attr('data-stop', element.offset().top + element.outerHeight());
			/*
			element.css({
					transform: transform
			});
			*/
		});
	}

	/**
	 * on initialise qu'une seule fois ces evenements
	 */
	scrollFixedToTopInit(){
		console.debug('scrollFixedToTopInit');
		this.itemsFixedToTop.each(function(){
			let $elt = $(this);
			let eltInfos = Verge.rectangle($elt);
			$elt.attr('data-fixedtotop', eltInfos.top + $(window).scrollTop());
			// on va ajouter un spacer qui va bien
			var spacer = $( "<div>", {
				class: "spacer", css: {
					height: eltInfos.height,
					display: 'none'
				}
			});
			$(this).after(spacer);

		});
	}

	/**
	 * appelé a chaque scroll tick
	 */
	scrollFixedToTop(){

		console.debug('scrollFixedToTop');

		$(this.bulb.options.itemsFixedToTop).each(function() {

			let $elt = $(this);

			if($(window).scrollTop()  > $elt.data('fixedtotop')){
				// on ajoute un spacer
				$elt.addClass('fixed');
				$(this).next('.spacer').show();
			} else {
				// on supprimer le spacer en question
				/*
				console.debug($(this).next('.spacer'));
				$(this).next('.spacer').remove();

				*/
				$(this).next('.spacer').hide();
				$elt.removeClass('fixed');
			}

		});

	}


	/**
	 * Action pour gérer les effets paralaxes sur les items
	 */
	parallaxableActions(){

		var scrollElements = $(this.bulb.options.itemsParallaxable);
		var self = this;

		if (scrollElements != null) {
			scrollElements.each(function() {

				var element = $(this);
				var level = Number(element.attr('data-level'));
				var amplitude = - self.windowHeight;
				var movement = amplitude / (5 / level);


				var start = element.attr('data-start');
				var stop = element.attr('data-stop');
				var percent = ((self.windowScrollTop - start) / (stop - start)) -0.5;
				var destY = movement * percent;
				var currentY = 0;
				var transform = element.css('transform');
				if (transform != 'none')
					currentY = parseFloat(element.css('transform').split(',')[5]);
				if (level > 0)
					var newY = currentY + ((destY - currentY) * 0.1);
				else
					var newY = currentY + ((destY - currentY) * 0.5);


				gsap.set(element, {y: newY});


			});
		}
	}


}


module.exports = SmoothScroll;
