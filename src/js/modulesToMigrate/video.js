import Utils from "../lib/utils";
import YouTubePlayer from 'youtube-player';


class Video {

    /**
     * @param options
     */
    constructor() {

        Utils.debug('VIDEO :: construct');

        this.$videos = $('.video');

        if(this.$videos.length === 0){
            return;
        }

        this.$videos.each((index, elt) => {
            this.init($(elt));
        })

    }


    init($elt){
        console.debug('VIDEOS :: init');

        // on initialise le player en dessous de toutes les images
        $elt.player = YouTubePlayer('player' + $elt.data('uid'));
        $elt.uid = $elt.data('uid');

        // on check les changemetns d'état pour permettre de réafficher la miniature et le bouton play quand on pause le player
        $elt.player.on('stateChange', (event) => {
            if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
                this.showThumbnail($elt);
            }
        });

        // click sur l'image + bouton play qui est par dessus la vidéo
        $elt.find('.video__image').on('click', (index, elt) => {
            this.clickOnPlay($elt);
        });

    }

    /**
     * Handler qunad on click sur le bouton play
     * @param $elt
     */
    clickOnPlay($elt){
        $elt.player.loadVideoById($elt.uid);
        this.hideThumbnail($elt);
    }


    /**
     * Masque l'image et le bouton play du player
     * @param $elt
     */
    hideThumbnail($elt){
        gsap.to($elt.find('.video__image'), 0.6, {autoAlpha: 0});
        gsap.to($elt.find('.video__image__play'), 0.4, {yPercent: -50});
    }

    /**
     * Affiche l'image et le bouton play du player
     * @param $elt
     */
    showThumbnail($elt){
        gsap.to($elt.find('.video__image'), 0.6, {autoAlpha: 1});
        gsap.to($elt.find('.video__image__play'), 0.4, {yPercent: 0});
    }


}

module.exports = Video;
