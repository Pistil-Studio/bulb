<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>


<script>
/*
    document.addEventListener('DOMContentLoaded', function(){

        var assets = [];

        <!-- global assets -->
        assets.push({src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', id: 'jquery'});
        assets.push({src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js', id: 'tweenmax'});
        assets.push({src: '<?php echo get_template_directory_uri() . '/assets/js/app.js' ?>', id: 'js_all'});

        <!-- page assets -->
        var pageAssets = document.querySelector('.preloadAssets');
        if(pageAssets){
            pageAssetsArray = JSON.parse(pageAssets.innerHTML);
            assets = assets.concat(pageAssetsArray);
        }

        console.log(assets);

        var preloadJS = new createjs.LoadQueue(true);
        preloadJS.on("fileload", fileLoadProgress);
        preloadJS.on("complete", endLoading);
        preloadJS.loadManifest(assets);

        var fileLoaded = 0;
        function fileLoadProgress(event){
            fileLoaded ++;
            var percent =  (fileLoaded / assets.length);
            document.querySelector(".mainLoader-progress").style.width = (percent*100) + '%';
        }

				function endLoading(event){
					var tl = new gsap.timeline({
						onComplete: function(){
							jQuery('.mainLoader').remove();
						}
					});
					tl.delay(1);
					tl.add([
							gsap.to('.mainLoader-logo', 1.5, {xPercent: -1000,  ease: Expo.easeInOut}),
							gsap.to('.mainLoader', 1.5, {xPercent: 100, ease: Expo.easeInOut})
						]
					);
					tl.play();
				}

    });
    */
</script>



<div class="app" id="app">


		<div class="page-loader"></div>


    <header>
        <div class="cookie-bar cookie-bar_closed">
            Cookie bar
            <a href="#" class="cookie-bar__close">close</a>
        </div>
        <div class="logo">
            <?php function theme_prefix_the_custom_logo() {

                if ( function_exists( 'the_custom_logo' ) ) {
                    the_custom_logo();
                }

            }
            theme_prefix_the_custom_logo();
            ?>
        </div>

        <div class="main-menu">
            <div class="main-menu__btn">MENU</div>
            <div class="main-menu__content">
            <nav><?php wp_nav_menu( array('theme_location' => 'main_menu') ); ?></nav>
            </div>
        </div>

        <div class="page-loader">
            page loading (ajax call)
        </div>

    </header>


    <div id="barba-wrapper">
        <div class="barba-container" data-namespace="barbanamespace">
            <main>
