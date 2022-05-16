import { React, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuestion, useQuizs } from "../context";

function Quiz() {
  const { quizId } = useParams();
  const { state } = useLocation();
  const { setQuizMetaData, questions } = useQuizs();
  const {
    state: { currentQue },
    dispatch,
  } = useQuestion();

  const nextQuestionHandler=()=>{
    dispatch({type:"NEXT"})
  }

  console.log(questions[currentQue]?.question);

  useEffect(() => {
    setQuizMetaData({ quizId, colName: state.colName });
  }, []);

  return (
    <>
      <div className="flex justify-between mt-6 mb-6">
        <span>
          Question:{currentQue + 1}/{questions.length}
        </span>
        <span>Score:0</span>
      </div>
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h3 className="text-3xl">{questions[currentQue]?.question}</h3>
        <div className="mt-4 text-center">
          {questions[currentQue]?.answers.map((item) => {
            return (
              <li className="list-none bg-selected p-2 rounded mt-2 text-2xl">
                {item.answer}
              </li>
            );
          })}
        </div>
        <div className="flex">
          <button className="py-2 px-4 mt-4 mr-3 bg-red text-1xl text_color rounded-lg self-start">
            Quit
          </button>
          {questions.length === currentQue + 1 ? (
            <button className="py-2 px-4 mt-4 bg-primary text-1xl text_color rounded-lg self-start" onClick={()=>nextQuestionHandler()}>
              Result
            </button>
          ) : (
            <button className="py-2 px-4 mt-4 bg-primary text-1xl text_color rounded-lg self-start" onClick={()=>nextQuestionHandler()}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export { Quiz };
