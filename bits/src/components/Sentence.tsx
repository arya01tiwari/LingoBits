interface SentenceProps {
    sentence: string;
    blanks: number;
    selectedWords: string[];
    onBlankClick: (index: number) => void;
  }
  
  const Sentence: React.FC<SentenceProps> = ({
    sentence,
    blanks,
    selectedWords,
    onBlankClick,
  }) => {
    const parts = sentence.split("___");
  
    return (
      <p className="text-xl mb-6 leading-relaxed text-center">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < blanks && (
              <button
                onClick={() => onBlankClick(i)}
                className="inline-block mx-1 px-2 py-1 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition"
              >
                {selectedWords[i] || "_____"}
              </button>
            )}
          </span>
        ))}
      </p>
    );
  };
  
  export default Sentence;
  