/**
 * Basé sur https://github.com/ellisonleao/sharer.js/blob/master/sharer.js
 */


class Sharer {

    constructor(Bulb) {
        Utils.debug('Construct Sharer');
        this.bulb = Bulb;
        this.init();
    }


    init(){

        let self = this;

        $(this.bulb.options.containerMain).on('click', '.sharer', {sharer: self},  function(e){
            e.data.sharer.launch($(this));
            return false;
        });
    }




    initLink($btn){

        function getUrl(){
            if($btn.data('url')){
                return $btn.data('url');
            } else {
                return document.location.href;
            }
        }

        function getTitle(){
            if($btn.data('title')){
                return $btn.data('title');
            } else {
                return document.title;
            }
        }


        let sharerType = $btn.data('sharer');

        this.conf = {
            facebook: {
                shareUrl: 'https://www.facebook.com/sharer/sharer.php',
                params: {u: getUrl()}
            },

            twitter: {
                shareUrl: 'https://twitter.com/intent/tweet/',
                params: {
                    text: getTitle(),
                    url: getUrl()
                }
            },
            linkedin: {
                shareUrl: 'https://www.linkedin.com/shareArticle',
                params: {
                    url: getUrl(),
                    mini: true
                }
            }
        }

        let sharerUrl = this.conf[sharerType].shareUrl;

        let p = this.conf[sharerType].params || {},
            keys = Object.keys(p),
            i,
            str = keys.length > 0 ? '?' : '';
        for (i = 0; i < keys.length; i++) {
            if (str !== '?') {
                str += '&';
            }
            if (p[keys[i]]) {
                str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
            }
        }
        sharerUrl += str;
        return sharerUrl;
    }


    launch($btn){

        let shareUrl = this.initLink($btn);

        let popWidth = 600,
            popHeight = 480,
            left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
            top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
            popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left,
            newWindow = window.open(shareUrl, '', popParams);

            if (window.focus) {
                newWindow.focus();
            }

    }



}



module.exports = Sharer;