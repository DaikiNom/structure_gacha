import { useState } from 'react'
import { polymerQuestions } from './questions'
import './App.css'

function App() {
  const questions = polymerQuestions;
  // hookを使って状態管理
  const [rand, setRand] = useState(questions[Math.floor(Math.random() * questions.length)]);
  const [isAnswer, setIsAnswer] = useState(false);

  const handleChangeQuestion = () => {
    setIsAnswer(false);
    // 新しいランダムな問題を選ぶ
    const newQuestion = questions[Math.floor(Math.random() * questions.length)];
    setRand(newQuestion);

    // 新しい回答画像をプリロードする
    const img = new Image();
    img.src = newQuestion.answer;
  };

  return (
    <>
      <div className="App">
        <div className="card">
          {
            isAnswer ? (
              // 答え
              <div className="answer">
                <img src={rand.answer} alt={rand.question} className='ansImg' />
                <p>{rand.explanation}</p>
              </div>
            ) : (
              // 問題
              <p className='question'>{rand.question}の構造式は?</p>
            )
          }
        </div>
      </div>
      {
        isAnswer ? (
          <button className='change' onClick={() => handleChangeQuestion()}>Next Question</button>
        ) : (
          <button className='change' onClick={() => setIsAnswer(true)}>See Answer</button>
        )
      }
    </>
  )
}

export default App
