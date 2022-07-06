const textEl = document.getElementById('text'); // textEl is the text.
const speedEl = document.getElementById('speed'); // speedEl is speed number.
const text =
	'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.';

let idx = 1; // idx represents each index in the text.
let speed = 300 / speedEl.value; // Initial speed is 300 milliseconds.

writeText();

// When the speed number is modified, change the speed
speedEl.addEventListener('input', e => (speed = 300 / e.target.value));

// Auto text effect
function writeText() {
	textEl.innerText = text.slice(0, idx); // Slice of all letters between the current indices.
	idx++;
	if (idx > text.length) idx = 1; // If it reaches the text's last index, start again at the first index.
	setTimeout(writeText, speed); // Recursively executes this function every speed milliseconds.
}
