const filter = document.getElementById('filter'); // filter is the search input.
const result = document.getElementById('result'); // result is the user container.

const listItems = [];

getData();

// When the user adds or removes a character from the search input, execute this function
filter.addEventListener('input', e => filterData(e.target.value));

// Performs an async await API fetch, then creates user containers with the data
async function getData() {
	const res = await fetch('https://randomuser.me/api?results=50');
	const {results} = await res.json(); // Destructures results from data.
	result.innerHTML = ''; // Removes the initial user container's text of 'Loading...'.

	results.forEach(user => {
		const li = document.createElement('li');
		listItems.push(li);
		li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}" />
			<div class="user-info">
				<h4>${user.name.first} ${user.name.last}</h4>
				<p>${user.location.city}, ${user.location.country}</p>
			</div>
        `;
		result.append(li);
	});
}

// Takes the lowercase searchTerm the user put in the search input, and compares it against each user's full name and location
function filterData(searchTerm) {
	listItems.forEach(item => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
			item.classList.remove('hide');
		else item.classList.add('hide');
	});
}
