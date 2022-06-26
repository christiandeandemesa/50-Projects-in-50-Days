const smallCups = document.querySelectorAll('.cup-small'); // smallCups is a nodelist where each is an element with the class name of .cup-small.
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Executes this function on page load.
updateBigCup();

// Whenever a cup is clicked, execute the highlightCups function on it.
smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

// Fills or empties the small cups
function highlightCups(idx) {
	// Allows the user to empty the eighth cup
	if (smallCups[idx].classList.contains('full') && idx === 7) idx--;
	// Allows the user to empty the first through seventh cups
	else if (
		smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')
	)
		idx--;

	// If a cup is emptied, it also empties all the cups after it
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) cup.classList.add('full');
		// idx2 is the index of the cup recently emptied, and idx is the index of the last cup filled.
		else cup.classList.remove('full');
	});

	updateBigCup();
}

// Fills or empties the big cup
function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length; // fullCups is the number of full small cups
	const totalCups = smallCups.length; // totalCups is the number of full and empty small cups

	// If all the small cups are empty, hide the big cup's percent and remove its height
	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	}
	// If at least one small cup is full, reveal the big cup's percent, modify its height, and change the percent text
	else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	// If all the small cups are full, hide the big cup's percent and remove its height
	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	}
	// If at least one small cup is empty, reval the big cup's percent and change the liter text
	else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
	}
}
