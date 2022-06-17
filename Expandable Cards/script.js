// panels is every element with the class name of panel.
const panels = document.querySelectorAll('.panel');

// For each panel/element in panels...
panels.forEach(panel => {
	// Add a click event listener that executes the removeActiveClasses function, then adds the class name of active.
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

// Removes the active class name from all elements/panels.
function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}
