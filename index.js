const readlineSync = require("readline-sync");

const log = console.log.bind(console);

const userName = readlineSync.question("What is your name? ");

log("");
log("Welcome " + userName);
log("");

let score = 0;

const leaderBoard = [
    {
        name: "Bilal",
        score: 3
    },
    {
        name: "Jon Snow",
        score: 2
    },
    {
        name: "Joey",
        score: 1
    }
]

const questions = [
    {
        question: "What is my full name ",
        options: [
            "Bilal Mansuri",
            "Mohammad Bilal",
            "Md Bilal Mansuri",
            "Bilal Mohammad Mansuri"
        ],
        correctAnswer: "md bilal mansuri"
    },
    {
        question: "Which brand's phone do I use? ",
        options: [
            "OnePlus",
            "Samsung",
            "Oppo",
            "Sony"],
        correctAnswer: "oneplus"
    },
    {
        question: "Where I am from? ",
        options: [
            "Indore",
            "Delhi",
            "Mumbai",
            "Noida"],
        correctAnswer: "indore"
    }
]
function viewLeaderBoard() {
    log("");
    log("LeaderBoard")
    leaderBoard.forEach((item, index) => {
        log(`Rank ${index + 1} : ${item.name} - Score:${item.score}`);
    })
}
function play(currentQuestionIndex, userAnswerIndex) {
    log("");

    if (questions[currentQuestionIndex]
        .options[userAnswerIndex].toLowerCase()
        ===
        questions[currentQuestionIndex].correctAnswer) {
        log("Correct Answer, Well Done");
        score++;
    }
    else {
        log("Wrong Answer");
    }

    log("");
    log("Current Score: ", score)
    log("");

    log("---------");
    log("");
}

function game() {
    log("")
    for (let i = 0; i < questions.length; i++) {

        log(questions[i].question);
        log("");

        const userAnswerIndex = readlineSync.keyInSelect(questions[i].options, "Select Option", { cancel: false });

        play(i, userAnswerIndex);
    }
    viewLeaderBoard();
    log("");

    for (let i = 0; i < leaderBoard.length; i++) {
        const item = leaderBoard[i];
        if (score > item.score) {
            log("")
            log(`Congratulations You have beaten ${item.name}'s score`)
            log("Please contact admin to update the leaderboard");
            log("");
            break;
        }
    }

}

log("Would you like to play the game or view the leaderboard");
log("");
const playOrView = readlineSync.question("Type G for game and L for leaderboard: ");

if (playOrView.toLowerCase() === "g") {
    game();
} else {
    viewLeaderBoard();
}