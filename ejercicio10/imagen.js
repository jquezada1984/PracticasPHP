const questions = [
    {
        question: "Pregunta 1: ¿Cuál es la capital de Francia?",
        correctAnswer: "paris"
    },
    {
        question: "Pregunta 2: ¿Cuál es el río más largo del mundo?",
        correctAnswer: "nile"
    },
    {
        question: "Pregunta 3: ¿Quién pintó la Mona Lisa?",
        correctAnswer: "da-vinci"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
    if (currentQuestion < questions.length) {
        questionContainer.style.display = "block";
        result.style.display = "none";

        const questionText = document.getElementById("question");
        const options = document.querySelectorAll("input[type=radio]");

        questionText.textContent = questions[currentQuestion].question;
        for (let i = 0; i < options.length; i++) {
            options[i].value = questions[currentQuestion].correctAnswer;
        }
    } else {
        // Muestra la puntuación final
        questionContainer.style.display = "none";
        result.style.display = "block";
        scoreDisplay.textContent = score + " de " + questions.length;
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector("input[type=radio]:checked");
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        showQuestion();
    }
}

nextButton.addEventListener("click", checkAnswer);

// Mostrar la primera pregunta al cargar la página
showQuestion();