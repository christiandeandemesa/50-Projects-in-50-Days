const canvas = document.getElementById('canvas'); // canvas is the canvas.
const decreaseBtn = document.getElementById('decrease'); // decreaseBtn is the minus button.
const sizeEl = document.getElementById('size'); // size is the number.
const increaseBtn = document.getElementById('increase'); // increaseBtn is the plus button.
const colorEl = document.getElementById('color'); // colorEl is the color field.
const clearEl = document.getElementById('clear'); // clearEl is the X button.
const ctx = canvas.getContext('2d'); // ctx is two-dimensional drawing context.

// When the minus button is clicked, decrease the number by 5
decreaseBtn.addEventListener('click', () => {
	size -= 5;
	if (size < 5) size = 5;
	updateSizeOnScreen();
});

// When the plus button is clicked, increase the number by 5
increaseBtn.addEventListener('click', () => {
	size += 5;
	if (size > 50) size = 50;
	updateSizeOnScreen();
});

// When the color field is changed, update the color to be the chosen color.
colorEl.addEventListener('change', e => (color = e.target.value));

// When the X button is clicked, clear the canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

// Update the number to be the size's number
function updateSizeOnScreen() {
	sizeEl.innerText = size;
}

let isPressed = false; // Initial state of if the mouse is pressed.
let x;
let y;
let size = 10; // Initial size of the line.
let color = 'black'; // Initial color of the line.

// If you click and hold down the mouse in the canvas, change the mouse's pressed state to true, and x and y to be where the cursor is the canvas
canvas.addEventListener('mousedown', e => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});

// If you release the mouse, change the mouse's pressed state to false, and x and y to undefined.
canvas.addEventListener('mouseup', e => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

// If the mouse is dragged across the canvas...
canvas.addEventListener('mousemove', e => {
	// If the mouse's pressed state is true...
	if (isPressed) {
		const x2 = e.offsetX; // x2 is the cursor on the canvas.
		const y2 = e.offsetY; // y2 is the cursor on the canvas.
		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);
		x = x2; // Because x is the initial point and x2 is the next point for the drawLine function, update x.
		y = y2; // Because y is the initial point and y2 is the next point for the drawLine function, update y.
	}
});

// Draws a circle to fill in the gaps between the lines
function drawCircle(x, y) {
	ctx.beginPath(); // Begins the context's path or resets its current path
	ctx.arc(x, y, size, 0, Math.PI * 2, true); // Creates a circle using the x and y coordinates, the radius (size), the starting angle (0), the ending angle (Math.PI * 2), and true to make it counterclockwise.
	ctx.fillStyle = color; // Color of the circle.
	ctx.fill(); // Fills the circle with the fillStyle.
}

// Draws a line using x1 and y1 as the original line's coordinates, and x2 and y2 is the line's next coordinates.
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1); // Moves to the coordinates without drawing anything.
	ctx.lineTo(x2, y2); // Draws a line from the original coordinates to these new coordinates.
	ctx.strokeStyle = color; // Color of the line.
	ctx.lineWidth = size * 2; // Width of the line.
	ctx.stroke(); // Draws the line defined in moveTo and lineTo.
}
