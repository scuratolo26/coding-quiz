// VARIABLES
var startBtnEl = document.getElementById('startBtn');
var timeLeft = 0;
var timerEl = document.getElementById('time');
var main = document.getElementById('main');
var result = document.getElementById('result');
var h1El = document.getElementById('heading-text');
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var ansH2El = document.createElement("h2");

var score = 0;

// END VARIABLES

function startQuiz() {
    startBtnEl.setAttribute('style', 'display: none;')
    countdown();
    question1();
}

// TIMER
function countdown() {
    timeLeft = 120;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Time: ' + timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            quizOver();
        }
    }, 1000);
}

// END TIMER

// QUIZ QUESTIONS
function question1() {
    main.textContent = "";
    h1El.textContent = "1. Commonly used data types do NOT include:";
    var orderedListElements = [btn1, btn2, btn3, btn4];
    var answers = ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'];

    for (var index = 0; index < 4; index = index + 1) {
        var currentElement = orderedListElements[index];
        var currentAns = answers[index];

        currentElement.textContent = currentAns;

        main.appendChild(currentElement);
        currentElement.setAttribute('class', 'buttons');
        currentElement.setAttribute('id', 'next' + index);
    };
    document.getElementById("next0").onclick = function () {
        incorrect();
        question2();
    }
    document.getElementById("next1").onclick = function () {
        incorrect();
        question2();
    }
    document.getElementById("next2").onclick = function () {
        correct();
        question2();
    }
    document.getElementById("next3").onclick = function () {
        incorrect();
        question2();
    }
}

function question2() {
    main.textContent = "";
    h1El.textContent = "2. The condition in an if / else statement is enclosed with __________.";
    var orderedListElements = [btn1, btn2, btn3, btn4];
    var answers = ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'];

    for (var index = 0; index < 4; index = index + 1) {
        var currentElement = orderedListElements[index];
        var currentAns = answers[index];

        currentElement.textContent = currentAns;

        main.appendChild(currentElement);
        currentElement.setAttribute('class', 'buttons');
        currentElement.setAttribute('id', 'next' + index);
    };
    document.getElementById("next0").onclick = function () {
        incorrect();
        question3();
    }
    document.getElementById("next1").onclick = function () {
        incorrect();
        question3();
    }
    document.getElementById("next2").onclick = function () {
        correct();
        question3();
    }
    document.getElementById("next3").onclick = function () {
        incorrect();
        question3();
    }
}

function question3() {
    main.textContent = "";
    h1El.textContent = "3. Arrays in JavaScript can be used to store __________.";
    var orderedListElements = [btn1, btn2, btn3, btn4];
    var answers = ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'];

    for (var index = 0; index < 4; index = index + 1) {
        var currentElement = orderedListElements[index];
        var currentAns = answers[index];

        currentElement.textContent = currentAns;

        main.appendChild(currentElement);
        currentElement.setAttribute('class', 'buttons');
        currentElement.setAttribute('id', 'next' + index);
    };
    document.getElementById("next0").onclick = function () {
        incorrect();
        question4();
    }
    document.getElementById("next1").onclick = function () {
        incorrect();
        question4();
    }
    document.getElementById("next2").onclick = function () {
        incorrect();
        question4();
    }
    document.getElementById("next3").onclick = function () {
        correct();
        question4();
    }
}

function question4() {
    main.textContent = "";
    h1El.textContent = " 4. String values must be enclosed within _______ when being assigned to variables.";
    var orderedListElements = [btn1, btn2, btn3, btn4];
    var answers = ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'];

    for (var index = 0; index < 4; index = index + 1) {
        var currentElement = orderedListElements[index];
        var currentAns = answers[index];

        currentElement.textContent = currentAns;

        main.appendChild(currentElement);
        currentElement.setAttribute('class', 'buttons');
        currentElement.setAttribute('id', 'next' + index);
    };
    document.getElementById("next0").onclick = function () {
        incorrect();
        question5();
    }
    document.getElementById("next1").onclick = function () {
        incorrect();
        question5();
    }
    document.getElementById("next2").onclick = function () {
        correct();
        question5();
    }
    document.getElementById("next3").onclick = function () {
        incorrect();
        question5();
    }
}

function question5() {
    main.textContent = "";
    h1El.textContent = "5. A very useful tool used during development and debugging for printing content to the debugger is:";
    var orderedListElements = [btn1, btn2, btn3, btn4];
    var answers = ['1. console.log', '2. terminal/bash', '3. for loops', '4. JavaScript'];

    for (var index = 0; index < 4; index = index + 1) {
        var currentElement = orderedListElements[index];
        var currentAns = answers[index];

        currentElement.textContent = currentAns;

        main.appendChild(currentElement);
        currentElement.className = "buttons"
        currentElement.setAttribute('id', 'next' + index);
    };
    document.getElementById("next0").onclick = function () {
        correct();
        quizOver();
    }
    document.getElementById("next1").onclick = function () {
        incorrect();
        quizOver();
    }
    document.getElementById("next2").onclick = function () {
        incorrect();
        quizOver();
    }
    document.getElementById("next3").onclick = function () {
        incorrect();
        quizOver();
    }
}
// END QUIZ QUESTIONS
function correct() {
    score = score + 1;
    console.log(score);
    result.appendChild(ansH2El);
    ansH2El.textContent = "Correct!";
}

function incorrect() {
    timeLeft = timeLeft - 10;
    result.appendChild(ansH2El);
    ansH2El.textContent = "Incorrect."
}

function quizOver() {
    // display score
    main.textContent = "";
    h1El.textContent = "All done!"
    main.textContent = "Your final score is " + score + "/5";

    // display input box & submit button
    var quizOver = document.getElementById('quiz-over');
    quizOver.setAttribute('style', 'display:block;');


    var submitBtn = document.querySelector("#submit");


    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var initials = document.querySelector("#initials").value;
        localStorage.setItem(initials, score);
        var highScore = initials + " " + score;
        console.log(initials);
        main.textContent = highScore;
        quizOver.setAttribute('style', 'display:none');
        result.setAttribute('style', 'display:none');
        h1El.textContent = "Scores";
        var btnStartOver = document.createElement("button");
        btnStartOver.textContent = "Start Over";
        btnStartOver.className = "buttons";
        main.appendChild(btnStartOver);
        btnStartOver.addEventListener("click", function (event) {
            event.preventDefault();
            location.reload();
        });
    });
}



// EVENT LISTENERS
document.getElementById("startBtn").addEventListener("click", startQuiz)

// END EVENT LISTENERS