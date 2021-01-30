import jQuery from 'jquery'
import 'slick-carousel'
import 'select2'
import Slideout from 'slideout'

(function ($, Slideout) {

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	// Toggle button
	$('#hamburger').on('click', function () {
		slideout.toggle();
		var hiddenSvg = $(this).children(':hidden')
		var visibleSvg = $(this).children(':visible')

		hiddenSvg.show()
		visibleSvg.hide()
	});

	function initSliders() {
		var sliderTheme1NextArrowIcon = '<svg class="slider-theme-1__arrow-icon slider-theme-1__next-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84627 12.0171L6.88898 7.00158L1.84628 1.98605" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'
		var sliderTheme1PrevArrowIcon = '<svg class="slider-theme-1__arrow-icon slider-theme-1__prev-icon" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.15373 1.98293L2.11102 6.99845L7.15373 12.014" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>'

		var sliderTheme2NextArrowIcon = '<svg class="slider-theme-2__arrow-icon slider-theme-2__next-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#1D1919"/></svg>'
		var sliderTheme2PrevArrowIcon = '<svg class="slider-theme-2__arrow-icon slider-theme-2__next-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#1D1919"/></svg>'

		$('.js-slider-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			dotsClass: 'slider-theme-1__dots bottom-4',
			nextArrow: '<button class="slider-theme-1__arrow slider-theme-1__next">' + sliderTheme1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider-theme-1__arrow slider-theme-1__prev">' + sliderTheme1PrevArrowIcon + '</button>',
		})

		$('.js-slider-2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			mobileFirst: true,
			dots: true,
			// arrows: false,
			dotsClass: 'slider-theme-1__dots',
			nextArrow: '<button class="slider-theme-1__arrow slider-theme-1__next">' + sliderTheme1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider-theme-1__arrow slider-theme-1__prev">' + sliderTheme1PrevArrowIcon + '</button>',
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
			dotsClass: 'slider-theme-1__dots bottom-4',
			nextArrow: '<button class="slider-theme-1__arrow slider-theme-1__next" style="right: 15px">' + sliderTheme1NextArrowIcon + '</button>',
			prevArrow: '<button class="slider-theme-1__arrow slider-theme-1__prev" style="left: 15px">' + sliderTheme1PrevArrowIcon + '</button>',
			responsive: [{
				breakpoint: 992,
				settings: "unslick",
			}]
		})

		$('.js-slider-4').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			mobileFirst: true,
			nextArrow: '<button class="slider-theme-2__arrow slider-theme-2__next">' + sliderTheme2NextArrowIcon + '</button>',
			prevArrow: '<button class="slider-theme-2__arrow slider-theme-2__prev">' + sliderTheme2PrevArrowIcon + '</button>',
			responsive: [{
				breakpoint: 576,
				settings: {
					slidesToShow: 3.9,
				}
			}, {
				breakpoint: 320,
				settings: {
					slidesToShow: 2.5,
				}
			}]

		})
	}

	$('.js-category-block-more').on('click', function(e) {
		var $target = $(e.target)
		var $hidden = $target.closest('.js-category-block').find('.js-category-block-children').children('.d-none')
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
	$('.js-select').select2({
		minimumResultsForSearch: -1,
		width: "100%"
	})
	// console.log(Slideout)
})(jQuery, Slideout)
