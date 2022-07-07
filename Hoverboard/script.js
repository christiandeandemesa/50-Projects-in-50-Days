const container = document.getElementById('container'); // container is the squares container.

const colors = ['#F71D1D', '#F7681E', '#F1F71E', '#36F71E', '#1E2BF7', '#A41EF7'];
const squares = 500;

// For loop equal to the number of squares times...
for (let i = 0; i < squares; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', () => setColor(square)); // When a square is hovered over, execute this function.
	square.addEventListener('mouseout', () => removeColor(square)); // When a square is not hovered over, execute this function.
	container.appendChild(square); // Add square as a child element to the squares container.
}

// Changes to a random color and box shadow
function setColor(element) {
	const color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Changes the color and box shadow back to its original color
function removeColor(element) {
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px black';
}

// Returns a random color from the array
function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
