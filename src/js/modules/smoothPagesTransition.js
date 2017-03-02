//const Barba = require('barba.js');

/**
 * Gestion des changements de page smooth
 * Nous utilisons Barba.js pour faire ceci
 * http://barbajs.org/
 */
class SmoothPagesTransition{

    /**
     *
     */
    constructor(Bulb){
        Utils.debug('Construct SmoothPage');
        this.bulb = Bulb;
    }

    /**
     *
     */
    init(){
        self = this;

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

    /**
     * Transition de disparition par defaut de Bulb
     * Pas glop, mais c'est du vite fait bien fait
     * @param elt
     * @returns {Promise}
     */
    pageDefaultCleanTransition(elt){
        return new Promise(function(resolve){
            var t = new TimelineMax({ paused: true, onComplete: function(){ resolve(true) }});
            t.to($(elt), 1, {alpha: 0, y:-50});
            t.play();
        })
    }


    /**
     * Transition d'apparition par defaut de Bulb
     * Pas glop, mais c'est du vite fait bien fait
     * @param elt
     * @param BarbaBaseTrantion
     */
    pageDefaultAppearTransition(elt, BarbaBaseTrantion){


        TweenMax.set($(elt), {visibility : 'visible', opacity : 0, y: -50});

        var t = new TimelineMax({ paused: true, onComplete: function(){BarbaBaseTrantion.done();}});
        t.to($(elt), 1, {alpha: 1, y:0});
        t.play();
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

                Utils.debug('page transtion : start');

                this._newContainerPromise.then(
                    function(){
                        Utils.debug('$$$');
                        _this.clearCurentPage();
                    }
                );

                /*
                // choix de la transition
                var cleaningTransition = self.pageDefaultCleanTransition(_this.oldContainer);

                Promise
                    .all([this.newContainerLoading, cleaningTransition])
                    .then(this.buildNextPage.bind(this));
                   */
            },

            /**
             *
             */
            clearCurentPage: function(){
                var _this = this;
                Utils.debug('page transtion : _newContainerPromise then');
                var cleaningTransition = self.pageDefaultCleanTransition(_this.oldContainer);
                cleaningTransition.then(
                    function(){
                        _this.buildNextPage()
                    }
                );

            },



            buildNextPage: function() {

                Utils.debug(this);
                Utils.debug('pageTransition : buildNextPage');

                //$(this.newContainer).trigger('buildNextPage');

                $(this.oldContainer).hide();
                $(self.bulb.options.containerScrollable).trigger('SmoothPagesTransition:buildNextPage');
                self.pageDefaultAppearTransition(this.newContainer, this);
            }
        });

    }



}

module.exports = SmoothPagesTransition;