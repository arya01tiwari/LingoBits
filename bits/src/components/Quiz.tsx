import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { ArrowRight } from "lucide-react";
import Timer from "./Timer";
import { Question } from "../types";

interface Props {
  question: Question;
  onAnswer: (selected: string[]) => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const Quiz: React.FC<Props> = ({ question, onAnswer, onNext, currentIndex, total }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    setSelectedWords([]);
    setTimerKey(prev => prev + 1); // Reset timer for each new question
  }, [question]);

  const handleSelectWord = (word: string) => {
    if (selectedWords.length < question.blanks && !selectedWords.includes(word)) {
      setSelectedWords(prev => [...prev, word]);
    }
  };

  const handleClearSelection = () => {
    setSelectedWords([]);
  };

  const handleNext = () => {
    onAnswer(selectedWords);
    onNext();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="w-full max-w-3xl p-6 border shadow-md rounded-xl bg-white dark:bg-gray-800 dark:border-gray-600">
        {/* Timer and Clear */}
        <div className="flex justify-between items-center mb-4">
          <Timer key={timerKey} duration={30} onTimeUp={handleNext} />
          <button className="text-sm text-gray-600 dark:text-gray-400 border px-3 py-1 rounded" onClick={handleClearSelection}>
            Clear
          </button>
        </div>

        {/* Progress Bar */}
        <ProgressBar current={currentIndex + 1} total={total} />

        {/* Instruction */}
        <p className="text-center text-sm mb-6 text-gray-700 dark:text-gray-300">
          Select the missing words in the correct order
        </p>

        {/* Sentence with filled blanks */}
        <p className="text-lg font-medium mb-6 text-center">
          {question.sentence.split("___").map((part, i) => (
            <span key={i}>
              {part}
              {i < question.blanks && (
                <span className="underline mx-1 text-blue-600 dark:text-blue-400 font-semibold">
                  {selectedWords[i] || "______"}
                </span>
              )}
            </span>
          ))}
        </p>

        {/* Option Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {question.options.map((word, i) => (
            <button
              key={i}
              className={`px-4 py-2 border rounded-full transition text-sm ${
                selectedWords.includes(word)
                  ? "bg-blue-300 dark:bg-blue-500"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
              onClick={() => handleSelectWord(word)}
              disabled={selectedWords.includes(word)}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Next Arrow */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
