import { React, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth, useQuestion, useQuizs } from "../context";
import { AddUserScore } from "../services/AddUserScore";

function Result() {
  const colName = sessionStorage.getItem("colName");
  const quizId = sessionStorage.getItem("quizId");
  const { state, dispatch } = useQuestion();
  const { selectedQuestions } = state;
  const [totalScore, setTotalScore] = useState(0);
  const {user}=useAuth();
  const [questions, setQuestions] = useState([]);

  const calculatePoints = () => {
    let total = 0;
    questions?.forEach((question, i) => {
      for (const item of question.answers) {
        if (selectedQuestions[i]?.answer === item.answer && item.isCorrect) {
          total = total + 20;
        }
      }
    });
    AddUserScore(total,user)
    setTotalScore(total);
  };

  
  useEffect(() => {
    calculatePoints();
  }, [questions]);

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

  return (
    <>
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h2 className="text-center text-5xl">RESULTS</h2>
        <div className="text-4xl flex mt-6 mb-6 justify-between">
          {totalScore < 60 ? (
            <span className="text-red">
              Sorry your score is low:{totalScore}
            </span>
          ) : (
            <span className="text-green">Score:{totalScore}</span>
          )}
          {/* <button onClick={()=>AddUserScore(totalScore,user)}>leaderboard</button> */}
        </div>
        {questions?.map((item, i) => {
          return (
            <div className="m-3">
              {selectedQuestions[i].answer === "" ? (
                <h3 className="mb-2 text-2xl">
                  sorry you have not selected any options for <span className="text-red">{item.question}</span>
                </h3>
              ) : (
                <>
                  <h3 className="mb-2 text-2xl">{item.question}</h3>
                  <div className="text-center">
                    {item.answers.map((ele) => (
                      <li
                        className={`block cursor-pointer list-none bg-selected p-2 rounded mt-1 text-2xl ${
                          ele.isCorrect && "bg-green"
                        } ${
                          selectedQuestions[i].answer === ele.answer &&
                          !ele.isCorrect &&
                          "bg-red"
                        }`}
                      >
                        {ele.answer}
                      </li>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Result };
