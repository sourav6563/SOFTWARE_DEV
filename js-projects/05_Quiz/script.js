document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.querySelector("#quiz-container");
  const questionContainer = document.querySelector("#question-container");
  const questionText = document.querySelector("#question-text");
  const choiceList = document.querySelector("#choices-list");
  const nextButton = document.querySelector("#next-btn");
  const resultContainer = document.querySelector("#result-container");
  const scoreDisplay = document.querySelector("#score");
  const restartButton = document.querySelector("#restart-btn");
  const startButton = document.querySelector("#start-btn");

  const movieQuiz = [
    {
      question: "Which movie won the Oscar for Best Picture in 2020?",
      choices: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
      answer: "Parasite",
    },
    {
      question: "Who played the character Jack Dawson in Titanic?",
      choices: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"],
      answer: "Leonardo DiCaprio",
    },
    {
      question:
        "Which Marvel movie first introduced the character Black Panther?",
      choices: [
        "Avengers: Age of Ultron",
        "Captain America: Civil War",
        "Doctor Strange",
        "Black Panther",
      ],
      answer: "Captain America: Civil War",
    },
    {
      question:
        "Which director is known for the 'Inception' and 'The Dark Knight' movies?",
      choices: [
        "Quentin Tarantino",
        "Christopher Nolan",
        "Steven Spielberg",
        "Martin Scorsese",
      ],
      answer: "Christopher Nolan",
    },
    {
      question: "What is the highest-grossing movie of all time (as of 2024)?",
      choices: [
        "Titanic",
        "Avatar",
        "Avengers: Endgame",
        "The Lion King (2019)",
      ],
      answer: "Avatar",
    },
  ];
  let currentquestionIndex = 0;
  let score = 0;

  // console.log(movieQuiz);

  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    currentquestionIndex++;
    if (currentquestionIndex < movieQuiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  restartButton.addEventListener("click", () => {
    currentquestionIndex = 0;
    score = 0;
    startQuiz()
  });

  function startQuiz(question) {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }
  function showQuestion() {
    nextButton.classList.add("hidden");
    let questionNo = currentquestionIndex + 1
    console.log(questionNo);
    
    questionText.textContent = `${questionNo}. ${ movieQuiz[currentquestionIndex].question}`
    choiceList.innerHTML = ""; //clear previous choices
    movieQuiz[currentquestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice,li));
      choiceList.appendChild(li);
    });
  }
  function selectAnswer(choice,li) {
    const correctAnswer = movieQuiz[currentquestionIndex].answer;
    if (choice === correctAnswer) {
         li.classList.add("correct")
         
      score++;
    }else{
      li.classList.add("incorrect")
    }
   
    nextButton.classList.remove("hidden");
  }
  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${movieQuiz.length}`;
  }
});
