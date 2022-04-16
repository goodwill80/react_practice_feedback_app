import { createContext, useReducer, useState } from 'react';
import FeedbackReducer from './useReducers';
// import { initialFeedback } from './FeedbackData';

const FeedbackContext = createContext();

function FeedbackProvider(props) {
    const [feedbacks, dispatch] = useReducer(FeedbackReducer, []);
  
    const [feedbackEdited, setFeedback] = useState({
        item: {},
        isEditing: false
    })

    const editingFeedback = (item)=>{
        setFeedback({
            item,
            isEditing: true
        })
    }

  return (
    <FeedbackContext.Provider value={{feedbacks, dispatch, editingFeedback, feedbackEdited}}>
        {props.children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackProvider };