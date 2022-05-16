import { React, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuizs } from "../context/QuizContext";

function Quiz() {
  const { quizId } = useParams();
  const { state } = useLocation();
  const { setQuizMetaData, questions } = useQuizs();

  useEffect(() => {
    setQuizMetaData({ quizId, colName: state.colName });
  }, []);

  return (
    <>
      <div className="flex justify-between mt-6 mb-6">
        <span>Question:1/10</span>
        <span>Score:0</span>
      </div>
      {questions.map((item) => {
        return (
          <div className="flex flex-col w-full max-w-xl mx-auto">
            <h3 className="text-3xl">{item.question}</h3>
            <div className="mt-4 text-center">
              {item.answers.map((ele) => {
                return (
                  <li className="list-none bg-selected p-2 rounded mt-2 text-2xl">
                    {ele.answer}
                  </li>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export {Quiz};
