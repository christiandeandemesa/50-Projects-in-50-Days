const progress = document.getElementById('progress'); // progress is the progress line.
const prev = document.getElementById('prev'); // prev is the prev button.
const next = document.getElementById('next'); // next is the next button.
const circles = document.querySelectorAll('.circle'); // circles are the progress numbers.

// Initializes the current number of progress numbers with an active class as 1.
let currActive = 1;

// Prev button click event.
prev.addEventListener('click', () => {
	currActive--;
	if (currActive < 1) currActive = 1;
	update();
});

// Next button click event.
next.addEventListener('click', () => {
	currActive++;
	if (currActive > circles.length) currActive = circles.length;
	update();
});

function update() {
	// For each circle/progress number and its respective index in circles...
	circles.forEach((circle, idx) => {
		// If the circle's/progress number's index is smaller than currActive, add the class name of active.
		if (idx < currActive) circle.classList.add('active');
		// If the circle's/progress number's index is not smaller than currActive, remove the class name of active.
		else circle.classList.remove('active');
	});

	const actives = document.querySelectorAll('.active'); // actives is the number of elements with the 'active' class name.

	// The progress line's width is equal to this formula, and will change depending on how large actives is.
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	// Disables the prev button.
	if (currActive === 1) prev.disabled = true;
	// Disables the next button.
	else if (currActive === circles.length) next.disabled = true;
	// Enables the prev and next buttons.
	else {
		prev.disabled = false;
		next.disabled = false;
	}
}
