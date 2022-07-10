const codes = document.querySelectorAll('.code');

codes[0].focus(); // Focus on the first code number when the page loads.

codes.forEach((code, idx) => {
	// When the user presses a valid key in any code number input...
	code.addEventListener('keydown', e => {
		// If the key pressed is a number from 0 to 9, change its value to an empty string then whichever key was pressed, then focus on the next code number
		if (e.key >= 0 && e.key <= 9) {
			codes[idx].value = '';
			setTimeout(() => codes[idx + 1].focus(), 10);
		}

		// If the key pressed is backspace, focus on the previous code number
		else if (e.key === 'Backspace') setTimeout(() => codes[idx - 1].focus(), 10);
	});
});
