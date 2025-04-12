// src/pages/Result.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Question } from "../types";

interface UserAnswer {
  id: number;
  selected: string[];
  correct: string[];
}

interface ResultState {
  questions: Question[];
  userAnswers: UserAnswer[];
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultState;

  useEffect(() => {
    if (!state || !state.questions || !state.userAnswers) {
      navigate("/quiz");
    }
  }, [state, navigate]);

  if (!state || !state.questions || !state.userAnswers) return null;

  const { questions, userAnswers } = state;

  const score = userAnswers.reduce((acc, ans) => {
    const isCorrect = ans.selected.join(" ") === ans.correct.join(" ");
    return acc + (isCorrect ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Your Results</h2>
      <p className="text-center text-lg mb-4">Score: {score} / {questions.length}</p>

      {questions.map((q, idx) => {
        const userAns = userAnswers.find((ua) => ua.id === q.id);
        const isCorrect = userAns?.selected.join(" ") === q.correct.join(" ");

        return (
          <div key={q.id} className="mb-4 p-4 border rounded-lg">
            <p className="font-semibold mb-2">{q.sentence}</p>
            <p className="mb-1">
              <span className="font-medium">Your answer:</span> {userAns?.selected.join(" ") || "-"}
            </p>
            {!isCorrect && (
              <p className="text-red-600">
                <span className="font-medium">Correct answer:</span> {q.correct.join(" ")}
              </p>
            )}
            {isCorrect && <p className="text-green-600 font-medium">✔ Correct</p>}
          </div>
        );
      })}

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Result;
