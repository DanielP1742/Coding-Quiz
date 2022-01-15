// Create Event Listner for the first Button:
var buttonStartEl = document.querySelector("#start-quiz");

var headingEl = document.querySelector("#heading")
var contentEl = document.querySelector("#content")
var gamechecker = 0


// Initial beginning of Game - calls the The Quiz Game Function
buttonStartEl.addEventListener("click", function() {
    alert("Good Luck!")

    var gamestart = true

    if (gamestart === true){
        quizGame()
    };
    

});


// The Quiz Game
function quizGame(){

headingEl.textContent("What bear is the best bear?")
headingEl.className = "heading"


}

console.log(gamechecker)