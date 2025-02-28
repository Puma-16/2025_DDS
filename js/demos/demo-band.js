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
        const slides = document.querySelectorAll(".carousel-slide");
        let currentIndex = 0;

        function showNextSlide() {
            slides[currentIndex].classList.remove("active"); // Oculta la imagen actual
            currentIndex = (currentIndex + 1) % slides.length; // Siguiente índice
            slides[currentIndex].classList.add("active"); // Muestra la nueva imagen
        }

        setInterval(showNextSlide, 5000); // Cambia cada 5 segundos
    });
	
	
	
})).apply( this, [ jQuery ]);