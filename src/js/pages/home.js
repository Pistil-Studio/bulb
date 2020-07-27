const Barba = require('barba.js');

var Homepage = Barba.BaseView.extend({
    namespace: 'home',
    onEnter: function() {
        console.debug('HOME : The new Container is ready and attached to the DOM.');
    },
    onEnterCompleted: function() {
        console.debug('HOME : The Transition has just finished.');
    },
    onLeave: function() {
        console.debug('HOME : A new Transition toward a new page has just started.');
    },
    onLeaveCompleted: function() {
        console.debug('HOME : The Container has just been removed from the DOM.');
    }
});


module.exports = Homepage;