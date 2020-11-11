class Page{
    constructor(){

    }
}


/*
Barba.Pjax.start();


var APPTransition = Barba.BaseTransition.extend({

    start: function() {
        Promise
            .all([this.newContainerLoading, this.cleanCurrentPage()])
            .then(this.buildNextPage.bind(this));
    },


    cleanCurrentPage: function(){
        var _this = this;

        var cleanCurrentPagePromise = new Promise(function(resolve){
            var t = new TimelineMax({ paused: true, onComplete: function(){resolve(true)}});
            console.debug(_this.oldContainer.dataset.namespace);

            if(_this.oldContainer.dataset.namespace == 'work'){
                t.to( $(_this.oldContainer).find('.mainIntro'), 1, {color: '#00ff00'});
                t.to( $(_this.oldContainer), 2, { alpha: 0, backgroundColor: '#00ff00' } );

            } else if (_this.oldContainer.dataset.namespace == 'home'){
                t.to( $(_this.oldContainer), 2, { alpha: 0, backgroundColor: '#ff0000' } );

            } else if (_this.oldContainer.dataset.namespace == 'lab'){
                t.to( $(_this.oldContainer).find('.mainIntro'), 1, {color: '#0000FF'});
                t.to( $(_this.oldContainer), 2, { alpha: 0, backgroundColor: '#0000FF' } );
            }

            t.play();

        });
        return cleanCurrentPagePromise;
    },



    buildNextPage: function() {

        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility : 'visible',
            opacity : 0
        });


        $el.animate({ opacity: 1}, 2000, function() {
            console.debug('fin fade in')
            _this.done();
        });
    }
});




Barba.Pjax.getTransition = function() {
    return APPTransition;
};



Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {
    vc_js();
    initJsEvents();
});

    */