const toggle = document.querySelector('.toggle'); // toggle is the dark/light mode button.
const hourEl = document.querySelector('.hour'); // hourEl is the hour hand.
const minuteEl = document.querySelector('.minute'); // minuteEL is the minute hand.
const secondEl = document.querySelector('.second'); // secondEl is the second hand.
const timeEl = document.querySelector('.time'); // timeEl is the displayed time.
const dateEl = document.querySelector('.date'); // dateEl is the displayed date.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Array of days since the getDay() function returns a number.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Array of months since the getMonth() function returns a number.

setTime(); // Executes this function on page load.
setInterval(setTime, 1000); // Executes the function every 1000 milliseconds.

// When the dark/light mode button is clicked...
toggle.addEventListener('click', e => {
	const html = document.querySelector('html'); // html is the HTML element.

	// If the HTML element has the class name of dark, remove it and change the button to display Dark mode
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	}

	// If the HTML element does not have the class name of dark, add it and change the button to display Light mode
	else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});

// Sets the current time for the clock hands and the time displayed, and the current date for the date displayed
function setTime() {
	const time = new Date(); // time is the day of the week, month, day, year, and time.
	const day = time.getDay(); // day is a number signifying the day of the week.
	const month = time.getMonth(); // month is a number signifying the month of the week.
	const date = time.getDate(); // date is the current day.
	const hours = time.getHours(); // hours is the current hour in military time.
	const hoursForClock = hours % 12; // hourForClock is the current hour in standard time.
	const minutes = time.getMinutes(); // minutes is the current minute.
	const seconds = time.getSeconds(); // seconds is the current second.
	const ampm = hours <= 12 ? 'AM' : 'PM'; // If the military time hours is 12 or less, it is AM. Otherwise it is PM.

	// Modifies the hour hand's transform property in real time
	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	// Modifies the minute hand's transform property in real time
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

	// Modifies the second hand's transform property in real time
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

	// Modifies the displayed time in real time
	timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`; // Two ternary operators are used to add a 0 in front of the current hour and minute if it less than 10.

	// Modifies the displayed date in real time using the above arrays
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

// Maps a range of numbers to another range of numbers
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
