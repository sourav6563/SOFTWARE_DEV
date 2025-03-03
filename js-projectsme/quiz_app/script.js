const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Tech Modern Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
  },
  {
    question: "Which programming language is used for web development?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
      { text: "Swift", correct: false },
    ],
  },
  {
    question: "What is the main function of CSS?",
    answers: [
      { text: "To add interactivity to a webpage", correct: false },
      { text: "To define the structure of a webpage", correct: false },
      { text: "To style and layout a webpage", correct: true },
      { text: "To store data in a database", correct: false },
    ],
  },
  {
    question: "Which company developed the React library?",
    answers: [
      { text: "Google", correct: false },
      { text: "Facebook (Meta)", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  Score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none"; // Hide the button at start
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none"; // Hide Next button
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    Score++; // Increase score for correct answer
  } else {
    selectedButton.classList.add("incorrect");
  }

  // Disable all buttons after selection
  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Show correct answer
    }
  });

  nextButton.style.display = "block"; // Show Next button
}

