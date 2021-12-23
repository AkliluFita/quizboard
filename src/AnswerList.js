import React, { useState } from "react";

export default function AnswerList({ choice, questionNUm, setSelectedAnswer }) {
  const handleSelect = () => {
    setSelectedAnswer(
      questionNUm.choices.map((item) => {
        if (item.id === choice.id) {
          return { ...item };
        }

        return item;
      })
    );
  };

  console.log(choice.isCorrect);

  return (
    <div onClick={handleSelect} className={choice.isSelected ? "answer" : ""}>
      {choice.answer}
    </div>
  );
}
