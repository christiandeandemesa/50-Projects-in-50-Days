const counters = document.querySelectorAll('.counter'); // counters is a nodelist where each node is an element with class name of counter.

// For each element/counter in counters...
counters.forEach(counter => {
	counter.innerText = 0; // The element's inner text starts at 0.

	// Increments the number
	const updateCounter = () => {
		const target = Number(counter.getAttribute('data-target')); // target is the element's data-target's value converted into a number.
		const c = Number(counter.innerText); // c is the element's inner text converted into a number.
		const increment = target / 5000000; // increment is a number.

		// If c is less than target, change the element's inner text to be c plus increment rounded up to the nearest integer.
		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1); // Executes the updateCounter function after a 1 millisecond delay.
		} else counter.innerText = target; // If c is not less than target, the element's inner text is target.
	};

	updateCounter();
});
