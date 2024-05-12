let timer = 60;
let intervaltime;
let hitrnd;
let score = 0;

function makeBubble() {
    let clutter = "";
    for (let i = 0; i < 310; i++) {
        let rnd = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rnd}</div>`;
    }

    document.querySelector("#panelbtm").innerHTML = clutter;
}

function startTimer() {
    intervaltime = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer;
        } else {
            clearInterval(intervaltime);
            endGame();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(intervaltime);
    endGame();
}

function endGame() {
    document.querySelector("#panelbtm").innerHTML = '<h1> Game Over</h1>';
    let redbk = document.querySelector("h1");
    redbk.style.backgroundColor = "red";
    disableClickEvent();
}

function getNewHit() {
    hitrnd = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrnd;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function decreaseScore() {
    score -= 5;
    document.querySelector("#score").textContent = score;
}

function clickHandler(dets) {
    let clickedNumber = Number(dets.target.textContent);
    if (hitrnd === clickedNumber) {
        increaseScore();
    } else {
        decreaseScore();
    }
    getNewHit();
    makeBubble();
}

function disableClickEvent() {
    // Remove the click event listener from the panel
    document.querySelector("#panelbtm").removeEventListener("click", clickHandler);

    // Disable further interaction on the panel
    document.querySelector("#panelbtm").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
}

document.querySelector("#panelbtm").addEventListener("click", clickHandler);

document.querySelector("#startButton").addEventListener("click", function () {
    makeBubble();
    startTimer();
    getNewHit();
});

document.querySelector("#stopButton").addEventListener("click", function () {
    stopTimer();
});
