const API_URL = 'https://testimonialapi.toolcarton.com/api'; // API_URL to testimonial API.

const testimonialsContainer = document.querySelector('.testimonial-container'); // testimonial is the testimonial container.

let idx = 0; // Initial index starts at 0 for below res.data.
let interval = setInterval(getTestimonials, 5000); // interval executes this function every 5000 milliseconds.

// Gets data from the testimonial API, and executes this function
function getTestimonials() {
	axios
		.get(API_URL)
		.then(res => createTestimonial(res.data[idx], res.data))
		.catch(err => console.log(err));
}

// Creates the testimonial with the specific data
function createTestimonial(user, usersData) {
	const testimonialHTML = `
        <div class="progress-bar"></div>

        <div class="fas fa-quote-left fa-quote"></div>
        <div class="fas fa-quote-right fa-quote"></div>

        <p class="testimonial">${user.message}</p>

        <div class="user">
            <img
                src="${user.avatar}"
                alt="${user.name}"
                class="user-image"
            />

            <div class="user-details">
                <h4 class="username">${user.name}</h4>
                <p class="role">${user.designation}</p>
            </div>
        </div>
    `;
	testimonialsContainer.innerHTML = testimonialHTML;

	if (idx < usersData.length - 1)
		idx++; // If it is not the last index from res.data, increment it.
	else resetInterval();
}

// Resets the interval
function resetInterval() {
	clearInterval(interval); // Clears the current interval.
	idx = 0;
	interval = setInterval(getTestimonials, 5000); // Restarts the interval.
}
