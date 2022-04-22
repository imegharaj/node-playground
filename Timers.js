const timeout = 10000, clearTime = 2000;
let timerCount = 1;

const timer = setTimeout(() => {
    console.log(`Timeout Invoked - ${timerCount}`);
    clearTimeout(clrTimer);
}, timeout)

const clrTimer = setInterval(() => {
    console.log(`Timer Invoked - ${timerCount++}`);
}, clearTime);