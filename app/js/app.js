import jQuery from 'jquery'
import 'slick-carousel'
import Slideout from 'slideout'

(function ($, Slideout) {

	function initSliders() {
		var slider1NextArrowIcon = '<svg class="slider1__arrow-icon slider1__next-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84627 12.0171L6.88898 7.00158L1.84628 1.98605" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'
		var slider1PrevArrowIcon = '<svg class="slider1__arrow-icon slider1__prev-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.15373 1.98293L2.11102 6.99845L7.15373 12.014" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'

		$('.js-slider1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: 'slider1__dots bottom-4',
			nextArrow: '<button class="slider1__arrow slider1__next">' + slider1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider1__arrow slider1__prev">' + slider1PrevArrowIcon + '</button>',
		})

		$('.js-slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			mobileFirst: true,
			dots: true,
			// arrows: false,
			dotsClass: 'slider1__dots',
			nextArrow: '<button class="slider1__arrow slider1__next">' + slider1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider1__arrow slider1__prev">' + slider1PrevArrowIcon + '</button>',
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					arrows: true,
					dots: false,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					arrows: true,
					dots: false,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			}]

		})

		$('.js-slider-3').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			dots: true,
			adaptiveHeight: true,
			dotsClass: 'slider1__dots bottom-4',
			nextArrow: '<button class="slider1__arrow slider1__next" style="right: 15px">' + slider1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider1__arrow slider1__prev" style="left: 15px">' + slider1PrevArrowIcon + '</button>',
			responsive: [{
				breakpoint: 992,
				settings: "unslick",
			}]
		})
	}

	$('.js-category-card-more').on('click', function(e) {
		var $target = $(e.target)
		var $hidden = $target.closest('.js-category-card').find('.js-category-card-children').children('.d-none')
		var toReveal = 6

		e.preventDefault()

		if ($hidden > toReveal) {
			$hidden.slice(0, toReveal).removeClass('d-none')
		} else {
			$hidden.removeClass('d-none')
			$target.remove()
		}
	})

	initSliders()
	// console.log(Slideout)
})(jQuery, Slideout)
