import { createContext, useContext, useState, useEffect } from "react";
import {
  db,
  demonSlayerDb,
  hunterDb,
  narutoDb,
  auth,
} from "../firebase/config";
import {
  addDoc,
  doc,
  onSnapshot,
  query,
  where,
  collection,
  setDoc,
  getDocs
} from "firebase/firestore";
// import { useAuth } from "./Auth-Context";
const defaultValue = [];

const QuizContext = createContext(defaultValue);

const QuizProvider = ({ children }) => {
  const [quizs, setQuizs] = useState([]);
  const [quizMetaData,setQuizMetaData]=useState({})
  const [questions, setQuestions] = useState([]);



  useEffect(() => {
    const unsub = onSnapshot(query(demonSlayerDb), (querySnapshot) => {
      let tempArr = [];
      querySnapshot.docs.map((doc) => {
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      setQuizs((prev) => [...prev, ...tempArr]);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    const unsub = onSnapshot(query(narutoDb), (querySnapshot) => {
      let tempArr = [];
      querySnapshot.docs.map((doc) => {
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      setQuizs((prev) => [...prev, ...tempArr]);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    const unsub = onSnapshot(query(hunterDb), (querySnapshot) => {
      let tempArr = [];
      querySnapshot.docs.map((doc) => {
        tempArr.push({ ...doc.data(), id: doc.id });
      });
      setQuizs((prev) => [...prev, ...tempArr]);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    (
        ()=>{
          try {
              onSnapshot(
                query(collection(db, quizMetaData.colName, quizMetaData.quizId, "questions")),
                (querySnapshot) => {
                  let tempArr = [];
                  querySnapshot.docs.map((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                  });
                  setQuestions(tempArr);
                }
              );
            } catch (error) {
                console.error("error in gettin demon",error)
            }
        }
    )();
}, [quizMetaData]);



  return (
    <>
      <QuizContext.Provider value={{quizs,quizMetaData,setQuizMetaData,questions}}>{children}</QuizContext.Provider>
    </>
  );
};

const useQuizs = () => useContext(QuizContext);
export { useQuizs, QuizProvider };
