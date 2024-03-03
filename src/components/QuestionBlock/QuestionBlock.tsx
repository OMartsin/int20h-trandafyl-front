import React, { useState } from "react";
import styles from "./QuestionBlock.module.css";

interface QuestionBlockProps {
  questions: { question: string; options: string[] }[];
  onAnswerSelected: (questionIndex: number, answer: string) => void;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({
  questions,
  onAnswerSelected,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const handleAnswerSelected = (questionIndex: number, answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
    onAnswerSelected(questionIndex, answer);
  };

  return (
    <div className={styles.container}>
      {questions.map((questionObj, index) => (
        <div key={index}>
          <p className={styles.question}>{questionObj.question}</p>
          <div className={styles.answers}>
            {questionObj.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleAnswerSelected(index, option)}
                  className={styles.radio}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionBlock;
