import React from "react";
import { Link } from "react-router-dom";
import { useQuizs } from "../context/QuizContext";

function QuizCard() {
  const { quizs } = useQuizs();

  return (
    <div className="flex flex-row flex-wrap justify-around gap-4 my-16 mx-24 sm:mx-5 md:mx-14">
      {quizs.map((quiz) => {
        return (
          <div class="bg-white rounded-lg shadow-lg w-96">
            <div className="h-64">
              <Link state={{colName:quiz.colName}} to={`quiz/${quiz.id}`}>
                <img
                  src={quiz.image}
                  alt="quiz image"
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
              <button class="animate-bounce inline-block py-2 px-4 bg-primary text-2xl text_color rounded-lg">
                Play
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuizCard;
