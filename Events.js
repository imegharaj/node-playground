const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on("terminalEvent", (message, by) => {
    console.log(`Message ${message.toString().trim()} from ${by}`);
})

process.stdin.on("data", (data) => {
    emitter.emit("terminalEvent", data.toString(), "Terminal");

    if (data.toString().trim() === "exit") {
        console.log("Good Bye...")
        process.exit();
    }
});