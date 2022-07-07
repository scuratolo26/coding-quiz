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
            // 
        }
    }, 1000);
}

document.getElementById("startBtn").addEventListener("click", countdown)