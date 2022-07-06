const toggles = document.querySelectorAll('.toggle'); // toggles are the hidden checkboxes.
const good = document.getElementById('good'); // good is the good toggle bar.
const cheap = document.getElementById('cheap'); // cheap is the cheap toggle bar.
const fast = document.getElementById('fast'); // fast is the fast toggle bar.

// When a hidden checkbox is changed to checked or not checked, execute this function
toggles.forEach(toggle => toggle.addEventListener('change', e => doTheTrick(e.target)));

// Changes the background color, and unchecks one if all three toggles are checked
function doTheTrick(theClickedOne) {
	// If all three toggles are checked...
	if (good.checked && cheap.checked && fast.checked) {
		if (good === theClickedOne) fast.checked = false; // If good is checked last, uncheck fast.
		else if (cheap === theClickedOne)
			good.checked = false; // If cheap is checked last, uncheck good.
		else cheap.checked = false; // If fast is checked last, uncheck cheap.
	}

	// Changes the background color whenever a toggle is checked
	if (good.checked && cheap.checked && (good === theClickedOne || cheap === theClickedOne))
		document.body.style.background = 'orange';
	else if (cheap.checked && fast.checked && (cheap === theClickedOne || fast === theClickedOne))
		document.body.style.background = 'green';
	else if (good.checked && fast.checked && (good === theClickedOne || fast === theClickedOne))
		document.body.style.background = 'purple';
	else if (good.checked && good === theClickedOne) document.body.style.background = 'red';
	else if (cheap.checked && cheap === theClickedOne)
		document.body.style.background = '#DBDB00'; // This is yellow.
	else if (fast.checked && fast === theClickedOne) document.body.style.background = 'blue';
	// Changes the background color whenever a toggle is unchecked
	else if (good.checked && !cheap.checked && cheap === theClickedOne)
		document.body.style.background = 'red';
	else if (cheap.checked && !good.checked && good === theClickedOne)
		document.body.style.background = '#DBDB00';
	else if (cheap.checked && !fast.checked && fast === theClickedOne)
		document.body.style.background = '#DBDB00';
	else if (fast.checked && !cheap.checked && cheap === theClickedOne)
		document.body.style.background = 'blue';
	else if (good.checked && !fast.checked && fast === theClickedOne)
		document.body.style.background = 'blue';
	else if (fast.checked && !good.checked && good === theClickedOne)
		document.body.style.background = 'red';
	// Changes the background color when all three toggles are unchecked
	else if (!good.checked && !cheap.checked && !fast.checked)
		document.body.style.background = 'black';
}
