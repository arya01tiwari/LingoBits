import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";
import { Question } from "../types";

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL; // ✅ Fallback here

    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/questions`);
        const data = await response.json();
        console.log("Fetched questions:", data);
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
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

  if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;

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
