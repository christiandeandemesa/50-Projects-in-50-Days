const addBtn = document.getElementById('add'); // addBtn is the add note button.

const notes = JSON.parse(localStorage.getItem('notes')); // notes is the value associated with the notes key in local storage, parsed from a string into its original data type.

if (notes) notes.forEach(note => addNewNote(note)); // If notes exists, execute this function on every data in notes.

// When the add note button is clicked, execute this function.
addBtn.addEventListener('click', () => addNewNote());

// Creates a new empty note, or repopulates notes from local storage
function addNewNote(text = '') {
	const note = document.createElement('div'); // note is a div element.
	note.classList.add('note'); // Gives the div element a class name of note.
	note.innerHTML = `
    <div class="tools">
        <button class="edit">
			<i class="fas fa-edit"></i>
		</button>
        <button class="delete">
			<i class="fas fa-trash-alt"></i>
		</button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `; // Places this within the div element. If this is a new empty note, the last div only has the class name of main and text area has the class name of hidden. If it is repopulating a note from local storage, the last div has the class names of main and hidden, and text area has no class name.

	const editBtn = note.querySelector('.edit'); // editBtn is the edit button.
	const deleteBtn = note.querySelector('.delete'); // deleteBtn is the delete button.
	const main = note.querySelector('.main'); // main is the non-editable note.
	const textArea = note.querySelector('textarea'); // textArea is the editable note.

	textArea.value = text;
	main.innerHTML = marked.parse(text); // Gives the non-editable note the text parsed from markdown.

	// Clicking the delete button removes the note from the DOM and local storage
	deleteBtn.addEventListener('click', () => {
		note.remove();
		updateLS();
	});

	// Clicking the edit button makes the note editable by adding/removing the class name of hidden from the non-editable note ('.main') and editable note ('textarea')
	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
	});

	// Adding or deleting characters from the editable note...
	textArea.addEventListener('input', e => {
		const {value} = e.target; // Destructures value from e.target.value.
		main.innerHTML = marked.parse(value); // Gives the non-editable not the text parsed from markdown.
		updateLS(); // Updates the local storage.
	});

	document.body.appendChild(note); // Adds the div element as a child to the body.
}

// Updates local storage
function updateLS() {
	const notesText = document.querySelectorAll('textarea'); // notesText is every note in the DOM.
	const notes = [];
	notesText.forEach(note => notes.push(note.value)); // Adds every note to the notes array.
	localStorage.setItem('notes', JSON.stringify(notes)); // Sets the notes array in local storage as a string with a key of notes.
}
