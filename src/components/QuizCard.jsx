import {useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import { useQuestion, useQuizs } from "../context";

function QuizCard() {
  const { quizs } = useQuizs();
  const navigate = useNavigate();
  const {dispatch}=useQuestion();

  const playHandler=(quizId,colName)=>{
    sessionStorage.setItem("quizId",quizId)
    sessionStorage.setItem("colName",colName)
  }
  useEffect(() => {
    dispatch({
      type:"RESET",
    })
  }, [])
  

  return (
    <div className="flex flex-row flex-wrap justify-around gap-4 my-16 mx-24 sm:mx-5 md:mx-14">
      {quizs.map((quiz) => {
        return (
          <div class="bg-white rounded-lg shadow-lg w-96">
            <div className="h-64">
              <Link to="/rules" onClick={()=>playHandler(quiz.id,quiz.colName)}>
                <img
                  src={quiz.image}
                  alt="quiz"
                  class="rounded-t-lg w-full h-full"
                />
              </Link>
            </div>
            <div class="py-4 px-3">
              <h2 class="font-bold mb-1 text-2xl text-purple-800">
                {quiz.quizName}
              </h2>
              <p class="text-purple-700 mb-4">
                Take this quizz to test yourself{" "}
                <span className="text-xs grey">(5 question)</span>
              </p>
              <Link to="/rules" onClick={()=>playHandler(quiz.id,quiz.colName)}>
              <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
                Play
              </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export {QuizCard};
