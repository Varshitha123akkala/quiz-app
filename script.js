// Quiz data
const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Which language is used for web development?",
      answers: [
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true },
        { text: "C++", correct: false },
        { text: "Java", correct: false }
      ]
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", correct: true },
        { text: "J.K. Rowling", correct: false },
        { text: "Ernest Hemingway", correct: false },
        { text: "Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the smallest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Mercury", correct: true },
        { text: "Mars", correct: false }
      ]
    },
    // Additional questions
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Indian Ocean", correct: false },
        { text: "Atlantic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What is the largest mammal?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Shark", correct: false }
      ]
    },
    {
      question: "How many continents are there on Earth?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
      ]
    },
    {
      question: "What is the boiling point of water?",
      answers: [
        { text: "90°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
        { text: "120°C", correct: false }
      ]
    }
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startBtn = document.getElementById('start-btn');
  const nextBtn = document.getElementById('next-btn');
  const restartBtn = document.getElementById('restart-btn');
  const questionContainer = document.getElementById('question-screen');
  const resultScreen = document.getElementById('result-screen');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const scoreElement = document.getElementById('score');
  
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add('hide');
    startQuiz();
  });
  
  function startQuiz() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextBtn.classList.add('hide');
    answerButtonsElement.innerHTML = '';
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) score++;
    Array.from(answerButtonsElement.children).forEach(button => {
      button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'wrong');
    });
    if (questions.length > currentQuestionIndex + 1) {
      nextBtn.classList.remove('hide');
    } else {
      showResults();
    }
  }
  
  function showResults() {
    questionContainer.classList.add('hide');
    resultScreen.classList.remove('hide');
    scoreElement.innerText = `${score} out of ${questions.length}`;
  }
  
