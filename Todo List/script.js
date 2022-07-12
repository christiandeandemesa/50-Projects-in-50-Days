const form = document.getElementById('form'); // form is the form.
const input = document.getElementById('input'); // input is the input field.
const todosUL = document.getElementById('todos'); // todosUL is the todos container.

const todos = JSON.parse(localStorage.getItem('todos')); // todos is the value associated with the key of todos in local storage, then converted from a string into its original data object.

if (todos) todos.forEach(todo => addTodo(todo)); // If todos exists, execute the function on each element in the array.

// When the user submits the form, prevent it from refreshing the page and execute this function.
form.addEventListener('submit', e => {
	e.preventDefault();
	addTodo();
});

// Creates a todo
function addTodo(todo) {
	let todoText = input.value; // todoText is what was put in the input field.

	if (todo) todoText = todo.text; // Adds the todos from local storage (line 7).

	// If todoText exists...
	if (todoText) {
		const todoEl = document.createElement('li');

		if (todo && todo.completed) todoEl.classList.add('completed'); // Adds the completed todos from local storage.

		todoEl.innerText = todoText;

		// When the todo is left-clicked, add or remove its class name of completed, then execute this function
		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
			updateLS();
		});

		// When the todo is right-clicked...
		todoEl.addEventListener('contextmenu', e => {
			e.preventDefault(); // Prevents the context menu from appearing when right-clicking.
			todoEl.remove(); // Removes the todo from local storage.
			updateLS();
		});

		todosUL.appendChild(todoEl);
		input.value = ''; // Resets the input field to an empty string.
		updateLS();
	}
}

// Updates local storage
function updateLS() {
	const todosEl = document.querySelectorAll('li'); // todosEl is a nodelist where each element is a todo.
	const todos = [];

	// Pushes each element in todosEL into the todos array as an object
	todosEl.forEach(todoEl => {
		todos.push({
			text: todoEl.innerText, // todoEl text.
			completed: todoEl.classList.contains('completed') // todoEl completed boolean.
		});
	});
	localStorage.setItem('todos', JSON.stringify(todos)); // Sets with a key of todos and a value of the todos array as a string.
}
