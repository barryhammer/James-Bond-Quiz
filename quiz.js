const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'How many different actors have played James Bond in official EON films as of 2023?',
        answers: [
            { text: '5', correct: false},
            { text: '6', correct: true},
            { text: '4', correct: false},
            { text: '7', correct: false}
        ]
    }, 
    {
        question: 'Judi Dench played which character in the James Bond films?',
        answers: [
            { text: 'C', correct: false},
            { text: 'Q', correct: false},
            { text: 'M', correct: true},
            { text: 'R', correct: false}
        ]
    }, 
    {
        question: 'Which henchman did Roger Moore`s James Bond never face off against?',
        answers: [
            { text: 'Jaws', correct: false},
            { text: 'Oddjob', correct: true},
            { text: 'Nicknak', correct: false},
            { text: 'Mayday', correct: false}
        ]
    }, 
    {
        question: 'The first official James Bond film, Dr. No, was released when?',
        answers: [
            { text: '1961', correct: false},
            { text: '1962', correct: true},
            { text: '1963', correct: false},
            { text: '1964', correct: false}
        ]
    }, 
    {
        question: 'Famke Jansen played which henchman in Goldeneye?',
        answers: [
            { text: 'Bambi', correct: false},
            { text: 'Thumper', correct: false},
            { text: 'Domino Dervall', correct: false},
            { text: 'Xenia Onatopp', correct: true}
        ]
    }, 
    {
        question: 'Which singer played a cameo in a James Bond film?',
        answers: [
            { text: 'Madonna', correct: true},
            { text: 'Sheena Easton', correct: false},
            { text: 'Miley Cyrus', correct: false},
            { text: 'Tina Turner', correct: false}
        ]
    }, 
    {
        question: 'In Casino Royale, how much money is at stake in the poker game?',
        answers: [
            { text: '$100 million', correct: false},
            { text: '$150 million', correct: true},
            { text: '$250 million', correct: false},
            { text: '$500 million', correct: false}
        ]
    }, 
    {
        question: 'Which of these actors did NOT play Felix Leiter?',
        answers: [
            { text: 'Jack Lord', correct: false},
            { text: 'David Hedison', correct: false},
            { text: 'Rik Van Nutter', correct: false},
            { text: 'Andrew Scott', correct: true}
        ]
    }, 
    {
        question: 'Which film featured the vehicle also known as `Wet Nellie`?',
        answers: [
            { text: 'Thunderball', correct: false},
            { text: 'Moonraker', correct: false},
            { text: 'The Spy Who Loved Me', correct: true},
            { text: 'Spectre', correct: false}
        ]
    }, 
    {
        question: 'Name an actor who did NOT play Ernst Stavro Blofeld?',
        answers: [
            { text: 'Jan Werich', correct: true},
            { text: 'Donald Pleasence', correct: false},
            { text: 'Terry Savalas', correct: false},
            { text: 'Christoph Waltz', correct: false}
        ]
    }, 
    {
        question: 'What was Desmond Llewelyn`s final film as Q?',
        answers: [
            { text: 'Casino Royale', correct: false},
            { text: 'Die Another Day', correct: false},
            { text: 'Tomorrow Never Dies', correct: false},
            { text: 'The World Is Not Enough', correct: true}
        ]
    }, 
    {
        question: 'What is James Bond`s rank?',
        answers: [
            { text: 'Lieutenant Commander', correct: false},
            { text: 'Captain', correct: false},
            { text: 'Commander', correct: true},
            { text: 'Commodore', correct: false}
        ]
    }, 
    {
        question: 'Which Bond Girl played a different major role in two different films?',
        answers: [
            { text: 'Eunece Gayson', correct: false},
            { text: 'Lois Maxwell', correct: false},
            { text: 'Maud Adams', correct: true},
            { text: 'Jill St. John', correct: false}
        ]
    }, 
    {
        question: 'Which gun does James Bond use since Dr. No?',
        answers: [
            { text: 'Baretta', correct: false},
            { text: 'Walther PPK', correct: true},
            { text: 'Walther P99', correct: false},
            { text: 'Tokarev TT33', correct: false}
        ]
    }, 
    {
        question: 'In which city is the nerve gas produced in the film Moonraker?',
        answers: [
            { text: 'Venice', correct: true},
            { text: 'Rome', correct: false},
            { text: 'Tuscany', correct: false},
            { text: 'Amsterdam', correct: false}
        ]
    }, 
    {
        question: 'Jaws is the henchman of which leader?',
        answers: [
            { text: 'Francisco Scaramanga', correct: false},
            { text: 'Ernst Stavro Bloveld', correct: false},
            { text: 'Hugo Drax', correct: true},
            { text: 'Max Zorin', correct: false}
        ]
    }, 
    {
        question: 'Which of these men are NOT former MI6 agents?',
        answers: [
            { text: 'Le Chiffre', correct: true},
            { text: 'Alex Trevelyan', correct: false},
            { text: 'Raoul Silva', correct: false},
            { text: 'C', correct: false}
        ]
    }, 
    {
        question: 'In which James Bond film did Denise Richards star?',
        answers: [
            { text: 'Goldeneye', correct: false},
            { text: 'Tomorrow Never Dies', correct: false},
            { text: 'The World Is Not Enough', correct: true},
            { text: 'Die Another Day', correct: false}
        ]
    }, 
    {
        question: 'In which film was Felix Leiter attacked by sharks?',
        answers: [
            { text: 'Dr. No', correct: false},
            { text: 'Live and Let Die', correct: false},
            { text: 'License To Kill', correct: true},
            { text: 'No Time To Die', correct: false}
        ]
    }, 
    {
        question: 'Who had completed the most official James Bond films?',
        answers: [
            { text: 'Sean Connery', correct: false},
            { text: 'George Lazenby', correct: false},
            { text: 'Roger Moore', correct: true},
            { text: 'Daniel Craig', correct: false}
        ]
    }, 
]