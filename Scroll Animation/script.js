const boxes = document.querySelectorAll('.box'); // boxes is all the scrolling boxes.

window.addEventListener('scroll', checkBoxes); // When the window/viewport is scrolled, execute the checkBoxes function.

function checkBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4; // triggerBottom is a specific height of the viewport.

	// For each scrolling box in boxes...
	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top; // getBoundingClientRect() is the properties of a rectangle-shaped element, and top is the distance between its top border and the viewport's top.
		if (boxTop < triggerBottom)
			box.classList.add(
				'show'
			); // If a specific scrolling box's top is less than triggerBottom, give it a class name of show.
		else box.classList.remove('show'); // If a specific scrollingl box's top is not less than triggerBottom, remove its class name of show.
	});
}
