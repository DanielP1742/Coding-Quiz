// It's always good to put constant information at the top of file.
const QUIZ_INFO = [
    // First question goes here.
    {
        "heading0": "Question",
        "question0": "What bear is the best bear?",
        "answer0": "Bears",
        "answer0": "Beats",
        "answer0": "Battlestar Galactica",
        "answer0": "Brown Bear"
    }, 
    // Next question goes here.
    {},
    // Etc.
    {}, 
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

    // TO DO NEXT: add other buttons

};

// The Initial Round of Quiz-game
function quizStart() {
 
 

    buttonAEl.style.display = "initial";
    buttonBEl.style.display = "initial";
    buttonCEl.style.display = "initial";
    buttonDEl.style.display = "initial";

    headingEl.innerText = QUIZ_INFO[0]["heading0"];
    headingEl.className = "heading";

    contentEl.innerHTML = QUIZ_INFO[0]["question0"];
    contentEl.className = "content";

    buttonAEl.innerHTML = QUIZ_INFO[0]["answer0"];
    buttonAEl.className = "buttonA"

    //TO DO NEXT: Add other Buttons


    //load index 0 of object

    buttonAEl.addEventListener("click", quizGameRound);
    buttonBEl.addEventListener("click", quizGameRound);
    buttonCEl.addEventListener("click", quizGameRound);
    buttonDEl.addEventListener("click", quizGameRound);

    
    
}
