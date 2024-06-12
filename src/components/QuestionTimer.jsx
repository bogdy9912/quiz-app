import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const ref = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(ref);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const ref = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(ref);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};


export default QuestionTimer;