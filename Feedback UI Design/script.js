const panel = document.getElementById('panel'); // panel is the container.
const ratingsContainer = document.querySelector('.ratings-container'); // ratingsContainer is the faces container.
const ratings = document.querySelectorAll('.rating'); // ratings is a nodelist where each element is a div element with the class name of rating.
const sendBtn = document.getElementById('send'); // sendBtn is the send button.

let selectedRating = 'Extremely satisfied';

// Whenever any part of the ratingsContainer is clicked...
ratingsContainer.addEventListener('click', e => {
	// If the part that is clicked on has a parent container with the class name of rating...
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active'); // Give the parent container the class name of active.
		selectedRating = e.target.nextElementSibling.innerHTML; // selectedRating takes on the text of the clicked on element's sibling (e.g. When you click on the face (img), selectedRating is the text within the small element).
	}
});

// When the send button is clicked, replace the container's children elements
sendBtn.addEventListener('click', e => {
	panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <p>We'll use your feedback to improve our application.</p>
    `;
});

// Removes the active class from every element in the ratingsContainer
function removeActive() {
	for (let i = 0; i < ratings.length; i++) ratings[i].classList.remove('active');
}
