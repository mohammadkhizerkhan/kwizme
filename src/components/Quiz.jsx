import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuestion, useQuizs } from "../context";
import { db } from "../firebase/config";
import {
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const colName = sessionStorage.getItem("colName");
  const {
    state: { currentQue },
    dispatch,
  } = useQuestion();
  const [questions, setQuestions] = useState([]);
  const [seconds, setSeconds] = useState(5);
  const [answer, setAnswer] = useState("");

  const nextQuestionHandler = () => {
    setSeconds(5);
    if (currentQue < 5) {
      dispatch({
        type: "NEXT",
        payload: { question: questions[currentQue].question, answer },
      });
    }
    if (currentQue == 4) {
      dispatch({
        type: "RESET",
      });
    }
    setAnswer("");
  };

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

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
      if (seconds === 1) {
        nextQuestionHandler();
        if (currentQue + 1 === questions.length) {
          navigate("/result");
        }
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  return (
    <>
      <div className="flex justify-between mt-6 mb-6">
        <span>
          Question:{currentQue + 1}/{questions?.length}
        </span>
        <span>Score:0</span>
        <span>{seconds} sec</span>
      </div>
      <div className="flex flex-col w-full max-w-xl mx-auto">
        <h3 className="text-3xl">{questions[currentQue]?.question}</h3>
        <div className="mt-4 flex-col text-center">
          {questions[currentQue]?.answers.map((item, i) => {
            return (
              <li
                htmlFor={i}
                onClick={() => setAnswer(item.answer)}
                className={`block cursor-pointer list-none bg-selected p-2 rounded mt-2 text-2xl ${
                  answer === item.answer && "bg-grey"
                } hover:bg-grey`}
              >
                {item.answer}
              </li>
            );
          })}
        </div>
        <div className="flex">
          <button className="py-2 px-4 mt-4 mr-3 bg-red text-1xl text_color rounded-lg self-start">
            Quit
          </button>
          {questions?.length === currentQue + 1 ? (
            <button
              className="py-2 px-4 mt-4 bg-primary text-1xl text_color rounded-lg self-start"
              onClick={() => {
                nextQuestionHandler();
                navigate("/result");
              }}
            >
              Result
            </button>
          ) : (
            <button
              className="py-2 px-4 mt-4 bg-primary text-1xl text_color rounded-lg self-start"
              onClick={() => nextQuestionHandler()}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export { Quiz };
