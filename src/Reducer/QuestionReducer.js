
const initialState = {
  currentQue: 0,
  selectedQuestions: [],
  score: 0,
};

const QuestionReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
        console.log({
            ...state,
            currentQue: state.currentQue + 1,
            selectedQuestions: [...state.selectedQuestions, action.payload],
          })
      return {
        ...state,
        currentQue: state.currentQue + 1,
        selectedQuestions: [...state.selectedQuestions, action.payload],
      };
    case "RESET":
      return initialState;
  }
};


export {QuestionReducer,initialState}
