import "./App.css";
import Logo from "./assets/Logo";
import Quiz from "./components/Quiz";
import QuizCard from "./components/QuizCard";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
        <Logo />
        <QuizCard/>
        <Quiz/>
        <Login/>
    </div>
  );
}

export default App;
