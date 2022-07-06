const resultEl = document.getElementById('result'); // resultEl is the generate password field.
const clipboardEl = document.getElementById('clipboard'); // clipboardEl is the clipboard button.
const lengthEl = document.getElementById('length'); // lengthEl is the password length setting.
const uppercaseEl = document.getElementById('uppercase'); // uppercaseEl is the password uppercase setting.
const lowercaseEl = document.getElementById('lowercase'); // lowercaseEl is the password lowercase setting.
const numbersEl = document.getElementById('numbers'); // numbersEl is the password numbers setting.
const symbolsEl = document.getElementById('symbols'); // symbolsEl is the password symbols setting.
const generateEl = document.getElementById('generate'); // generateEl is the generate password button.

// randomFunc is an object where each key has a value of a function name
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	numbers: getRandomNumber,
	symbols: getRandomSymbol
};

// When the generate password button is clicked...
generateEl.addEventListener('click', () => {
	const length = +lengthEl.value; // + converts the string into a number.

	// Each of the below const is a boolean depending on if the element was checked or not
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumbers = numbersEl.checked;
	const hasSymbols = symbolsEl.checked;

	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length); // What appears in the generate password field, is whatever the executed function returns.
});

// When the clipboard button is clicked...
clipboardEl.addEventListener('click', () => {
	const password = resultEl.innerText; // password is the contents of the generated password field.

	if (!password) return; // If the generated password field is empty, return nothing and end this function.

	if (navigator.clipboard)
		navigator.clipboard.writeText(password).then(() => alert('Copied to clipboard.'));
	// If navigator.clipboard is compatible with the browser, copy (writeText) the password then create an alert.
	else alert('Unable to copy. Browser is not compatible.'); // If navigator.clipboard is not compatible, create an alert.
});

// Generates a random password.
function generatePassword(lower, upper, numbers, symbols, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + numbers + symbols; // Adds all the booleans where true is equal to 1, and false is equal to 0.

	if (typesCount === 0) return ''; // If typesCount is 0 because every boolean is false, return an empty string and end this function.

	const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter(
		item => Object.values(item)[0]
	); // typesArr is an array where each element is an object with a key of an index number, and a value of a second object. The second object has a key of the types with a boolean of true, and the value is true.

	// While generatedPassword's length is less than length...
	while (generatedPassword.length < length) {
		const funcName = Object.keys(typesArr[Math.floor(Math.random() * typesArr.length)]); // funcName is the key (i.e. type) of a randomly chosen object in typesArr.
		generatedPassword += randomFunc[funcName](); // Executes the corresponding function to the key using the above randomFunc object.
	}

	return generatedPassword;
}

// Returns a random lowercase letter using the UTF-16 code
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Returns a random uppercase letter using the UTF-16 code
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Returns a random number using the UTF-16 code
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Returns a random symbol from a given string of symbols
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
