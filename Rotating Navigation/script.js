const close = document.getElementById('close'); // close is the x button.
const open = document.getElementById('open'); // open is the hamburger menu button.
const container = document.querySelector('.container'); // container is the article container.

close.addEventListener('click', () => container.classList.remove('show-nav')); // Close button click event removes the show-nav class name from container.
open.addEventListener('click', () => container.classList.add('show-nav')); // Open button click event adds the show-nav class name to the container.
