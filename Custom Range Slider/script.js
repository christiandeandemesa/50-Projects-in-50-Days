const range = document.getElementById('range'); // range is the slider.

range.addEventListener('input', e => {
	const value = +e.target.value; // + converts e.target.value from a string into a number.
	const label = e.target.nextElementSibling; // label is the label.
	const rangeWidth = getComputedStyle(e.target).getPropertyValue('width'); // getComputedStyle is an object with all of given element's styles, and getPropertyValue is the value associated with the given style as a key.
	const labelWidth = getComputedStyle(label).getPropertyValue('width');
	const rangeNumWidth = +rangeWidth.substring(0, rangeWidth.length - 2); // Converts the string (e.g. 300px) into a number (e.g. 300).
	const labelNumWidth = +labelWidth.substring(0, labelWidth.length - 2);
	const max = +e.target.max;
	const min = +e.target.min;
	const left =
		value * (rangeNumWidth / max) - labelNumWidth / 2 + scale(value, min, max, 10, -10);

	label.style.left = `${left}px`;
	label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
