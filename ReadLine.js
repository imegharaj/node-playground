const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Whats Your Name > `, answer => {
    console.log(`Name is : ${answer}`);
});

