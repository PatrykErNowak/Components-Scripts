const slider = function () {
	// Variables
	// HTML Elements
	const slides = document.querySelectorAll('.slide');
	const btnLeft = document.querySelector('.slider__btn--left');
	const btnRight = document.querySelector('.slider__btn--right');
	const dots = document.querySelector('.dots');
	// Functionality variables
	let currentSlide = 0;
	const lastSlide = slides.length - 1;

	// Functions
	const moveSlide = function (slide) {
		slides.forEach((s, i) => {
			s.style.transform = `translateX(${(i - slide) * 100}%)`;
		});
		fillActiveDot(slide);
	};

	const nextSlide = () => {
		if (currentSlide >= lastSlide) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		moveSlide(currentSlide);
	};

	const previousSlide = () => {
		if (currentSlide === 0) {
			currentSlide = lastSlide;
		} else {
			currentSlide--;
		}
		moveSlide(currentSlide);
	};

	const createDots = function () {
		slides.forEach((s, i) => {
			const dot = document.createElement('button');
			dot.classList.add('dots__dot');
			dot.dataset.slide = i;
			dots.append(dot);
		});
	};

	const fillActiveDot = function (index) {
		const dotsArr = [...dots.children];
		dotsArr.forEach((dot) => dot.classList.remove('dots__dot--active'));
		dotsArr[index].classList.add('dots__dot--active');
	};

	const init = function () {
		createDots();
		moveSlide(0);
		fillActiveDot(0);
	};

	// Initialization
	init();

	// Event handlers
	btnRight.addEventListener('click', nextSlide);
	btnLeft.addEventListener('click', previousSlide);
	document.addEventListener('keydown', (e) => (e.key === 'ArrowRight' ? nextSlide() : ''));
	document.addEventListener('keydown', (e) => (e.key === 'ArrowLeft' ? previousSlide() : ''));
	dots.addEventListener('click', (e) => {
		if (e.target.classList.contains('dots__dot')) {
			const targetSlide = +e.target.dataset.slide;
			currentSlide = targetSlide;
			moveSlide(targetSlide);
		}
	});
};
slider();
