import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizImage from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers,setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (<Summary userAnswers={userAnswers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
