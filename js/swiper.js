const initialSwiper = () => {
	const swiperWrapper = document.querySelector('.swiper')

	if (typeof Swiper === 'undefined' || !swiperWrapper) return

	const slidesWrapper = document.querySelector('.swiper-wrapper')
	const slides = slidesWrapper.querySelectorAll('.swiper-slide')

	slides.forEach(slide => {
		const clone = slide.cloneNode(true)
		slidesWrapper.appendChild(clone)
	})

	const swiper = new Swiper('.swiper', {
		slidesPerView: 3,
		spaceBetween: 30,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			768: {
				slidesPerView: 2,
			},

			1200: {
				slidesPerView: 3,
			}
		}
	})
}

initialSwiper()