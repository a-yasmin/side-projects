import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import PlayQuiz from "./pages/PlayQuiz";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-quiz" element={<CreateQuiz />} />
      <Route path="/play-quiz" element={<PlayQuiz />} />
      <Route path="/play-quiz/:quizId" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
