import { createContext, useContext, useState, useEffect } from "react";
import {
  demonSlayerDb,
  hunterDb,
  narutoDb,
} from "../firebase/config";
import {
  onSnapshot,
  query,
} from "firebase/firestore";
// import { useAuth } from "./Auth-Context";
const defaultValue = [];

const QuizContext = createContext(defaultValue);

const QuizProvider = ({ children }) => {
  const [quizs, setQuizs] = useState([]);

  



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

 



  return (
    <>
      <QuizContext.Provider value={{quizs}}>{children}</QuizContext.Provider>
    </>
  );
};

const useQuizs = () => useContext(QuizContext);
export { useQuizs, QuizProvider };
