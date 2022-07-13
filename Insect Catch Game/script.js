const screens = document.querySelectorAll('.screen'); // screens is a nodelist where each element is a screen.
const startBtn = document.getElementById('start-btn'); // startBtn is the play game button.
const chooseBtn = document.querySelectorAll('.choose-insect-btn'); // chooseBtn is a nodelist where each element is a choose insect button.
const container = document.querySelector('.game-container'); // container is the game screen.
const timeEl = document.getElementById('time'); // timeEl is the timer.
const scoreEl = document.getElementById('score'); // scoreEl is the score.
const messageEl = document.querySelector('.message'); // messageEl is the message.

let seconds = 0; // seconds keeps track of the timer.
let score = 0; // score keeps track of the score.
let selectedInsect = {}; // selectedInsect will hold the selected insect for the game.

// When the play game button is clicked, give the play game screen the class name of up
startBtn.addEventListener('click', () => screens[0].classList.add('up'));

// When any of the choose insect buttons are clicked...
chooseBtn.forEach(btn =>
	btn.addEventListener('click', () => {
		const img = btn.querySelector('img');
		const src = img.getAttribute('src');
		const alt = img.getAttribute('alt');
		selectedInsect = {src, alt}; // Add the insect's image source and alt to selectedInsect.
		screens[1].classList.add('up'); // Give the choose insect screen the class name of up.
		setTimeout(createInsect, 1000); // Execute this function after 1000 seconds.
		startGame();
	})
);

// Creates insects on the game screen
function createInsect() {
	const insect = document.createElement('div');
	insect.classList.add('insect');
	const {x, y} = getRandomLocation(); // Destructures x and y from this function.
	insect.style.top = `${y}px`;
	insect.style.left = `${x}px`;
	insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
		selectedInsect.alt
	}" style="transform: rotate(${Math.random() * 360}deg)" />`; // Uses inline styling to rotate each insect by a random amount.
	insect.addEventListener('click', catchInsect); // When an insect is clicked, execute this function. Note if catchInsect() was used instead, the insects would disappear without being clicked on.
	container.appendChild(insect); // Adds each insect to the game screen.
}

// Returns a random x and y coordinate
function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100; // Modified so insects stay in the game screen.
	const y = Math.random() * (height - 200) + 100;
	return {x, y};
}

// Executes functions when an insect is clicked on
function catchInsect() {
	increaseScore();
	this.classList.add('caught'); // Gives the insect clicked the class name of caught.
	setTimeout(() => this.remove(), 2000); // Removes the insect clicked after 2000 milliseconds.
	addInsects();
}

// Increases the score
function increaseScore() {
	score++;
	if (score > 19) messageEl.classList.add('visible'); // If the score is greater than nineteen, give the message the class name of visible.
	scoreEl.innerHTML = `Score: ${score}`;
}

// Generates more insects.
function addInsects() {
	setTimeout(createInsect, 500);
	setTimeout(createInsect, 1000);
}

// Starts the timer
function startGame() {
	setInterval(increaseTime, 1000);
}

// Increments the timer
function increaseTime() {
	let min = Math.floor(seconds / 60); // min is seconds divided by sixty, then rounded down.
	let sec = seconds % 60; // sec is the remainder of seconds divided by sixty.
	min = min < 10 ? `0${min}` : min; // If min is less than ten, add a zero in front of it.
	sec = sec < 10 ? `0${sec}` : sec; // If sec is less than ten, add a zero in front of it.
	timeEl.innerHTML = `Time: ${min}:${sec}`;
	seconds++;
}
