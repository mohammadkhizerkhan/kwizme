import React from "react";
import { Link } from "react-router-dom";

function Rules() {
  const quizId = sessionStorage.getItem("quizId");
  const colName = sessionStorage.getItem("colName");
  return (
    <div className="block w-full max-w-5xl mx-auto mt-8 p-4 border-black border-solid border-2">
      <div className="flex flex-col">
        <h3 className="text-4xl self-center">RULES</h3>
        <ul className="list-disc p-4 text-2xl">
          <li className="my-3">
            There are 5 questions, Each question has 3 option where one of them
            is correct.
          </li>
          <li className="my-3">
            You will have 30 seconds to select an answer for each question.
          </li>
          <li className="my-3">After 30 seconds question will be skipped to next.</li>
          <li className="my-3">
            If you have not selected any answer then question won't be
            considered in result.
          </li>
          <li className="my-3">Each right answer have 10 points.</li>
          <li className="my-3">To win a quiz you should have atleast 60 points.</li>
        </ul>
        <Link to={`quiz/${quizId}`} className="self-center">
          <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
            Play
          </button>
        </Link>
      </div>
    </div>
  );
}

export { Rules };
