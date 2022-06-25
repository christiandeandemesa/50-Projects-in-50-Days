const toggles = document.querySelectorAll('.faq-toggle'); // toggles are all the elements with a class name of faq-toggle.

// For each element in toggles...
toggles.forEach(toggle => {
	// When you click on the button, add or remove the class name of active to/from its parent element (.faq)
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
