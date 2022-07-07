const pokeContainer = document.getElementById('poke-container'); // pokeContainer is the pokemon cards container.

const pokeCount = 150;
const colors = {
	normal: '#a8a878',
	fire: '#f08030',
	water: '#6890f0',
	grass: '#78c850',
	electric: '#f7cf30',
	ice: '#97d7d7',
	fighting: '#c03028',
	poison: '#a040a0',
	ground: '#e0c068',
	flying: '#a890f0',
	psychic: '#f85887',
	bug: '#a8b820',
	rock: '#b8a038',
	ghost: '#705898',
	dark: '#705848',
	dragon: '#7038f8',
	steel: '#b8b8d0',
	fairy: '#f0b6bc'
};
const mainTypes = Object.keys(colors); // mainTypes is an array of the colors keys.

// Executes this asynchronous function on each number up to pokeCount
const fetchPokemons = async () => {
	for (let i = 1; i <= pokeCount; i++) await getPokemon(i);
};

// Executes this function by fetching data from the pokeAPI
const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	createPokeCard(data);
};

// Creates the pokemon card with the data
const createPokeCard = pokemon => {
	const pokeEl = document.createElement('div');
	pokeEl.classList.add('pokemon');

	const id = pokemon.id.toString().padStart(3, '0'); // id is the pokemon's id converted to a string, then padded with zeroes until its 3 characters long.
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // name capitalizes the first letter of the pokemon's name.
	const types = pokemon.types.map(type => type.type.name); // types is an object with the type(s)' names.
	const typeTitle = types.length === 1 ? 'Type:' : 'Types:'; // If the types object has one type, use 'Type:'; but if it has two types, use 'Types:'.
	const typesString = String(types).split(',').join('/'); // typeString is the types object split by a comma into an array, then joined by a backslash into a string.
	const mainType = mainTypes.find(type => types.indexOf(type) > -1); // mainType is the first type found from the types object.
	const color = colors[mainType]; // color is the value associated with the passed in mainType as a key.

	pokeEl.style.background = color;
	pokeEl.innerHTML = `
		<div class="img-container">
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="pokemon image" />
		</div>
		<div class="info">
			<span class="number">#${id}</span>
			<h3 class="name">${name}</h3>
			<small class="type">${typeTitle} <span>${typesString}</span></small>
		</div>
    `;
	pokeContainer.appendChild(pokeEl); // Adds the pokeEl element as a child element to the pokemon cards container.
};

fetchPokemons(); // Placed on the bottom because the function needs to be initialized first.
