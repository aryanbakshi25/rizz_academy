const questions = [
    {
      question: "What's a girls best friend?",
      answers: [
        { text: "Flowers", correct: false },
        { text: "Dogs", correct: true },
        { text: "Diamonds", correct: false },
        { text: "Cookies", correct: false }
      ]
    },
    {
        question: "What do you smell like?",
        answers: [
          { text: "Grandma", correct: false },
          { text: "Your cat/dog", correct: false },
          { text: "Strong mens deodrant", correct: false },
          { text: "Good af", correct: true }
        ]
      },
      {
        question: "What is something you say unironically?",
        answers: [
          { text: "Ur mom", correct: false },
          { text: "Slay", correct: false },
          { text: "NPC", correct: false },
          { text: "W rizz", correct: true }
        ]
      },
      {
        question: "How often are you online?",
        answers: [
          { text: "I hate social media", correct: false },
          { text: "When I get free time", correct: true },
          { text: "Never", correct: false },
          { text: "Chronically online", correct: false }
        ]
      },
      {
        question: "How do you approach someone you are interested in?",
        answers: [
          { text: "Run away!!", correct: false },
          { text: "Stare at them", correct: false },
          { text: "Make cringe jokes", correct: false },
          { text: "Be confident and introduce yourself", correct: true }
        ]
      },
      {
        question: "What does a person need to have W rizz?",
        answers: [
          { text: "Money", correct: false },
          { text: "Be tall", correct: false },
          { text: "Good humor", correct: true },
          { text: "Self-love", correct: true }
        ]
      },
      {
        question: "You got rejected. What do you do?",
        answers: [
          { text: "Get on the floor and beg", correct: false },
          { text: "Cry", correct: false },
          { text: "Stalk them", correct: false },
          { text: "Accept it and move on", correct: true }
        ]
      },
      {
        question: "What can ruin someones rizz?",
        answers: [
          { text: "Being broke", correct: false },
          { text: "Ugliness", correct: false },
          { text: "Bad style", correct: false },
          { text: "Nervousness", correct: true }
        ]
      },
      {
        question: "Rate yourself 1-4.",
        answers: [
          { text: "3", correct: false },
          { text: "2", correct: false },
          { text: "1", correct: false },
          { text: "4", correct: true }
        ]
      },
      {
        question: "How would you feel if the test told you that you got L rizz?",
        answers: [
          { text: "Numb. I let my pickup history speak for me.", correct: false },
          { text: "Sad. I'm tired of getting the L.", correct: false },
          { text: "Fine. I'm not here for your approval", correct: true },
          { text: "Mad. I don't deserve it.", correct: false }
        ]
      },
  ];
   const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
   let currentQuestionIndex = 0;
  let score = 0;
   function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    showQuestion();
  }
   function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
     while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
     currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-button");
      button.addEventListener("click", () => {
        checkAnswer(answer.correct);
      });
      answerButtonsElement.appendChild(button);
    });
  }
   function checkAnswer(isCorrect) {
    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
      button.disabled = true;
      if (isCorrect) {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
    });
     if (isCorrect) {
      score++;
    }
     nextButton.style.display = "block";
  }
   function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
   function endQuiz() {
    questionElement.innerText = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
    answerButtonsElement.style.display = "none";
    nextButton.style.display = "none";
  }
   nextButton.addEventListener("click", showNextQuestion);
   startQuiz();
  
 