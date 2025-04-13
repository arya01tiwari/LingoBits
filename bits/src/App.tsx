import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage on first render
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  // Update localStorage when darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-500 bg-gray-100 text-gray-900 dark:bg-[#0f172a] dark:text-gray-100">
        <Router>
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">

          {/* Header with Toggle */}
          <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-[#1e293b] dark:text-white">
            <h1 className="text-xl font-bold">LingoBits</h1>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </header>

          {/* Page Content */}
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </main>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
