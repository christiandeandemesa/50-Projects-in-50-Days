const unsplashURL = 'https://source.unsplash.com/random/'; // unsplashURL is the url to get a random image.

const btn = document.querySelector('.btn'); // btn is the button.
const container = document.querySelector('.container'); // container is the image container.

const rows = 10;

// When the button is clicked, execute these functions
btn.addEventListener('click', () => {
	removeImages();
	getImages();
});

// Removes all the images from the image container
function removeImages() {
	container.innerHTML = '';
}

// Adds 30 images to the image container
function getImages() {
	for (let i = 0; i < rows * 3; i++) {
		const img = document.createElement('img');
		img.src = `${unsplashURL}${getRandomSize()}`;
		container.appendChild(img);
	}
}

// Returns a random size (e.g. 300x300)
function getRandomSize() {
	return `${getRandomNum()}x${getRandomNum()}`;
}

// Returns a random number between 300 and 310
function getRandomNum() {
	return Math.floor(Math.random() * 10) + 300;
}
