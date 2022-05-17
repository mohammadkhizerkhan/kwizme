import { React, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useQuestion, useQuizs } from "../context";

function Result() {
  const colName = sessionStorage.getItem("colName");
  const quizId = sessionStorage.getItem("quizId");
  const { state, dispatch } = useQuestion();

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const docs = await getDocs(
          collection(db, colName, quizId, "questions")
        );
        const tempArr = [];
        docs.forEach((doc) => {
          tempArr.push({ ...doc.data(), id: doc.id });
        });
        setQuestions(tempArr);
      } catch (error) {
        console.error("error in getting docs", error);
      }
    })();
  }, []);
  console.log("selected", state.selectedQuestions);
  console.log("quiz que", questions);

  return (
    <>
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h2 className="text-center text-5xl">RESULTS</h2>
        <div className="text-4xl flex mt-6 mb-6 justify-between">
          <span>Score:0</span>
        </div>
        {questions?.map((item) => {
          return (
            <>
              <h3 className="text-3xl">{item.question}</h3>
              <div className="mt-4 text-center">
                {item.answers.map((ele,i) => (
                  <li
                    htmlFor={i}
                    className={`block cursor-pointer list-none bg-selected p-2 rounded mt-2 text-2xl hover:bg-grey`}
                  >
                    {ele.answer}
                  </li>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Result };
