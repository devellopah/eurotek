import jQuery from 'jquery'
import 'slick-carousel'
import Slideout from 'slideout'

(function ($, Slideout) {

	function initSlider1() {
		var slider1NextArrowIcon = '<svg class="slider1__arrow-icon slider1__next-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84627 12.0171L6.88898 7.00158L1.84628 1.98605" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'
		var slider1PrevArrowIcon = '<svg class="slider1__arrow-icon slider1__prev-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.15373 1.98293L2.11102 6.99845L7.15373 12.014" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'

		$('.js-slider1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: 'slider1__dots',
			nextArrow: '<button class="slider1__arrow slider1__next">' + slider1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider1__arrow slider1__prev">' + slider1PrevArrowIcon + '</button>',
		})
	}

	function initSlider2() {
		$('.js-slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			mobileFirst: true,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
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
	}

	initSlider1();
	initSlider2();
	// console.log(Slideout)
})(jQuery, Slideout)
