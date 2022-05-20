import "./App.css";
import Logo from "./assets/Logo";
import { Routes, Route, Link } from "react-router-dom";
import { Login, Result, SignUp, SignOut, LeaderBoard } from "./Pages";
import { PrivateRoute } from "./PrivateRoute";
import { QuizCard, Quiz, AuthRoute, Navbar, Modal } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth, useQuestion } from "./context";
function App() {
  const { modal, setModal } = useQuestion();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <div className="w-full mx-auto bg-gray-200 rounded-xl shadow border p-8 flex-col items-center">
        <div className="flex flex-col fixed inset-0">{modal && <Modal />}</div>
        <Navbar />
        <Routes>
          <Route path="/" element={<QuizCard />} />
          <Route element={<AuthRoute />}>
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
    </>
  );
}

export default App;
