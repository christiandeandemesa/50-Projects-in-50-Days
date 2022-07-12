// Quiz questions, choices, and answer
const quizData = [
	{
		question: 'What is the real name of the Batman villain known as the Riddler?',
		a: 'Edward Nygma',
		b: 'Quentin Schenn',
		c: 'Mr. Alvin Yee',
		d: 'Ryan Riddles',
		correct: 'a'
	},
	{
		question: "What was the Riddler's original occupation?",
		a: 'Financial Adviser',
		b: 'Forensic Accountant',
		c: 'Private Detective',
		d: 'Philosophy Professor',
		correct: 'b'
	},
	{
		question:
			'How many live-action appearances has the Riddler made in movies from 1960 to 2022?',
		a: '5',
		b: '6',
		c: '7',
		d: '8',
		correct: 'c'
	},
	{
		question: 'When did the Riddler first debut in comic books?',
		a: 'July 1947',
		b: 'July 1948',
		c: 'October 1947',
		d: 'October 1948',
		correct: 'd'
	}
];

// Additional final score text
const nameData = {
	0: 'an ignoramus...',
	1: 'a dolt...',
	2: 'unreservedly average.',
	3: 'a genius!',
	4: 'a prodigy!'
};

const quiz = document.getElementById('quiz'); // quiz is the container.
const questionEl = document.getElementById('question'); // questionEl is the question.
const answerEls = document.querySelectorAll('.answer'); // answerEls is a nodelist where each element is a radio button.
const aText = document.getElementById('a-text'); // aText is the first answer.
const bText = document.getElementById('b-text'); // bText is the second answer.
const cText = document.getElementById('c-text'); // cText is the third answer.
const dText = document.getElementById('d-text'); // dText is the fourth answer.
const submitBtn = document.getElementById('submit'); // submitBtn is the submit button.

let currQuiz = 0; // Keeps track of the quizData index.
let score = 0; // Keeps track of how many correct answers chosen.

loadQuiz();

// When the submit button is clicked...
submitBtn.addEventListener('click', () => {
	const answer = getSelected();

	// If answer is not an empty string...
	if (answer) {
		if (answer === quizData[currQuiz].correct) score++; // If the answer is correct, increment score.
		currQuiz++;
		if (currQuiz < quizData.length)
			loadQuiz(); // If the user is not on the last quizData index, execute this function.
		else
			quiz.innerHTML = `
            <h2>${score}/${quizData.length} questions correctly. You are ${nameData[score]}</h2>
            <button onclick="location.reload()">Play Again</button>
        `; // Otherwise, set the container's children elements to the above.
	}
});

// Loads the next set of question, choices, and answer
function loadQuiz() {
	deselectAnswers();
	const currQuizData = quizData[currQuiz];
	questionEl.innerText = currQuizData.question;
	aText.innerText = currQuizData.a;
	bText.innerText = currQuizData.b;
	cText.innerText = currQuizData.c;
	dText.innerText = currQuizData.d;
}

// Removes checked from all radio buttons
function deselectAnswers() {
	answerEls.forEach(answerEl => (answerEl.checked = false));
}

// Selects an answer
function getSelected() {
	let answer;

	// answer is the checked radio button
	answerEls.forEach(answerEl => {
		if (answerEl.checked) answer = answerEl.id;
	});

	return answer;
}
