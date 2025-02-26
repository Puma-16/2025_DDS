/*
Name: 			Band
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version:	12.0.0
*/

(($ => {
    /*
    * Add "active" class to animate Custom Porto SVG Logo
    */
    $(window).on('load', () => {
        setTimeout(() => {
            $('.custom-porto-svg-logo').addClass('active');
        }, 1000);
    });

    /*
	* Scroll and Focus
	*/
    function scrollAndFocus($this, scrollTarget, focusTarget, scrollOffset, scrollAgain) {
		($ => {

			$('body').addClass('scrolling');

			// if it's inside a header menu
			if( $($this).closest('#mainNav').length ) {
				$($this).parents('.collapse.show').collapse('hide');
			}

			$('html, body').animate({
				scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
			}, 300, () => {
				$('body').removeClass('scrolling');

				setTimeout(() => {
					$(focusTarget).focus();
				}, 500);

				if( scrollAgain ) {
					$('html, body').animate({
						scrollTop: $(scrollTarget).offset().top - (scrollOffset ? scrollOffset : 0)
					});
				}
			});
		})(jQuery);
	}

    $('[data-scroll-and-focus]').on('click', function() {
		scrollAndFocus($(this), '#contact', '#name', 70, true);
	});


	document.addEventListener("DOMContentLoaded", function () {
		let images = [
			'img/demos/band/backgrounds/B1.png',
			'img/demos/band/backgrounds/B2.png',
			'img/demos/band/backgrounds/B3.png',
			'img/demos/band/backgrounds/B4.png',
		];
		
		let section = document.getElementById("background-slider");
		let index = 0;

		function changeBackground() {
			index = (index + 1) % images.length;
			section.style.backgroundImage = `url(${images[index]})`;
		}

		// Establece la primera imagen y luego inicia el cambio de fondo cada 5 segundos
		section.style.backgroundImage = `url(${images[0]})`;
		setInterval(changeBackground, 5000);
	});


})).apply( this, [ jQuery ]);