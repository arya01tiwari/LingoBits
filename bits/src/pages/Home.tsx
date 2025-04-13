import { useNavigate } from "react-router-dom";
import { FaPenFancy, FaCoins } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen p-6 transition-colors duration-300">
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg text-center transition-colors duration-300">
          {/* Top 3 lines and pen icon */}
          <div className="flex flex-col items-center mb-4">
            <div className="space-y-1 mb-2">
              <div className="w-10 h-0.5 bg-gray-400 dark:bg-gray-500" />
              <div className="w-10 h-0.5 bg-gray-400 dark:bg-gray-500" />
              <div className="w-10 h-0.5 bg-gray-400 dark:bg-gray-500" />
            </div>
            <div className="text-3xl text-blue-600 dark:text-blue-400">
              <FaPenFancy />
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2 dark:text-white">Sentence Construction</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Select the correct words to complete the sentence by arranging the provided options in the right order.
          </p>

          {/* Stats: Time | Questions | Coins */}
          <div className="grid grid-cols-3 text-sm text-gray-700 dark:text-gray-300 mb-6 border-t border-b dark:border-gray-600 py-3">
            <div>
              <p className="font-semibold">Time Per Question</p>
              <p>30 sec</p>
            </div>
            <div>
              <p className="font-semibold">Total Questions</p>
              <p>10</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-semibold flex items-center gap-1">
                <FaCoins className="text-yellow-500" /> Coins
              </p>
              <p>0</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              className="px-6 py-2 rounded border border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={() => navigate("/quiz")}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
