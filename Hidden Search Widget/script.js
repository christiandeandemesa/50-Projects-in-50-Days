const search = document.querySelector('.search'); // search is the search bar container.
const btn = document.querySelector('.btn'); // btn is the magnifying glass button.

// When the button is clicked, toggles between adding and removing the active class name to search.
btn.addEventListener('click', () => {
	search.classList.toggle('active');
});
