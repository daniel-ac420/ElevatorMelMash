/* --- BANNER SLIDER --- */

$(function(){
	$(".slider").slick({
		arrows: true,
		prevArrow: '<img class="slider-arrow slider-arrow--left" src="images/header/icons/banner-arrow-left.svg" alt="" title="Предыдущий слайд">',
		nextArrow: '<img class="slider-arrow slider-arrow--right" src="images/header/icons/banner-arrow-right.svg" alt="" title="Следующий слайд">',
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		fade: false,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					dots: false
				}
			}
		]
	});
});



/* --- NEWS SLIDER --- */

const swiper = new Swiper('.news-slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 30,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		769: {
			slidesPerView: 3
		},
		541: {
			slidesPerView: 2
		}
	}
});



/* --- MOBILE MENU --- */

const mobileMenuButton = document.querySelector(".mobile-menu-button");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", function() {
	if (!this.classList.contains("active")) {
		this.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	}
})



const closeButton = document.querySelector(".button-close");

closeButton.addEventListener("click", function() {
	if (mobileMenu.classList.contains("active")) {
		mobileMenu.classList.toggle("active");
		mobileMenuButton.classList.toggle("active");
	}
})