import React, { createContext, useContext, useReducer, useState } from "react";
import { initialState, QuestionReducer} from "../Reducer/QuestionReducer";

const QuestionContext = createContext([]);

const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuestionReducer, initialState);
  // const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <QuestionContext.Provider value={{ state, dispatch, modal, setModal }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export {useQuestion, QuestionProvider };
