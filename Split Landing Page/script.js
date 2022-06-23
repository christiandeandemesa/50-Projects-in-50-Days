const container = document.querySelector('.container');
const left = document.querySelector('.left'); // left is the iPhone container.
const right = document.querySelector('.right'); // right is the Galaxy container.

left.addEventListener('mouseenter', () => container.classList.add('hover-left')); // When the mouse hovers over the iPhone container, it adds the class name of hover-left.
left.addEventListener('mouseleave', () => container.classList.remove('hover-left')); // When the mouse leaves the iPhone container, it removes the class name of hover-left.

right.addEventListener('mouseenter', () => container.classList.add('hover-right')); // When the mouse hovers over the Galaxy container, it adds the class name of hover-right.
right.addEventListener('mouseleave', () => container.classList.remove('hover-right')); // When the mouse leaves the Galaxy container, it removes the class name of hover-right.
