var startBtnEl = document.getElementById('startBtn');

function startQuiz() {
    startBtnEl.setAttribute('style', 'display: none;')
    countdown();
    question1();
}

// TIMER
var timerEl = document.getElementById('time');

function countdown() {
    var timeLeft = 120;

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
            main.textContent = "";
            h1El.textContent = "Quiz Time is up!";
        }
    }, 1000);
}

// END TIMER

// QUIZ QUESTIONS
var main = document.getElementById('main');
var h1El = document.getElementById('heading-text');
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var score = 0;

function question1() {
    main.textContent = "";
    h1El.textContent = "Commonly used data types do NOT include:";
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
    document.getElementById("next0").addEventListener("click", question2);
    document.getElementById("next1").addEventListener("click", question2);
    document.getElementById("next2").onclick = function () {
        question2();
        score = score + 1;
        console.log(score);
    }
    document.getElementById("next3").addEventListener("click", question2);
}

function question2() {
    console.log("success");
}
// END QUIZ QUESTIONS

// EVENT LISTENERS
document.getElementById("startBtn").addEventListener("click", startQuiz)

// END EVENT LISTENERS