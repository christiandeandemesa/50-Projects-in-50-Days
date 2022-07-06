const API_URL = 'https://api.github.com/users/'; // API_URL to github API.

const form = document.getElementById('form'); // form is the input form.
const search = document.getElementById('search'); // search is the input field.
const main = document.getElementById('main'); // main is the card container.

getUser('christiandeandemesa'); // Executes this function on page load.

// When the form is submitted...
form.addEventListener('submit', e => {
	e.preventDefault(); // Prevent page refresh.
	const user = search.value;
	if (user) getUser(user); // If the input field is not empty, execute this function.
	search.value = ''; // Clear the input field.
});

// Finds a github profile
function getUser(username) {
	axios
		.get(API_URL + username) // Gets the information for a specific github user using the API.
		.then(res => {
			createUserCard(res.data);
			getRepos(username);
		}) // Executes these functions using the information/data.
		.catch(err => createErrorCard('There is no Github profile with this username.')); // Executes this function if an error occurs.
}

// Finds the github profile's repositories
function getRepos(username) {
	axios
		.get(API_URL + username + '/repos?sort=created') // Gets the repositories for a specific github profile sorted by created last.
		.then(res => addReposToCard(res.data)) // Executes this function using the data.
		.catch(err => createErrorCard('The Github profile has no repos')); // Executes this function if an error occurs.
}

// Creates the card
function createUserCard(user) {
	const cardHTML = `
        <div class="card">
			<div>
				<img
					src="${user.avatar_url}"
					alt="${user.name}"
					class="avatar"
				/>
			</div>

			<div class="user-info">
				<h2>${user.name}</h2>
				<p>${user.bio}</p>
				<ul>
					<li>${user.followers} <strong>Followers</strong></li>
					<li>${user.following} <strong>Following</strong></li>
					<li>${user.public_repos} <strong>Repositories</strong></li>
				</ul>
				<div id="repos"></div>
			</div>
		</div>
    `;
	main.innerHTML = cardHTML;
}

function createErrorCard(message) {
	const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
	main.innerHTML = cardHTML;
}

// Creates the repository links
function addReposToCard(repos) {
	const reposEl = document.getElementById('repos'); // reposEl is the repositories container.

	// Grabs the last 5 created repositories...
	repos.slice(0, 5).forEach(repo => {
		const repoEl = document.createElement('a'); // repoEl is an a element.
		repoEl.classList.add('repo'); // Gives the a element a class name of repo.
		repoEl.href = repo.html_url; // Gives the href attribute the repository's link.
		repoEl.target = '_blank'; // Allows the link to be open in a new tab.
		repoEl.innerText = repo.name; // Each repository link's name is its name.
		reposEl.appendChild(repoEl); // Adds the a element to the repositories container.
	});
}
