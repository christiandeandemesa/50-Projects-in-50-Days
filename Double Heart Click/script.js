const times = document.getElementById('times'); // times is the likes number.
const loveMe = document.querySelector('.loveMe'); // loveMe is the baby picture.

let timesClicked = 0; // timesClicked will track how many times the baby picture is double clicked.

// When the baby picture is double clicked, execute this function.
loveMe.addEventListener('dblclick', e => {
	createHeart(e);
});

// Creates the heart effect
const createHeart = e => {
	const heart = document.createElement('i'); // heart creates the i element.
	heart.classList.add('fas'); // Gives the i element the class name of fas.
	heart.classList.add('fa-heart'); // Gives the i element the class name of fa-heart.

	const x = e.clientX; // x is the mouse's x coordinate.
	const y = e.clientY; // y is the mouse's coordinate.

	const leftOffset = e.target.offsetLeft; // leftOffset is the furthest left of the baby picture.
	const topOffset = e.target.offsetTop; // topOffset is the furthest top of the baby picture.

	const xInside = x - leftOffset; // x coordinate inside the baby picture.
	const yInside = y - topOffset; // y coordinate inside the baby picture.

	heart.style.left = `${xInside}px`;
	heart.style.top = `${yInside}px`;

	loveMe.appendChild(heart); // Adds the i element to the baby picture.
	times.innerHTML = ++timesClicked; // Increments timesClicked then displays it. If it was timesClicked++, it would display it then increment it.
	setTimeout(() => heart.remove(), 1000); // After 1000 milliseconds, remove the i element.
};
