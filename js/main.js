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

// Defines a variable that will give the results
let winner = false; 

/*----- cached element references -----*/

// Includes cached elements for later usage. 
const questionEl = document.getElementById('question'); 
const choicesEl = document.getElementById('choices'); 
const resultEl = document.getElementById('result');
const playAgainEl = document.getElementById('play-again')

/*----- event listeners -----*/

// Include event listeners for the answers of the users
choicesEl.addEventListener('click', function(event){
    if (event.target.matches('button')) {
        const choiceIndex = parseInt(event.target.getAttribute('data-index'));
        checkAnswer(choiceIndex);
    }
});

// Play again Event Listener

playAgainEl.addEventListener('click', function(){
    init();
});

/*----- functions -----*/
init();

// Initiatlize all state, then call render();
function init() {
    currentQuestion = 0
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

// Displays current question
function renderQuestions() {
    questionEl.textContent = questions[currentQuestion].question;
}

// Display the current questions and its choices of answers
function renderAnswers() {

}

function renderControls() {

}


// In response to user interaction (player makes a move).

// We update all impacted state, then finally, call render()

// Player has made a choice

// Let player know if the answer was correct or wrong

// Compute a random question

// Repeat