/*----- constants -----*/

// Defines the array of Objects for Questions
const questions = [{
    question: 'What is the result of typeof null?',
    choices: ['Object', 'null', 'undefined', 'Nan'],
    answer: 1
}];

/*----- app's state (variables) -----*/

// Defines a variable that will keep track of the Question#
let currentQuestion;

// Defines a variable that will keep track of the score
let score = 0;

// Defines a variable that will give the results
let winner = false; 

/*----- cached element references -----*/

// Includes cached elements for later usage. 
const questionEl = document.getElementById('question'); 
const buttonEl = document.getElementById('button'); 
const scoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');
const playAgainEl = document.getElementById('play-again')

/*----- event listeners -----*/

// Include event listeners for the answers of the users
choicesEl.addEventListener('click', function(event)){

}

/*----- functions -----*/
init();

// Initiatlize all state, then call render();
function init() {
    currentQuestion = 0
    score = 0;
    winner = null;
    render();
}

// Visualize all state in the DOM 
function render() {
    renderQuestions();
    renderAnswers();
    renderScore();
// Hide and show play again button
    renderControls();
}

function renderQuestions() {
    
}

function renderAnswers() {

}

function renderScore() {

}

function renderControls() {

}
// Display the current questions and its choices of answers

// In response to user interaction (player makes a move).

// We update all impacted state, then finally, call render()

// Player has made a choice

// Let player know if the answer was correct or wrong

// Compute a random question

// Repeat