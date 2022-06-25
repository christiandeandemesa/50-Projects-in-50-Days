const toggle = document.getElementById('toggle'); // toggle is the button container.
const nav = document.getElementById('nav'); // nav is the navigation bar.

toggle.addEventListener('click', () => nav.classList.toggle('active')); // When the user clicks on the button container, either add or remove the class name of active to/from the navigation bar.
