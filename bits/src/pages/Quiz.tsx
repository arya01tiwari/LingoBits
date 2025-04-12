// src/pages/Quiz.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../types";
import Timer from "../components/Timer";
import Sentence from "../components/Sentence";





interface Props {
  question: Question;
  onAnswer: (selected: string[]) => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const Quiz = ({ question, onAnswer, onNext, currentIndex, total }: Props) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  
  const navigate = useNavigate();

  

  
  const handleSelect = (word: string) => {
    if (selectedWords.includes(word)) return;
    if (selectedWords.length < question.blanks) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleUnselect = (index: number) => {
    const newWords = [...selectedWords];
    newWords.splice(index, 1);
    setSelectedWords(newWords);
  };

  const handleNext = () => {
    onAnswer(selectedWords);
    setSelectedWords([]);
    
    if (currentIndex + 1 === total) {
      navigate("/result", {
        state: { finished: true },
      });
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-lg font-semibold">
    Question {currentIndex + 1} of {total}
  </h2>
  <Timer duration={30} onTimeUp={handleNext} />
</div>

<Sentence
  sentence={question.sentence}
  blanks={question.blanks}
  selectedWords={selectedWords}
  onBlankClick={handleUnselect}
/>


      <div className="grid grid-cols-2 gap-3 mb-4">
        {question.options.map((word) => (
          <button
            key={word}
            onClick={() => handleSelect(word)}
            disabled={selectedWords.includes(word)}
            className={`border px-4 py-2 rounded-lg font-medium transition ${
              selectedWords.includes(word)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedWords.length < question.blanks}
        className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
