const counter = document.querySelector('.counter'); // counter is the number countdown container.
const nums = document.querySelectorAll('span'); // nums is a nodelist where each element is a span element.
const final = document.querySelector('.final'); // final is the replay button container.
const replay = document.getElementById('replay'); // replay is the replay button.

runAnimation();

// When the replay button is clicked, execute these functions
replay.addEventListener('click', () => {
	resetDOM();
	runAnimation();
});

// Resets the animation
function resetDOM() {
	counter.classList.remove('hide');
	final.classList.remove('show');
	nums.forEach(num => (num.classList.value = '')); // Removes the class name from every span element.
	nums[0].classList.add('in'); // Gives the 3 span element a class name of in.
}

// Runs the animation
function runAnimation() {
	nums.forEach((num, idx) => {
		const nextToLast = nums.length - 1; // nextToLast is nums' last index.

		// Whenever the span element's animation ends...
		num.addEventListener('animationend', e => {
			// If the next animation is goIn and it is not the last span element, remove the in class name and add the out class name.
			if (e.animationName === 'goIn' && idx !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
			}

			// If the next animation is goOut and it is not the last span element, give the next span element the in class name.
			else if (e.animationName === 'goOut' && num.nextElementSibling)
				num.nextElementSibling.classList.add('in');
			// If it is the last span element, give the number countdown container the hide class name and give the replay button container the class name of show.
			else {
				counter.classList.add('hide');
				final.classList.add('show');
			}
		});
	});
}
