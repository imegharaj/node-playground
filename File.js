const fs = require('fs');

// Synchronous Reading
console.log("Initiate Reading Files Synchronously");
const syncReadFiles = fs.readdirSync("./assets");
console.log("Completed Reading Files");
console.log(syncReadFiles);

// Asynchronous Reading
console.log("Initiate Reading Files Asynchronously");
const asyncReadFiles = fs.readdir("./assets", (err, files) => {
    if (err) {
        console.log(`An Error Occurred ${err.message}`);
        process.exit();
    }
    console.log("Completed Reading Files");
    console.log(files);
});
console.log("Files Reading Started Asynchronously");

// Reading File Contents Synchronously
const readFile = fs.readFileSync("./assets/data.json", "UTF-8");
console.log("File Content : \n" + readFile);

// Reading Text File Contents Asynchronously
const asyncReadFile = fs.readFile("./assets/data.json", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An Error Occurred ${err.message}`);
        process.exit();
    }
    console.log("Read File Content Asynchronously: \n" + text);
});

// Reading Binary File Contents Asynchronously
const asyncReadImageFile = fs.readFile("./assets/bits.gif", (err, img) => {
    if (err) {
        console.log(`An Error Occurred ${err.message}`);
        process.exit();
    }
    console.log("Image File: \n" + img);
});

// Read File Content Via Streaming
const readFileStream = fs.createReadStream("./assets/lorem-ipsum.txt", "UTF-8");
readFileStream.on("data", (data) => {
   console.log(data);
});

readFileStream.once("data", (data) => {
    console.log(data);
});

// Write File Contents Via Streaming
const writeStream = fs.createWriteStream("./assets/write.txt", "UTF-8");
readFileStream.on("data", data => {
    writeStream.write(data);
})

// Pipe
const writeStream1 = fs.createWriteStream("./assets/write1.txt", "UTF-8");
readFileStream.pipe(writeStream1);




