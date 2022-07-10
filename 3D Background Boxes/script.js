const boxesContainer = document.getElementById('boxes'); // boxesContainer is the boxes container.
const btn = document.getElementById('btn'); // btn is the magic button.

createBoxes();

// When the magic button is clicked, add or remove the boxes container's class name of big
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// Creates a 4 x 4 grid of boxes where each box has a different background-position for the GIF
function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement('div');
			box.classList.add('box');
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxesContainer.appendChild(box);
		}
	}
}
