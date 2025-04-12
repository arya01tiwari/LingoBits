import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/quiz" />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
