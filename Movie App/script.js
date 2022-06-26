const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=69a0cbf31965b0429378122150f5523d&page=1'; // API URL with my API key that lists one page of the most popular movies.
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'; // API image path with a width of 1280px.
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=69a0cbf31965b0429378122150f5523d&query="'; // API URL with my API key that searches for movies using what was typed into the search bar.

const main = document.getElementById('main'); // main is the movies container.
const form = document.getElementById('form'); // form is the search bar form.
const search = document.getElementById('search'); // search is the search bar.

// Executes this function on page load
getMovies(API_URL);

// Asynchronous function that fetches the API data
async function getMovies(url) {
	const res = await fetch(url); // res is the returned JSON object form the awaited API call.
	const data = await res.json(); // data is the JSON object parsed into a normal object.

	showMovies(data.results); // The values we want are associated with the results key in the data object.
}

// Displays each individual movie
function showMovies(movies) {
	main.innerHTML = ''; // Removes the previous movies in the movies container.

	movies.forEach(movie => {
		const {title, poster_path, vote_average, overview} = movie; // Instead of using movie.title or movie.poster_path, we break it down like this.

		const movieEl = document.createElement('div'); // Creates a div element.
		movieEl.classList.add('movie'); // Gives the div element a class name of movie.
		movieEl.innerHTML = `
			<img src="${IMG_PATH + poster_path}" alt="${title}" />
			<div class="movie-info">
				<h3>${title}</h3>
				<span class="${getClassByRate(vote_average)}">${vote_average}</span>
			</div>
			<div class="overview">
				<h3>Overview</h3>
				${overview}
			</div>
        `; // Takes the above string and adds it inside the div element.

		main.appendChild(movieEl); // Makes the div element a child element of the movies container.
	});
}

// Returns a color based on the movie's vote_average
function getClassByRate(vote) {
	if (vote >= 8) return 'lightgreen';
	else if (vote >= 5) return 'orange';
	else return 'red';
}

// When the user clicks enter after typing something in the search bar...
form.addEventListener('submit', e => {
	e.preventDefault(); // Prevents refreshing the page on form submit.

	const searchTerm = search.value; // searchTerm is what was typed in the search bar.

	// If searchTerm exists and it is not equal to an empty string, execute a new API call using search, then clear the search bar.
	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	}
	// If the searchTerm does not exist or it is an empty string, reload the web page
	else window.location.reload();
});
