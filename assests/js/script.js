// It's always good to put constant information at the top of file.

const QUIZ_INFO = [
    // First Round Index = 0
    {
        "heading": "Question 1",
        "question": "Commonly used data types in JavaScript Do NOT Include:",
        "answerA": "Strings",
        "answerB": "Booleans",
        "answerC": "Alerts", // this is the answer
        "answerD": "Numbers",
        "correct": "Alerts"
    }, 
    // Second Round Index = 1
    { 
    "heading": "Question 2",
    "question": "String values must be enclosed with _______ when being assigned variables.",
    "answerA": "Commas",
    "answerB": "Quotes", // this is the answer
    "answerC": "Curly Brackets",
    "answerD": "Parethesis",
    "correct": "Quotes"
},
    // Third Round Index = 2
    {  
    "heading": "Question 3",
    "question": "What company is credited with creating JavaScript?",
    "answerA": "Netscape, Inc", // this is the answer
    "answerB": "IBM", 
    "answerC": "Microsoft Corporation",
    "answerD": "Facebook",
    "correct": "Netscape, Inc"
}, 
    // Fourth Round Index = 3
    {
    "heading": "Question 4",
    "question": "Around what % of webpages are written in JavaScript?",
    "answerA": "40%", 
    "answerB": "60%", 
    "answerC": "70%",
    "answerD": "90%", // this is the answer
    "correct": "90%"
},
      // Fifth Round Index = 4
    {
    "heading": "Question 5",
    "question": "Arrays in JavaScript can be used to store _________.",
    "answerA": "All of the below", // this is the answer
    "answerB": "Numbers and Srings", 
    "answerC": "Booleans",
    "answerD": "Other Arrays",  
    "correct": "All of the below"
},
    // Sixth Round Index = 5
    {
        "heading": "Question 6",
        "question": "Which of the follow is NOT a JavaScript Declaration?",
        "answerA": "var", 
        "answerB": "let", 
        "answerC": "label", // this is the answer
        "answerD": "const",  
        "correct": "label"
},

    // Final Round Index = 6
    {
        "heading": "Final Question",
        "question": "When did JavaScript originally become available to the public?",
        "answerA": "1993", 
        "answerB": "1995", // this is the answer
        "answerC": "1998", 
        "answerD": "2001",
        "correct": "1995"

    },
];

// Create Event Listner for the first Button:
var buttonStartEl = document.querySelector("#start-quiz");

var buttonAEl = document.querySelector("#buttonA");
var buttonBEl = document.querySelector("#buttonB");
var buttonCEl = document.querySelector("#buttonC");
var buttonDEl = document.querySelector("#buttonD");

var headingEl = document.querySelector("#heading")
var contentEl = document.querySelector("#content")
var gametracker = 0
var gamescore = 0

buttonAEl.style.display = "none";
buttonBEl.style.display = "none";
buttonCEl.style.display = "none";
buttonDEl.style.display = "none";


// Initial beginning of Game - calls the The Quiz Game Function
buttonStartEl.addEventListener("click", function() {
    alert("Good Luck!")

    var gamestart = true

    buttonStartEl.style.display = "none";

    if (gamestart === true){
        quizStart()
    };
});

function quizGameRound(buttonThatWasClicked) {
    // TODO: do things when any of the buttons is clicked.
    // Rotates through the QUIZ_INFO Array
    gametracker ++;

   
    // What is the correct answer per round?
    //How do I make the button = the right answer?    
    var textThatWasClicked = buttonThatWasClicked.innerHTML;
    var theCorrectAnswerForTheQuestion = QUIZ_INFO[0+gametracker-1]["correct"];
    console.log("the text that was clicked" ,textThatWasClicked)
    console.log("the correct answer", theCorrectAnswerForTheQuestion)
        if (textThatWasClicked === theCorrectAnswerForTheQuestion) {
            gamescore++;
            
        }else{ //timer -10 Seconds)
        }
        console.log("the score after submission" + gamescore)
    // does Quic-game pass in that parameter when it startes
    // TO DO look at the if statement if the was currect

    headingEl.innerText = QUIZ_INFO[0+gametracker]["heading"];
    headingEl.className = "heading";

    contentEl.innerHTML = QUIZ_INFO[0+gametracker]["question"];
    contentEl.className = "content";

    buttonAEl.innerHTML = QUIZ_INFO[0+gametracker]["answerA"];
    buttonAEl.className = "buttonA";

    buttonBEl.innerHTML = QUIZ_INFO[0+gametracker]["answerB"];
    buttonBEl.className = "buttonB";

    buttonCEl.innerHTML = QUIZ_INFO[0+gametracker]["answerC"];
    buttonCEl.className = "buttonC";

    buttonDEl.innerHTML = QUIZ_INFO[0+gametracker]["answerD"];
    buttonDEl.className = "buttonD";
        
};
//end quiz game round 

// The Initial Round of Quiz-game
function quizStart() {
 
 
    //Answer Buttons Become Visable
    buttonAEl.style.display = "initial";
    buttonBEl.style.display = "initial";
    buttonCEl.style.display = "initial";
    buttonDEl.style.display = "initial";

    //Buttons load index 0 answers
    headingEl.innerText = QUIZ_INFO[0]["heading"];
    headingEl.className = "heading";

    contentEl.innerHTML = QUIZ_INFO[0]["question"];
    contentEl.className = "content";

    buttonAEl.innerHTML = QUIZ_INFO[0]["answerA"];
    buttonAEl.className = "buttonA"

    buttonBEl.innerHTML = QUIZ_INFO[0]["answerB"];
    buttonBEl.className = "buttonB"

    buttonCEl.innerHTML = QUIZ_INFO[0]["answerC"];
    buttonCEl.className = "buttonC"

    buttonDEl.innerHTML = QUIZ_INFO[0]["answerD"];
    buttonDEl.className = "buttonD"


    //load index 0 of object

    // old code looked like this: buttonAEl.addEventListener("click", quizGameRound);

    buttonAEl.addEventListener("click", function() {
        quizGameRound(buttonAEl);
    });

    buttonBEl.addEventListener("click", function() {
        quizGameRound(buttonBEl);
    });

    buttonCEl.addEventListener("click", function() {
        quizGameRound(buttonCEl);
    });

    buttonDEl.addEventListener("click", function() {
        quizGameRound(buttonDEl);
    });
        
};


