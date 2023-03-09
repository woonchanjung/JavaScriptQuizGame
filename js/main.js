        /*----- constants -----*/

// Defines the const for Audio  
    // Ex - const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

// Defines the const for Imgs

// Defines the array of Objects for Questions


// Defines the arry of Asnwer for the Questions

        /*----- app's state (variables) -----*/

// Defines a variable that will keep track of the Question#
let currentQuestion;

// Defines a variable that will keep track of the score
let scores = 0;

// Defines a variable that will give the results
let winner = false; 

        /*----- cached element references -----*/

// Includes cached elements for later usage. 
    // Ex. const pResultEl = document.getElementById('p-result');

        /*----- event listeners -----*/

// Include event listeners for the answers of the users

/*----- functions -----*/

// Initiatlize all state, then call render();

// Display the current questions and its choices of answers

// In response to user interaction (player makes a move).

// We update all impacted state, then finally, call render()

// Guards (do nothing unless of the three buttons were clicked)
    //if (evt.target.tagName !== 'BUTTON') return;

// Player has made a choice

// Let player know if the answer was correct or wrong

// Keep track of the user's score

// Compuet a random choice question

// Transfer/visualize all state to the DOM

// Repeat

// Display the final score

// Suggest Resources to study more.