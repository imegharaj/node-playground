const questions = [
    "Whats Your Name",
    "Whats Your Phone",
    "Whats Your Email"
]

const ask = (i= 0) => {
    process.stdout.write(questions[i]);
    process.stdout.write(" > ");
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on("exit", () => {
    const [name, phone, email ] = answers;
    console.log(`name: ${name}, Phone: ${phone}, Email: ${email}`);
})




