document.querySelector('.stopwatch-btn').addEventListener('click', function() {
    // hide all other wrapper
    document.querySelectorAll('.outer-wrapper > div').forEach(function(element) {
        element.style.display = 'none';
    });

    // show stopwatch wrapper
    document.querySelector('.stopwatch').style.display = 'block';

    // update type text 
    document.querySelector('.type').textContent = 'Stopwatch';
    document.querySelector('.type').style.display = 'none';
});


document.querySelector('.timer-btn').addEventListener('click', function() {
    // hide all other wrapper
    document.querySelectorAll('.outer-wrapper > div').forEach(function(element) {
        element.style.display = 'none';
    });

    // show timer wrapper
    document.querySelector('.timer').style.display = 'block';

    // update type text 
    document.querySelector('.type').textContent = 'Timer';
    document.querySelector('.type').style.display = 'none';
});

document.querySelector('.back-btn').addEventListener('click', function() {
    console.log('Back button clicked');
    // hide all other wrapper
    document.querySelectorAll('.outer-wrapper > div').forEach(function(element) {
        element.style.display = 'none';
    });

    // show clock wrapper
    document.querySelector('.clock').style.display = 'block';

    // update type text 
    document.querySelector('.type').textContent = 'Clock';
    document.querySelector('.type').style.display = 'none';
});

document.querySelector('.back-btn1').addEventListener('click', function() {
    console.log('Back button clicked');
    // hide all other wrapper
    document.querySelectorAll('.outer-wrapper > div').forEach(function(element) {
        element.style.display = 'none';
    });

    // show clock wrapper
    document.querySelector('.clock').style.display = 'block';

    // update type text 
    document.querySelector('.type').textContent = 'Clock';
    document.querySelector('.type').style.display = 'none';
});


// Function to add trailing zero
const addTrailingZero = (num) => {
    return num < 10 ? "0" + num : num;
};

// Function to update time
const updateTime = () => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = addTrailingZero(hours);
    minutes = addTrailingZero(minutes);
    seconds = addTrailingZero(seconds);

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;
};

updateTime();
setInterval(updateTime, 1000);

// Stopwatch functions
let stopwatchHours = 0,
    stopwatchMinutes = 0,
    stopwatchSeconds = 0,
    stopwatchMiliSeconds = 0,
    stopwatchRunning = false,
    laps = 0,
    stopwatchInterval;

const stopwatch = () => {
    stopwatchMiliSeconds++;
    if (stopwatchMiliSeconds === 100) {
        stopwatchSeconds++;
        stopwatchMiliSeconds = 0;
    }
    if (stopwatchSeconds === 60) {
        stopwatchMinutes++;
        stopwatchSeconds = 0;
    }
    if (stopwatchMinutes === 60) {
        stopwatchHours++;
        stopwatchMinutes = 0;
    }

    document.querySelector(".stopwatch-hour").innerHTML = addTrailingZero(stopwatchHours);
    document.querySelector(".stopwatch-min").innerHTML = addTrailingZero(stopwatchMinutes);
    document.querySelector(".stopwatch-sec").innerHTML = addTrailingZero(stopwatchSeconds);
    document.querySelector(".stopwatch-ms").innerHTML = addTrailingZero(stopwatchMiliSeconds);
};

const startStopwatch = () => {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(stopwatch, 10);
        stopwatchRunning = true;
    }
};

const stopStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
};

const resetStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchHours = 0;
    stopwatchMinutes = 0;
    stopwatchSeconds = 0;
    stopwatchMiliSeconds = 0;
    stopwatchRunning = false;
    laps = 0;

    document.querySelector(".stopwatch-hour").innerHTML = "00";
    document.querySelector(".stopwatch-min").innerHTML = "00";
    document.querySelector(".stopwatch-sec").innerHTML = "00";
    document.querySelector(".stopwatch-ms").innerHTML = "00";
    document.querySelector(".laps").innerHTML = "";
};

const lapStopwatch = () => {
    laps++;

    document.querySelectorAll(".lap").forEach(element => {
        element.classList.remove("active");
    });

    const lapsElement = document.querySelector(".laps");
    const lapElement = document.createElement("div");
    lapElement.classList.add("lap", "active");
    lapElement.innerHTML = `
        <p>lap ${laps}</p>
        <p>${addTrailingZero(stopwatchHours)} :${addTrailingZero(stopwatchMinutes)}:${addTrailingZero(stopwatchSeconds)} :${addTrailingZero(stopwatchMiliSeconds)}</p>
    `;
    lapsElement.insertBefore(lapElement, lapsElement.firstChild);
};

document.querySelector(".start-stopwatch").addEventListener("click", function() {
    startStopwatch();
    document.querySelector(".start-stopwatch").style.display = "none";
    document.querySelector(".lap-stopwatch").style.display = "block";
});

document.querySelector(".reset-stopwatch").addEventListener("click", function() {
    resetStopwatch();
    document.querySelector(".start-stopwatch").style.display = "block";
    document.querySelector(".lap-stopwatch").style.display = "none";
});

document.querySelector(".lap-stopwatch").addEventListener("click", lapStopwatch);

// Timer functions
let timerTime = 0,
    timerHours = 0,
    timerMinutes = 0,
    timerSeconds = 0,
    timerMiliseconds = 0,
    timerInterval;

const getTime = () => {
    timerTime = prompt("Enter time in minutes :");
    timerTime = timerTime * 60;
    setTimer();
};

const setTimer = () => {
    timerHours = Math.floor(timerTime / 3600);
    timerMinutes = Math.floor((timerTime % 3600) / 60);
    timerSeconds = Math.floor(timerTime % 60);

    document.getElementById("timer-hour").innerHTML = addTrailingZero(timerHours);
    document.getElementById("timer-min").innerHTML = addTrailingZero(timerMinutes);
    document.getElementById("timer-sec").innerHTML = addTrailingZero(timerSeconds);
    document.getElementById("timer-ms").innerHTML = addTrailingZero(timerMiliseconds);
};

const timer = () => {
    timerMiliseconds--;
    if (timerMiliseconds === -1) {
        timerMiliseconds = 99;
        timerSeconds--;
    }
    if (timerSeconds === -1) {
        timerSeconds = 59;
        timerMinutes--;
    }
    if (timerMinutes === -1) {
        timerMinutes = 59;
        timerHours--;
    }

    document.getElementById("timer-hour").innerHTML = addTrailingZero(timerHours);
    document.getElementById("timer-min").innerHTML = addTrailingZero(timerMinutes);
    document.getElementById("timer-sec").innerHTML = addTrailingZero(timerSeconds);
    document.getElementById("timer-ms").innerHTML = addTrailingZero(timerMiliseconds);

    timeUp();
};

const startTimer = () => {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0 && timerMiliseconds === 0) {
        getTime();
    } else {
        timerInterval = setInterval(timer, 10);
        document.querySelector(".start-timer").style.display = "none";
        document.querySelector(".stop-timer").style.display = "block";
    }
};

const stopTimer = () => {
    clearInterval(timerInterval);
    document.querySelector(".start-timer").style.display = "block";
    document.querySelector(".stop-timer").style.display = "none";
};

const resetTimer = () => {
    stopTimer();
    timerTime = 0;
    setTimer();
};

const timeUp = () => {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0 && timerMiliseconds === 0) {
        resetTimer();
        alert("Time's Up");
    }
};

document.querySelector(".start-timer").addEventListener("click", startTimer);
document.querySelector(".stop-timer").addEventListener("click", stopTimer);
document.querySelector(".reset-timer").addEventListener("click", resetTimer);
