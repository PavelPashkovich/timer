'use strict';

const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const stopButton = document.getElementById('stopButton');

function app() {
    let time = 0;
    let go = null;
    startButton.addEventListener('click', () => {
        go = setInterval(() => {
            time += 1;
            timer.textContent = time;
        }, 1000)
    });
    stopButton.addEventListener('click', () => {
        clearInterval(go);
        timer.textContent = time;
    });
    resetButton.addEventListener('click', () => {
        clearInterval(go);
        time = 0;
        timer.textContent = time;
    });
}

app()