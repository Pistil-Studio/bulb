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


        this.containerScrollable.on('SmoothPagesTransition:buildNextPage', () => {
            this.resizeContainer();
            this.scrollParallaxResize();
        });


        if(this.containerScrollable){
            this.resizeContainer();
        }

        if(this.itemsParallaxable){
            this.scrollParallaxResize();
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
        var self = this;

        this.windowHeight = $(window).height();
        this.windowScrollTop = $(window).scrollTop();

        if(this.containerScrollable){
            this.scrollableActions();
        }

        if(this.itemsReveable){
            this.revealableActions();
        }

        if(this.itemsParallaxable){
            this.parallaxableActions();
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


        $(this.bulb.options.itemsParallaxable).each(function() {
            var element = $(this);
            var transform = element.css('transform');
            element.css({
                transform: ''
            });
            element.attr('data-top', element.offset().top);
            element.attr('data-bottom', element.offset().top + element.outerHeight());
            element.attr('data-start', element.offset().top - $(window).height());
            element.attr('data-stop', element.offset().top + element.outerHeight());
            element.css({
                transform: transform
            });
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
                var offsetTop = element.attr('data-top');
                var offsetBottom = element.attr('data-bottom');
                var level = Number(element.attr('data-level'));
                var amplitude = - self.windowHeight;
                var movement = amplitude / (5 / level);



                if (offsetTop > (self.windowScrollTop + (self.windowHeight * 1.3))) {
                    element.css({
                        transform: 'translate3d(0, ' + (-movement * 0.5) + 'px, 0)'
                    });
                } else if (offsetBottom < (this.windowScrollTop * 0.7)) {
                    element.css({
                        transform: 'translate3d(0, ' + (movement * 0.5) + 'px, 0)'
                    });
                } else {

                    //console.debug(this.windowScrollTop);

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

                    //console.debug(newY);

                    element.css({
                        transform: 'translate3d(0, ' + (newY) + 'px, 0)'
                    });

                    /*
                    var image = element.find('> .image, .image-container > .image').not('.fixed');
                    if (image.length == 1) {
                        image.css({
                            top: 100 * percent
                        });
                    }
                    */
                }
            });
        }
    }


}


module.exports = SmoothScroll;