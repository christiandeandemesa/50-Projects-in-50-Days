const nav = document.querySelector('.nav'); // nav is the navbar.

window.addEventListener('scroll', fixNav); // When the viewport is scrolled, execute this function.

// Changes navbar styling
function fixNav() {
	console.log(window.scrollY);
	console.log(nav.offsetHeight);

	if (window.scrollY > nav.offsetHeight + 150)
		nav.classList.add(
			'active'
		); // If the top px of the viewport is greater than the navbar's height plus 150, give navbar the class name of active.
	else nav.classList.remove('active'); // If the above is not true, remove the class name of active.
}
