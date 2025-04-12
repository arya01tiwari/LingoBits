// pages/QuizPage.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./Quiz";
import { Question } from "../types";

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/questions");
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (selected: string[]) => {
    const currentQuestion = questions[currentIndex];
    setUserAnswers((prev) => [
      ...prev,
      {
        id: currentQuestion.id,
        selected,
        correct: currentQuestion.correct,
      },
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      navigate("/result", {
        state: {
          questions,
          userAnswers,
        },
      });
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <Quiz
      question={questions[currentIndex]}
      onAnswer={handleAnswer}
      onNext={handleNext}
      currentIndex={currentIndex}
      total={questions.length}
    />
  );
};

export default QuizPage;
