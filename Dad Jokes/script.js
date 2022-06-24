const joke = document.getElementById('joke'); // joke is the div element that will hold the API jokes.
const jokeBtn = document.getElementById('joke-btn'); // jokeBtn is the button that will fetch another API joke.

generateJoke(); // Fetches a joke when the page first loads by executing the generateJoke function.

jokeBtn.addEventListener('click', generateJoke); // When the jokeBtn is clicked, execute the generateJoke function.

// generateJoke is an asynchronous function that...
async function generateJoke() {
	// The API takes a headers object with Accept as the key, and the type of response returned as the value.
	const config = {
		headers: {
			Accept: 'application/json'
		}
	};

	const res = await fetch('https://icanhazdadjoke.com', config); // res is the returned JSON object from the awaited API call.

	const data = await res.json(); // data is the JSON object parsed into a normal object.

	joke.innerHTML = data.joke; // The div element's inner HTML is populated with the value associated with the joke key in the data object.
}
