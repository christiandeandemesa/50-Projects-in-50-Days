const bg = document.querySelector('.bg'); // bg is the background image.
const loadText = document.querySelector('.loading-text'); // loadText is the number percent.

let load = 0;

let int = setInterval(blurring, 40); // setInterval executes some code every millisecond delay.

// Function that maps one range of numbers to another range of numbers.
function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// Function that...
function blurring() {
	load++;
	if (load > 99) clearInterval(int); // clearInterval stops the execution of setInterval.
	loadText.innerText = `${load}%`; // Updates the number percent.
	loadText.style.opacity = scale(load, 0, 100, 1, 0); // Gradually fades the number percent.
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Gradually makes the background image less blurry.
}
