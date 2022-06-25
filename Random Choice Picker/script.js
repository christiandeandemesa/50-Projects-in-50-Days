const tagsEl = document.getElementById('tags'); // tagsEl are all the elements with the id of tag.
const textarea = document.getElementById('textarea'); // textarea is the choice creating box.

// Automatically puts the cursor in the textarea
textarea.focus();

// When a user lifts their finger off a key, fire an event/e that...
textarea.addEventListener('keyup', e => {
	createTags(e.target.value); // Executes the create tag function on the event's target's value, which is what the user typed into the choice creating box.

	// If the key pressed is Enter...
	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10); // Reset the choice creating box to be blank after 10 milliseconds.
		randomSelect();
	}
});

// Creates tags from what the user typed into the choice creating box
function createTags(input) {
	const tags = input
		.split(',')
		.filter(tag => tag.trim() !== '')
		.map(tag => tag.trim()); // tags splits the input into an array separated by commas, filters out any empty tags, then maps over the remaining tags and trims their whitespace.

	tagsEl.innerHTML = ''; // Clears the previous choices.

	// Takes each tag in tags...
	tags.forEach(tag => {
		const tagEl = document.createElement('span'); // Creates a span element.
		tagEl.classList.add('tag'); // Gives the span element the class name of tag.
		tagEl.innerText = tag; // The span element's inner text is the tag.
		tagsEl.appendChild(tagEl); // Adds the span element as a child element to tagsEl.
	});
}

// Randomly selects one of the created tags
function randomSelect() {
	// Every 100 milliseconds, interval...
	const interval = setInterval(() => {
		const randomTag = pickRandomTag(); // Picks a random tag.
		highlightTag(randomTag); // Highlights the random tag.
		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100); // Every 100 milliseconds, unhighlights the random tag.
	}, 100);

	// After 3000 milliseconds...
	setTimeout(() => {
		clearInterval(interval); // Stops interval from running.

		// After 100 milliseconds...
		setTimeout(() => {
			const randomTag = pickRandomTag(); // Pick a random tag.
			highlightTag(randomTag); // Keep that random tag highlighted.
		}, 100);
	}, 3000);
}

// Picks a random tag
function pickRandomTag() {
	const tags = document.querySelectorAll('.tag'); // tags is an array where each object is an element with a class name of tag.

	return tags[Math.floor(Math.random() * tags.length)]; // Returns a random object from the array.
}

// Highlights a tag by giving it the class name of highlight
function highlightTag(tag) {
	tag.classList.add('highlight');
}

// Unhighlights a tag by removing its class name of hightlight
function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}
