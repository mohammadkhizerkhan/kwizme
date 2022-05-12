import "./App.css";
import Logo from "./assets/Logo";
import QuizCard from "./components/QuizCard";

function App() {
  return (
    <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
        <Logo />
        <QuizCard/>
    </div>
  );
}

export default App;
