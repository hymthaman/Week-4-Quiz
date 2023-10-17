
var timeleft = 90;
var timer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = "The quiz will end in " + timeleft + " Seconds";
    if (timeleft <= 0) {
        clearInterval(timer);
        showScores();
    }

}, 1000ms);
function codeQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
codeQuiz.prototype.getIndex = function () {
    return this.questions[this.questionIndex];
}
codeQuiz.prototype.gameOver = function () {
    return this.questions.length === this.questionIndex;
}

codeQuiz.prototype.guess = function (answer) {
    if (this.getIndex().correctAnswer(answer)) {
        this.score++;
        alert("Correct");
    }

    else {
        alert("Incorrect");
        this.score--;
        timeleft -= 10;
    }

    this.questionIndex++;
}
function jsQuestion(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
questions.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}
function populate() {
    if (quiz.gameOver()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.questionIndexuestionIndex().text;

        var choices = quiz.questionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("button" + i, choices[i]);
        }
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}
function showCurrentScore() {
    var currentScore = quiz.score;
    var element = document.getElementById("playerScore");
    console.log(currentScore);
}
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
function myFunction() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
    var gameOver = "<h1>Result</h1>";
    gameOver += "<h2 id = 'score'> Your score is " + quiz.score + " out of 10!, " + name + "!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
    clearInterval(timer);
    document.getElementById("countdowntimer").innerHTML = "<h1>Game Over</h1>";
    showCurrentScore();
    document.addEventListener('DOMContentLoaded', () => {
        var elements = []
        var container = document.querySelector('#container')
        container.querySelectorAll('.row').forEach(el => elements.push(el))
        container.innerHTML = ''
        elements.sort((a, b) => b.querySelector('quiz.score').textContent - a.querySelector('quiz.score').textContent)
        elements.forEach(e => container.appendChild(e))
        var result = name + scores;
    });

var questions = {
    id:0,{
        question:"What is the technical name for the hashtag symbol?",
        answers:[
        {"Pound Sign",correct:false},
        {"Hashtag", correect:false},
        {"Octothorpe",correct:true},
        {"Pound Sign", correct:false},  ]
        }
    }
questions: 
        id:1,{
        questions: "What is the largest Aquatic Mammal in the world?",
        answers: [ 
        {text: "cow", correct: true}, 
        {text: "dog", correct: false}, 
        {text: "horse", correct: false}

        ]
        },
        id:2,{
        questions: "What is the National Animal of Scotland?",
        answers: [ 
        {text: "Unicorn", correct: true}, 
        {text: "dog", correct: false}, 
        {text: "horse", correct: false}
        {text: "Dog", correct: false} ]
        }

        [ ,
        id:3,{
        questions: "What is the Largest known Living Organism?",
        answers: [ 
        {text: "Aspen Grove Tree System", correct: true}, 
        {text: "Whale", correct: false}, 
        {text: "horse", correct: false}
        {text: "Dog", correct: false}]
        }

        ],
        id:4,{
        questions: "What idoes M&M Stand For?",
        answers: [ 
        {text: "Mmm Mmm, Good", correct: false}, 
        {text: "Money and Mud", correct: false}, 
        {text: "Mickie and Minnie", correct: false}
        {text: "Mars and Mars", correct: false}]
        },

        id:5,{
        questions: "How Far Away Can A Blue Whales Heartbeat Be Heard?",
        answers: [ 
        {text: "2 Miles", correct: true}, 
        {text: "800 Feet", correct: false}, 
        {text: "One Quarter Mile", correct: false}
 {text: "It Cant Be Heard", correct: false}]
 }

var quiz = new codeQuiz(questions);

populate();