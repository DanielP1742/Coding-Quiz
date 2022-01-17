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
    }, 
    // Second Round Index = 1
    { 
    "heading": "Question 2",
    "question": "String values must be enclosed with _______ when being assigned variables.",
    "answerA": "Commas",
    "answerB": "Quotes", // this is the answer
    "answerC": "Curly Brackets",
    "answerD": "Parethesis",
},
    // Third Round Index = 2
    {  
    "heading": "Question 3",
    "question": "What company is credited with creating JavaScript?",
    "answerA": "Netscape, Inc", // this is the answer
    "answerB": "IBM", 
    "answerC": "Microsoft Corporation",
    "answerD": "Facebook",
}, 
    // Fourth Round Index = 3
    {
    "heading": "Question 4",
    "question": "Around what % of webpages are written in JavaScript?",
    "answerA": "40%", 
    "answerB": "60%", 
    "answerC": "70%",
    "answerD": "90%", // this is the answer
},
      // Fifth Round Index = 4
    {
    "heading": "Question 5",
    "question": "Arrays in JavaScript can be used to store _________.",
    "answerA": "All of the below", // this is the answer
    "answerB": "Numbers and Srings", 
    "answerC": "Booleans",
    "answerD": "Other Arrays",  
},
    // Sixth Round Index = 5
    {
        "heading": "Question 6",
        "question": "Which of the follow is NOT a JavaScript Declaration?",
        "answerA": "var", 
        "answerB": "let", 
        "answerC": "label", // this is the answer
        "answerD": "const",  
},

    // Final Round Index = 6
    {
        "heading": "Final Question",
        "question": "When did JavaScript originally become available to the public?",
        "answerA": "1993", 
        "answerB": "1995", // this is the answer
        "answerC": "1998", 
        "answerD": "2001",  
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

function quizGameRound() {
    // TODO: do things when any of the buttons is clicked.
    // Rotates through the QUIZ_INFO Array
    gametracker ++;

    headingEl.innerText = QUIZ_INFO[0+gametracker]["heading"];
    headingEl.className = "heading";

    contentEl.innerHTML = QUIZ_INFO[0+gametracker]["question"];
    contentEl.className = "content";

    buttonAEl.innerHTML = QUIZ_INFO[0+gametracker]["answerA"];
    buttonAEl.className = "buttonA";

    buttonAEl.innerHTML = QUIZ_INFO[0+gametracker]["answerB"];
    buttonAEl.className = "buttonB";

    buttonAEl.innerHTML = QUIZ_INFO[0+gametracker]["answerC"];
    buttonAEl.className = "buttonC";

    buttonAEl.innerHTML = QUIZ_INFO[0+gametracker]["answerD"];
    buttonAEl.className = "buttonD";

};

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

    buttonAEl.addEventListener("click", quizGameRound);
    buttonBEl.addEventListener("click", quizGameRound);
    buttonCEl.addEventListener("click", quizGameRound);
    buttonDEl.addEventListener("click", quizGameRound);

    
    
}
