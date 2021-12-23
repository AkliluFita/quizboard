import { useEffect, useState } from "react";
import AnswerList from "./AnswerList";
import "./App.css";
import { quizData } from "./q&a_data";

function App() {
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  const questionNUm = quizData[questionCount];
  // const [choiceColor, setChoiceColor] = useState("")

  const handleNext = () => {
    if (quizData.length > questionCount + 1) {
      setQuestionCount(questionCount + 1);
    }
  };

  const handleBack = () => {
    if (questionCount > 0) {
      setQuestionCount(questionCount - 1);
    }
  };

  return (
    <div className="App">
      <div className="left">
        <div className="head_container">
          <span className="courter_circle">0</span>
          <h3>
            you have totaly <strong>{quizData.length}</strong> questions
          </h3>
        </div>
        <div className="quiz_container">
          <div className="question">
            <span>Question:{questionNUm?.question_num}</span> <br />
            <h4>{questionNUm?.question_text}</h4>
          </div>
          <div className="choice">
            {questionNUm?.choices.map((choice) => (
              <div className="choiceItem " key={choice.id}>
                <AnswerList
                  choice={choice}
                  questionNUm={questionNUm}
                  setSelectedAnswer={setSelectedAnswer}
                />
              </div>
            ))}
          </div>

          <div className="btn_container">
            <button className="btn" onClick={handleBack}>
              BACK
            </button>
            <button className="btn" onClick={handleNext}>
              NEXT
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right_container"></div>
      </div>
    </div>
  );
}

export default App;
