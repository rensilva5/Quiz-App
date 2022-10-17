import { useState } from 'react'

export default function App() {
  const questions = [
    {
      questionText: `what's the capital of England?`,
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: true },
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: `Who's the Tesla's CEO`,
      answerOptions: [
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: `The iPhone was create by which company?`,
      answerOptions: [
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: `How many Harry Potter are there?`,
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false)

  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="app">
      {showScore ? (
          <div className='score-section'>Your score 1 of {questions.length}</div>
      ) : (
          <>
              <div className='question-section'>
                  <div className='question-count'>
                    <span>Question 1</span>/{questions.length}
                  </div>
      <div className='question-test'>{questions[currentQuestion].questionText}</div>
              </div>
                <div className='answer-question'>
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={handleAnswerButtonClick} >{answerOption.answerText}</button>

                  ))}
              </div>
          </>
      )}
    </div>
  );
}