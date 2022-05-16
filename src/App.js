import "./App.css";
import Logo from "./assets/Logo";
import { Routes, Route, Link } from "react-router-dom";
import {Login,Result,SignUp,SignOut} from "./Pages"
import { PrivateRoute } from "./PrivateRoute";
import { QuizCard,Quiz,AuthRoute } from "./components";


function App() {
  return (
    <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
      <Logo />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup" className="ml-6">
        <button>SignUp</button>
      </Link>
      <Link to="/signout" className="ml-6">
        <button>SignOut</button>
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
