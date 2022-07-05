const toasts = document.getElementById('toasts'); // toasts is the toast notification container.
const textInput = document.getElementById('text'); // text is the input field.
const btn = document.getElementById('btn'); // btn is the notification button.

btn.addEventListener('click', () => createNotification(textInput.value)); // When the notification button is clicked, execute the function with the input field's data.

// Creates a toast notification
function createNotification(message = null) {
	const notif = document.createElement('div'); // notif is a div element.
	notif.classList.add('toast'); // Gives notif the class name of toast.
	notif.innerText = message ? message : getRandomMessage(); // If the message exists, put the message in the div. If the message does not exist, place whatever the function returns in the div.
	toasts.appendChild(notif); // Adds the div element to the toast notification container.
	textInput.value = ''; // Clears the input field's data.
	setTimeout(() => {
		notif.remove();
	}, 1000); // After 1000 milliseconds, remove the div element.
}

// Returns a random message.
function getRandomMessage() {
	const messages = ['Success!', 'Error?', 'Loading...', 'Secret message.'];
	return messages[Math.floor(Math.random() * messages.length)];
}
