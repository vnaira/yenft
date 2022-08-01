(function($) {
	"use strict";

	$(document).ready(function () {
		$("#owl-carousel-advisors, #owl-carousel-our-team").owlCarousel(
			{
				loop: true,
				margin: 0,
				nav: true,
				dots: false,
				navText: ['<div class="button-inner"><span class="angle-left" aria-hidden="true"></span></div>', '<div class="button-inner"><span class="angle-right" aria-hidden="true"></span></div>'],
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					768: {
						items: 4
					},
					1000: {
						items: 4
					},
					1200: {
						items: 4
					}
				}
			}
		);
		// $("#owl-carousel-partners").owlCarousel(
		// 	{
		// 		loop: true,
		// 		margin: 0,
		// 		nav: true,
		// 		dots: false,
		// 		navText: ['<div class="button-inner"><span class="angle-left" aria-hidden="true"></span></div>', '<div class="button-inner"><span class="angle-right" aria-hidden="true"></span></div>'],
		// 		responsive: {
		// 			0: {
		// 				items: 2
		// 			},
		// 			600: {
		// 				items: 2
		// 			},
		// 			1000: {
		// 				items: 6
		// 			}
		// 		}
		// 	}
		// );
	});

	$(document).ready(function () {
		$('#big-menu').click(function () {
			$('body').removeClass('nav-active');
		});


		$(window).on('scroll', function () {
			if($(window).scrollTop() > 50) {
				$("#top-header").addClass("active_header");
			} else {
				$("#top-header").removeClass("active_header");
			}
		});


		// add menu item active onclick and onscroll
		let section = document.querySelectorAll('section');
		let lists = document.querySelectorAll('.nav .nav__content .nav__list .nav-link_');
		function activeLink(li) {
			lists.forEach((item) => item.classList.remove('active'));
			li.classList.add('active');
		}
		lists.forEach((item) =>
			item.addEventListener('click', function(){
				activeLink(this);
			}));

		window.onscroll = () => {
			section.forEach(sec => {
				let top = window.scrollY;
				let offset = sec.offsetTop - 20;
				let height = sec.offsetHeight;
				let id = sec.getAttribute('id');
				console.log(top + " top")
				console.log(offset + " offset")
				console.log(height + " height")
				console.log(height + offset)

				if (top >= offset && top < offset + height) {
					const target = document.querySelector(`[href='#${id}']`);
					activeLink(target);
				}
			})
		};
	});


	//Navigation
	// menu with animation
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();

})(jQuery);
