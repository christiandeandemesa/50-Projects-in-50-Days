const sliderContainer = document.querySelector('.slider-container'); // sliderContainer is both slides.
const leftSlide = document.querySelector('.left-slide'); // leftSlide is the left slides.
const rightSlide = document.querySelector('.right-slide'); // rightSlide is the right slides.
const downBtn = document.querySelector('.down-button'); // downBtn is the down button.
const upBtn = document.querySelector('.up-button'); // upBtn is the up button.
const slidesLength = rightSlide.querySelectorAll('div').length; // slidesLength is the number of the rightSlide's slides.

let activeSlideIdx = 0; // Initializes the displayed slides at the zero index.

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`; // Gives leftSlide top styling.

upBtn.addEventListener('click', () => changeSlide('up')); // When the upBtn is clicked, execute this function.
downBtn.addEventListener('click', () => changeSlide('down')); // When the downBtn is clicked, execute this function.

// Changes the current slide
const changeSlide = direction => {
	const sliderHeight = sliderContainer.clientHeight; // sliderHeight is the height of the viewport.

	// Increments the activeSlideIdx, or loops back to 0 if on the last slide.
	if (direction === 'up') {
		activeSlideIdx++;
		if (activeSlideIdx > slidesLength - 1) activeSlideIdx = 0;
	}

	// Decrements the activeSlideIdx, or loops forward to the last slide if on 0.
	else if (direction === 'down') {
		activeSlideIdx--;
		if (activeSlideIdx < 0) activeSlideIdx = slidesLength - 1;
	}

	leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`; // Moves the leftSlide on the Y axis.
	rightSlide.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`; // Moves the rightSlide on the Y axis.
};
