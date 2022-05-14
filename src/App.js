import "./App.css";
import Logo from "./assets/Logo";
import Quiz from "./components/Quiz";
import QuizCard from "./components/QuizCard";
import Login from "./Pages/Login";
import { Routes, Route, Link } from "react-router-dom";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";
import SignOut from "./Pages/SignOut";
import { PrivateRoute } from "./PrivateRoute";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
      <Logo />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup" className="ml-6">
        <button>Singup</button>
      </Link>
      <Link to="/signout" className="ml-6">
        <button>signout</button>
      </Link>
      <Routes>
        <Route path="/" element={<QuizCard />} />
        <Route element={<AuthRoute/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/signout" element={<SignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
