const openBtn = document.querySelector('.open-btn'); // openBtn is the hamburger menu button.
const nav = document.querySelectorAll('.nav'); // nav is a nodelist where each element is a colored background.
const closeBtn = document.querySelector('.close-btn'); // closeBtn is the X button.

// When the hamburger menu button is clicked, give all the colored backgrounds the class name of visible
openBtn.addEventListener('click', () => nav.forEach(navEl => navEl.classList.add('visible')));

// When the X button is clicked, remove from all the colored backgrounds the class name of visible
closeBtn.addEventListener('click', () => nav.forEach(navEl => navEl.classList.remove('visible')));
