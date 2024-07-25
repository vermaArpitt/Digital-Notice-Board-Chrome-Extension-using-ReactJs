document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start').addEventListener('click', toggleStartStop);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('work-btn').addEventListener('click', () => setMode('work'));
    document.getElementById('break-btn').addEventListener('click', () => setMode('break'));
});

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;
let seconds = "00";
let interval;
let isRunning = false;
let currentMode = 'work'; // Default mode
let remainingMinutes = workTime - 1; // Default starting minutes
let remainingSeconds = 59; // Default starting seconds

window.onload = () => {
    setMode(currentMode);
};

function setMode(mode) {
    if (mode === 'work') {
        currentMode = 'work';
        remainingMinutes = workTime - 1;
        remainingSeconds = 59;
        document.getElementById('minutes').innerHTML = workTime;
        document.getElementById('seconds').innerHTML = seconds;
        workTittle.classList.add('active');
        breakTittle.classList.remove('active');
    } else {
        currentMode = 'break';
        remainingMinutes = breakTime - 1;
        remainingSeconds = 59;
        document.getElementById('minutes').innerHTML = breakTime;
        document.getElementById('seconds').innerHTML = seconds;
        breakTittle.classList.add('active');
        workTittle.classList.remove('active');
    }
}

function toggleStartStop() {
    if (isRunning) {
        stop();
    } else {
        start();
    }
}

function start() {
    if (isRunning) return;
    isRunning = true;

    document.getElementById('start').innerHTML = '<i class="fas fa-stop"></i>';
    document.getElementById('reset').style.display = "block";

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = remainingMinutes;
        document.getElementById('seconds').innerHTML = remainingSeconds;

        remainingSeconds--;

        if (remainingSeconds < 0) {
            remainingMinutes--;
            remainingSeconds = 59;

            if (remainingMinutes < 0) {
                if (currentMode === 'work') {
                    setMode('break');
                } else {
                    setMode('work');
                }
            }
        }
    };

    interval = setInterval(timerFunction, 1000);
}

function stop() {
    isRunning = false;
    clearInterval(interval);

    document.getElementById('start').innerHTML = '<i class="fas fa-play"></i>';
}

function reset() {
    stop(); // Stop any ongoing timer
    setMode(currentMode); // Reset to the current mode with default values

    document.getElementById('start').innerHTML = '<i class="fas fa-play"></i>';
    document.getElementById('reset').style.display = "none";
}
