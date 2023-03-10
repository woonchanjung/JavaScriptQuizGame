/*----- constants -----*/

// Defines the array of Objects for Questions
const questions = [{
    question: 'ARE YOU READY TO CHALLENGE YOURSELF FOR AN EPIC JAVASCRIPT GAME!!!',
    choices: ['CLICK', 'BUTTON', 'BELOW', '(▀̿Ĺ̯▀̿ ̿)'],
    answer: 3
},
{
    question: 'What is the result of type of null?',
    choices: ['Object', 'null', 'undefined', 'Nan'],
    answer: 0
},
{
    question: 'What does the following code return? typeof []',
    choices: ['Array', 'Object', 'undefined', 'string'],
    answer: 1
},
{
    question: 'Which statement cannot be used to declare a variable in JavaScript?',
    choices: ['Let', 'var', 'Int', 'Const'],
    answer: 2
},
{
    question: 'Which of the following is a primitive data type in Javascript?',
    choices: ['Array', 'Object', 'Boolean', 'Function'],
    answer: 2
},
{
    question: 'Which of the following is considered a first class citizen in JavaScript?',
    choices: ['Functions', 'Class', 'Array', 'Object'],
    answer: 0
},
{
    question: 'Which of the following is not a valid JavaScript variable name?',
    choices: ['2myVar', 'my-var', '_myVar', 'myVar2'],
    answer: 0
},
{
    question: 'What is the output of console.log(+"3" + 4)?',
    choices: ['34', '7', 'Nan', 'Error'],
    answer: 1
},
{
    question: 'What is the output of console.log(3 < 2 < 1)?',
    choices: ['true', 'false', 'Nan', 'Error'],
    answer: 0
},
{
    question: 'Which of the following is an array method?',
    choices: ['Map', 'Filter', 'Reduce', 'All the above'],
    answer: 3
},
{
    question: 'What is the output of console.log("2" + 2 - "1")?',
    choices: ['"21"', '3', 'Nan', 'Error'],
    answer: 1
},
{
    question: 'What is the output of console.log(typeof NaN)?',
    choices: ['number', 'string', 'Nan', 'Error'],
    answer: 0
},
{
    question: 'Which of the following is block scoped?',
    choices: ['Var', 'Let', 'Const', 'Both Let and Const'],
    answer: 3
},
{
    question: 'What is the output of the following code? console.log(1 + "2" + "2");',
    choices: ['122', '32', '14', 'NaN'],
    answer: 0
},
{
    question: 'Congratulations! You have completed the quiz! You are a true BTYer!!!',
    choices: ['PROUD', 'OF', 'YOU', '＼( °□° )／'],
    answer: 0
},];

/*----- app's state (variables) -----*/

// Defines a variable that will keep track of the Question#
let currentQuestion;

// Defines a variable that will give the results
let winner = null; 

/*----- cached element references -----*/

// Includes cached elements for later usage. 
const questionEl = document.querySelector('.questions'); 
const choicesEl = document.querySelector('.choices'); 
const playAgainEl = document.querySelector('.btn-play-again');

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
// Hide and show play again button
    renderControls();
}

// Displays current question
function renderQuestions() {
    questionEl.textContent = questions[currentQuestion].question;
}

// Display the current choices of answers
function renderAnswers() {
    const choices = questions[currentQuestion].choices;
    const choiceButtons = choices.map((choice, index) => {
        return `<button data-index="${index}">${choice}</button>`;
    });
    choicesEl.innerHTML = choiceButtons.join('');
}

// Check if the answer is correct and renders
function checkAnswer(choiceIndex) {
    if (choiceIndex === questions[currentQuestion].answer) {
        winner = true;
        currentQuestion++;
    } else {
        winner = false;
    }
    render();
    }

// Displays the result
function renderControls() {
    if (currentQuestion === questions.length-1) {
        playAgainEl.style.display = "block";
    } else {
        playAgainEl.style.display = "none";
    }
}




