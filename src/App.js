import "./App.css";
import Logo from "./assets/Logo";
import Quiz from "./components/Quiz";
import QuizCard from "./components/QuizCard";
import Login from "./Pages/Login";
import {Routes,Route} from "react-router-dom"
import Result  from "./Pages/Result";

function App() {
  return (
    <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
        <Logo />
        <Routes>
          <Route path="/" element={<QuizCard/>}/>
          <Route path="/quiz/:quizId" element={<Quiz/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
    </div>
  );
}

export default App;
