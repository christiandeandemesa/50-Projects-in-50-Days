const labels = document.querySelectorAll('.form-control label'); // labels are all the label elements that are children of a parent element with the class name of form-control.

// For each label element in labels...
labels.forEach(label => {
	// The label replaces its text with multiple HTML elements.
	label.innerHTML = label.innerText
		.split('') // Splits the text into an array of individual letters.
		.map((letter, idx) => `<span style='transition-delay:${idx * 40}ms'>${letter}</span>`) // Maps over each letter in the array and creates a span element with a unique transition-delay.
		.join(''); // Joins the span elements.
});
