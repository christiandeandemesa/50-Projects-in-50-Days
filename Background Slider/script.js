const body = document.body; // body is the HTML body element.
const slides = document.querySelectorAll('.slide'); // slides is a nodelist where each element is a slide.
const leftBtn = document.getElementById('left'); // leftBtn is the left arrow button.
const rightBtn = document.getElementById('right'); // rightBtn is the right arrow button.

let activeSlide = 0; // Initializes the small slide as the first slide.

setBgToBody(); // Executes this function on page load.

// If the right arrow button is clicked, change the small slide to be the next slide in the nodelist
rightBtn.addEventListener('click', () => {
	activeSlide++;
	if (activeSlide > slides.length - 1) activeSlide = 0; // Loops back to the first slide if you are on the last slide.
	setBgToBody();
	setActiveSlide();
});

// If the left arrow button is clicked, change the small slide to be the previous slide in the nodelist
leftBtn.addEventListener('click', () => {
	activeSlide--;
	if (activeSlide < 0) activeSlide = slides.length - 1; // Loops toward the last slide if you are on the first slide.
	setBgToBody();
	setActiveSlide();
});

// Sets the big slide to be the same image as the small slide
function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Removes the active class name from all small slides, then gives the current small slide the class name of active
function setActiveSlide() {
	slides.forEach(slide => slide.classList.remove('active'));
	slides[activeSlide].classList.add('active');
}
