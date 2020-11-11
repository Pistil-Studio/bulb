import Utils from "../lib/utils";
/**
 *
 */
class Popin{

    /**
     *
     * @param options
     */
    constructor(options){
        let defaults = {
            'valign' : 'top' // top ou center
        }

        this.options = $.extend( {}, defaults, options );
        this.init();
    }


    /**
     * Init
     */
    init(){
        Utils.debug('Popin : Init');

        let popinContentHtml = '';
        if(this.options.contentHtml){
            popinContentHtml = this.options.contentHtml;
        } else {
            popinContentHtml = this.options.content.html();
        }


        this.html = '<div class="popin '+this.options.id+'" id="'+this.options.id+'">';
        this.html+= '   <div class="popin-overlay"></div>';
        this.html+= '   <div class="popin-content popin-content__'+this.options.valign+'"><div class="popin-scrollable">';
        this.html+=     popinContentHtml;
        this.html+= '   </div>';
        this.html+= '   <a href="#" class="popin-close circleAnim close"><svg class="share-icon-circle black" width="30" height="30" viewBox="0 0 30 30"> <circle class="share-icon-circle-shape" r="14" cx="15" cy="15" style="opacity: 1;"> </circle> </svg> </a>';
        this.html+= '</div>';

        if(this.options.content) this.options.content.remove();

        this.elt = $(this.html).appendTo('#app');
        this.overlay = this.elt.find('.popin-overlay');
        this.cross = this.elt.find('.popin-close');

        let self = this;
        this.overlay.on('click', () => { this.close(); });
        this.cross.on('click', () => { this.close(); });

    }


    /**
     * Open
     */
    open(){
        this.closeAll();
        Utils.debug('Popin : open');
        this.elt.addClass('opened');
        gsap.set(this.elt.find('.popin-scrollable'), {y: 0});
        gsap.to(this.elt, 0.5, {autoAlpha: 1});
        $('body').addClass('hasPopin');
    }


    /**
     * Close
     */
    close(){
        Utils.debug('Popin : close');
        this.elt.removeClass('opened');
        let self = this;
        gsap.to(this.elt, 0.3, {autoAlpha: 0, onComplete: function(){
            if(self.options.contentHtml){
                $('.popin').remove();
            }
        }});
        $('body').removeClass('hasPopin');


    }


    /**
     *
     */
    closeAll(){
        gsap.set($('.popin.opened'), {autoAlpha: 0});
        $('.popin.opened').removeClass('opened');
    }

}


module.exports = Popin;
