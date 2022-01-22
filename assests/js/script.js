// It's always good to put constant information at the top of file.

// Docs at https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
// localStorage.setItem (highScores); // The correct method signature is (keyName, keyValue).

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
    // End Index does not show
    {
        "heading": "Final Question",
        "question": "When did JavaScript originally become available to the public?",
        "answerA": "1993", 
        "answerB": "1995", 
        "answerC": "1998", 
        "answerD": "2001",
        "correct": "1995"

    },

];

// Create Event Listner for the first Button:

var timerEL = document.querySelector("#timer")

var buttonStartEl = document.querySelector("#start-quiz");

var buttonAEl = document.querySelector("#buttonA");
var buttonBEl = document.querySelector("#buttonB");
var buttonCEl = document.querySelector("#buttonC");
var buttonDEl = document.querySelector("#buttonD");

var headingEl = document.querySelector("#heading");
var contentEl = document.querySelector("#content");

 var submitEL = document.querySelector("#submit");
 var formEl = document.querySelector("#initialsForm");

 var divScores = document.getElementById("divScore")

buttonAEl.style.display = "none";
buttonBEl.style.display = "none";
buttonCEl.style.display = "none";
buttonDEl.style.display = "none";

submitEL.style.display = "none";
formEl.style.display = "none";

let timeLeft = 2
var gametracker = 0
var gamescore = 0

// Initial beginning of Game - calls the The Quiz Game Function
buttonStartEl.addEventListener("click", function() {
    alert("Good Luck!")

    var gamestart = true
    buttonStartEl.style.display = "none";
  

    if (gamestart === true){
        quizStart()
        var gameTimer = setInterval(function() {
            console.log(gameTimer);
            console.log("The time left in game = " + timeLeft)
            timeLeft--;
            timerEL.innerText = timeLeft
            if (timeLeft<=0)  { 
                clearInterval(gameTimer);
                quizEnd()
            }
            
    
        }, 1000);
    };
});

function quizGameRound(buttonThatWasClicked) {
      
    var textThatWasClicked = buttonThatWasClicked.innerHTML;  // text that was on the button
    console.log(textThatWasClicked);
    console.log(gametracker)
    var theCorrectAnswerForTheQuestion = QUIZ_INFO[gametracker]["correct"];  // game tracker'th number of question
    console.log(theCorrectAnswerForTheQuestion);
        if (textThatWasClicked === theCorrectAnswerForTheQuestion) {
            gamescore++;
            timeLeft+=10;
        }else{ 
            timeLeft-=10;
        }
        console.log("the score after submission" + gamescore)

        gametracker++;
    

    headingEl.innerText = QUIZ_INFO[gametracker]["heading"];
    headingEl.className = "heading";

    contentEl.innerHTML = QUIZ_INFO[gametracker]["question"];
    contentEl.className = "content";

    buttonAEl.innerHTML = QUIZ_INFO[gametracker]["answerA"];
    buttonAEl.className = "buttonA";

    buttonBEl.innerHTML = QUIZ_INFO[gametracker]["answerB"];
    buttonBEl.className = "buttonB";

    buttonCEl.innerHTML = QUIZ_INFO[gametracker]["answerC"];
    buttonCEl.className = "buttonC";

    buttonDEl.innerHTML = QUIZ_INFO[gametracker]["answerD"];
    buttonDEl.className = "buttonD";

    if (gametracker >= 7) {
        quizEnd() };
};
//end quiz game round 

function quizEnd(){

    var finalScore = timeLeft;
    
    headingEl.innerText = "Game Over";
    contentEl.innerText = "Great job! Your scorce is " + finalScore + "!  Enter you initials in the form below:";

    submitEL.style.display = "initial";
    formEl.style.display = "initial";

    buttonAEl.style.display = "none";
    buttonBEl.style.display = "none";
    buttonCEl.style.display = "none";
    buttonDEl.style.display = "none";
    timerEL.style.display = "none";

    submitEL.addEventListener("click", function() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
      var initials = document.getElementById("initialsForm").value
        console.log(initials);
        //capture the finalScore and initials and push it into the high Scores array;

        // Docs at https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        // localStorage.setItem(highScores); // The correct method signature is (keyName, keyValue).
        localStorage.setItem(initials, finalScore);

        ///////////////////
        // var a = { 
        //     "foo": 42,
        //     "bar": 123
        // }
        // for (var myAttributeName in a) {
        //     console.log(myAttributeName);
        // }
        // That prints 42 and then 123.

        ///////////////////

        if (initials) { 
            // this loop was found on https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
            for (var [key, value] of Object.entries(localStorage)) {
                // Lots of good examples here. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
                var newDiv = document.createElement("div")
                //div creation
                
                // Set the new div's content.
                newDiv.innerText = `${key}, ${value}`; // (initials, finalScore);
                divScores.appendChild(newDiv);

                //for each key value set we what to create a table row....
             
                //create button for restarting the quizgame
                //redeclair game variables and call function start game
            }
        }
    });
}
  
// make a note of the score
// check the local storage for any stored scores
// if there are none, create an empty array and include the initial and the score as first element
// if there is an array, take its value from local storage, and parse it, and push the new value into parsed array.
// sort the array.
// write the sorted array on top of the other list in the local storage. 
// ask the user if they would like to play another game
// if they say no, quit


// if they say yes, then reinitialize all the values. and run quizstart function again
// 
// let timeLeft = 60
// var gametracker = 0
// var gamescore = 0

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


