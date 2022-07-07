const leftBtn = document.getElementById('left'); // leftBtn is the Prev button.
const rightBtn = document.getElementById('right'); // rightBtn is the Next button.
const imgContainer = document.querySelector('.image-container'); // imgContainer is the image container.
const imgs = document.querySelectorAll('img'); // img is a nodelist where each element is an img element.

let idx = 0; // Initial imgs index is 0.
let interval = setInterval(run, 2000); // Executes this function every 2000 milliseconds.

// When the Prev button is clicked, decrement the index, then execute these functions
leftBtn.addEventListener('click', () => {
	idx--;
	changeImage();
	resetInterval();
});

// When the Next button is clicked, increment the index, then execute these functions
rightBtn.addEventListener('click', () => {
	idx++;
	changeImage();
	resetInterval();
});

// Increments the index
function run() {
	idx++;
	changeImage();
}

// Moves the images in the image carousel relative to the index
function changeImage() {
	if (idx > imgs.length - 1)
		idx = 0; // If it displays the image at the last index and increments, loop back to the first index.
	else if (idx < 0) idx = imgs.length - 1; // If it display the image at the first index and decrements, loop forward to the last index.
	imgContainer.style.transform = `translateX(${-idx * 500}px)`;
}

// Resets the interval, so that the carousel will not run immediately after a user clicks either button
function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}
