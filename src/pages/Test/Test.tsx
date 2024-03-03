import React, { useState } from "react";
import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import styles from "./Test.module.css";
import NextButton from "../../components/NextButton/NextButton";
import PrevButton from "../../components/PreviousButton/PrevButton";
import Result from "./Result";

const Test: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [currentLevel, setCurrentLevel] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelected = (
    questionIndex: number,
    pointsString: string
  ) => {
    const points = parseInt(pointsString.match(/\d+/)?.[0] || "0", 10);
    const questionKey = `question_${currentLevel}_${questionIndex}`;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionKey]: points,
    }));
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  const calculateTotalPoints = () => {
    return Object.values(answers).reduce((sum, points) => sum + points, 0);
  };

  const handleRetake = () => {
    setShowResult(false);
    setCurrentLevel(0);
    setAnswers({});
  };

  const surveyLevels = [
    "Новачок (Novice)",
    "Твердий початківець (Advanced beginner)",
    "Компетентний (Competent)",
    "Досвідчений (Proficient)",
    "Експерт (Expert)",
  ];

  const surveyQuestions = [
    [
      {
        question: "Переживаєте за успіх в роботі?",
        options: ["сильно(5)", "не дуже(3)", "спокійний(2)"],
      },
      {
        question: "Прагнете досягти швидко результату?",
        options: ["поступово(2)", "якомога швидше(3)", "дуже(5)"],
      },
      {
        question: "Легко попадаєте в тупик при проблемах в роботі?",
        options: ["неодмінно(5)", "поступово(3)", "зрідка(2)"],
      },
      {
        question: "Чи потрібен чіткий алгоритм для вирішення задач?",
        options: ["так(5)", "в окремих випадках(3)", "не потрібен(2)"],
      },
    ],
    [
      {
        question: "Чи використовуєте власний досвід при вирішенні задач?",
        options: ["зрідка(5)", "частково(3)", "ні(2)"],
      },
      {
        question: "Чи користуєтесь фіксованими правилами  для вирішення задач?",
        options: ["так(2)", "в окремих випадках(3)", "не потрібні(5)"],
      },
      {
        question: "Чи відчуваєте ви загальний контекст вирішення задачі?",
        options: ["так(2)", "частково(3)", "в окремих випадках(5)"],
      },
    ],
    [
      {
        question: "Чи можете ви побудувати модель вирішуваної задачі?",
        options: ["так(5)", "не повністю(3)", "в окремих випадках(2)"],
      },
      {
        question: "Чи вистачає вам ініціативи при вирішенні задач?",
        options: ["так(5)", "зрідка(3)", "потрібне натхнення(2)"],
      },
      {
        question: "Чи можете вирішувати проблеми, з якими ще не стикались?",
        options: ["так(2)", "в окремих випадках(3)", "ні(5)"],
      },
    ],
    [
      {
        question: "Чи  необхідний вам весь контекст задачі?",
        options: ["так(5)", "в окремих деталях(3)", "в загальному(2)"],
      },
      {
        question: "Чи переглядаєте ви свої наміри до вирішення задачі?",
        options: ["так(5)", "зрідка(3)", "коли є потреба(2)"],
      },
      {
        question: "Чи здатні  ви  навчатись у інших?",
        options: ["так(5)", "зрідка(3)", "коли є потреба(2)"],
      },
    ],
    [
      {
        question: "Чи обираєте ви нові методи своєї роботи?",
        options: ["так(5)", "вибірково(3)", "вистачає досвіду(2)"],
      },
      {
        question: "Чи допомагає власна інтуїція при вирішенні задач?",
        options: ["так(5)", "частково(3)", "при емоційному напруженні(2)"],
      },
      {
        question: "Чи застосовуєте рішення задач за аналогією?",
        options: ["часто(5)", "зрідка(3)", "тільки власний варіант(2)"],
      },
    ],
  ];

  const totalQuestions = surveyQuestions.reduce(
    (sum, levelQuestions) => sum + levelQuestions.length,
    0
  );

  const handleSubmit = () => {
    if (Object.keys(answers).length < totalQuestions) {
      alert("ви не відповіли на всі запитання");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.container}>
      {!showResult ? (
        <>
          <h1 className={styles.level}>{surveyLevels[currentLevel]}</h1>
          <QuestionBlock
            questions={surveyQuestions[currentLevel]}
            onAnswerSelected={(questionIndex, points) =>
              handleAnswerSelected(questionIndex, points)
            }
          />
          <div className={styles.buttons}>
            {currentLevel > 0 && (
              <PrevButton
                onClick={() => setCurrentLevel((prevLevel) => prevLevel - 1)}
              />
            )}
            {currentLevel < surveyLevels.length - 1 && (
              <NextButton onClick={handleNextLevel} />
            )}
            {currentLevel === surveyLevels.length - 1 && (
              <button onClick={handleSubmit} className={styles.submitButton}>
                Завершити
              </button>
            )}
          </div>
        </>
      ) : (
        <div className={styles.resultContainer}>
          <Result totalPoints={calculateTotalPoints()} answers={answers} />
          <button className={styles.retakeButton} onClick={handleRetake}>
            Пройти знову
          </button>
        </div>
      )}
    </div>
  );
};
export default Test;
