import { createContext, useReducer, useState, useEffect } from 'react';
import FeedbackReducer from './useReducers';
// import { initialFeedback } from './FeedbackData';

const FeedbackContext = createContext();

function FeedbackProvider(props) {
    const [feedbacks, dispatch] = useReducer(FeedbackReducer, []);


    //Call API to fetch exisitng Feedbacks
    useEffect(()=>{
        fetchFeedback();
    }, []);

    //Fetch Feedback from json-server
    const fetchFeedback =  async ()=>{
       const response = await fetch("/feedback?_sort=id&_order=desc");
       const data = await response.json();
       dispatch({type: 'LOAD_EXISTING_FEEDBACK', item: data});
    }
    

    //Global State for editing feedback. To store new edited feedback
    const [feedbackEdited, setFeedback] = useState({
        item: {},
        isEditing: false
    })

    //change global state for editing feedback
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