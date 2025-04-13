import { useNavigate, useLocation } from "react-router-dom";
import { Question } from "../types";

interface UserAnswer {
  id: number;
  selected: string[];
  correct: string[];
}

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as {
    userAnswers: UserAnswer[];
    questions: Question[];
  };

  const userAnswers = state?.userAnswers || [];
  const questions = state?.questions || [];

  if (!userAnswers.length || !questions.length) {
    return (
      <div className="text-center mt-20 text-red-500">
        Invalid result data. Please take the quiz first.
        <br />
        <button
          onClick={() => navigate("/quiz")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Quiz
        </button>
      </div>
    );
  }

  // Calculate score by comparing each answer to the correct one
  const score = userAnswers.filter((userAnswer, index) => {
    const correctAnswer = questions[index].correct;
    // We compare individual words rather than the whole array
    return (
      userAnswer.selected.length === correctAnswer.length &&
      userAnswer.selected.every((word, idx) => word === correctAnswer[idx])
    );
  }).length;

  const message =
    score >= 7
      ? "🎉 Congratulations! You did a great job!"
      : "Better luck next time!";

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Results</h1>
      <p className="text-center text-lg mb-6">
        You scored <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{questions.length}</span>
      </p>

      <div className="space-y-6">
        {questions.map((q, i) => {
          const userAnswer = userAnswers.find((a) => a.id === q.id);
          const isCorrect =
            JSON.stringify(userAnswer?.selected) === JSON.stringify(q.correct);

          return (
            <div key={q.id} className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="mb-2 font-semibold">Q{i + 1}: {q.sentence}</p>

              <p
                className={`mb-1 ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                Your answer: {userAnswer?.selected.join(", ") || "Not answered"}
              </p>

              {!isCorrect && (
                <p className="text-blue-600">
                  Correct answer: {q.correct.join(", ")}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div
        className={`text-center text-2xl font-semibold mb-6 ${
          score >= 7 ? "text-green-600" : "text-orange-500"
        }`}
      >
        {message}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
