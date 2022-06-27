const button = document.querySelector('.ripple'); // button is the click me button.

// When the button is clicked...
// Cannot use an arrow function with this.
button.addEventListener('click', function (e) {
	// x and y are the pixel coordinates where the user clicked in the viewport
	const x = e.clientX;
	const y = e.clientY;

	// buttonLeft and buttonTop are the coordinates relative to the parent element
	const buttonLeft = e.target.offsetLeft;
	const buttonTop = e.target.offsetTop;

	// xInside and yInside are the coordinates inside the button
	const xInside = x - buttonLeft;
	const yInside = y - buttonTop;

	const circle = document.createElement('span'); // Creates a span element.
	circle.classList.add('circle'); // Gives the span element a class name of circle.
	circle.style.left = xInside + 'px'; // Gives the span element a left property.
	circle.style.top = yInside + 'px'; // Gives the span element a top property.

	this.appendChild(circle); // Adds the circle element as a child to the button element.

	setTimeout(() => circle.remove(), 500); // After 500 milliseconds, remove the circle element so it does not infinitely stack.
});
