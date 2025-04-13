interface Props {
  current: number;
  total: number;
}

const ProgressBar: React.FC<Props> = ({ current, total }) => {
  return (
    <div className="w-full flex justify-between items-center mb-6 px-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`flex-1 h-2 mx-1 rounded-full transition-all duration-300 ${
            index < current ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
