const bg = document.getElementById('background'); // bg is the background image.
const password = document.getElementById('password'); // password is the password input.

// Whenever a character is added or removed from the password input, make the background image clearer or blurrier
password.addEventListener('input', e => {
	const input = e.target.value;
	const length = input.length;
	const blurValue = 20 - length * 2;
	background.style.filter = `blur(${blurValue}px)`;
});
