import { createContext, useState, useEffect } from 'react';
// import FeedbackReducer from './useReducers';
// import { initialFeedback } from './FeedbackData';

const FeedbackContext = createContext();

function FeedbackProvider(props) {
    // Reducer for Feedbacks
    // const [feedbacks, dispatch] = useReducer(FeedbackReducer, []);

    //Global state for feedbacks
    const [feedbacks, setFeedbacks] = useState([]);
    //Global State for spinner
    const [loading, setLoading] = useState(true);
     //Global State for editing feedback. 
     const [feedbackEdited, setFeedback] = useState({
        item: {},
        isEditing: false
    })

    //Call API from fetch exisitng Feedback function
    useEffect(()=>{
        fetchFeedback();
    }, []);

    //Retrieve exisitng feedbacks
    const fetchFeedback =  async ()=>{
       const response = await fetch("/feedback?_sort=id&_order=desc");
       const data = await response.json();
       setFeedbacks(data);
       setLoading(false);
    }

    //Post new feedback into API
    const addFeedback = async (newFeedback)=>{
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
    
        })
        const data = await response.json();
        setFeedbacks([...feedbacks, data]);
    }

    //delete an existing Feedback 
    const deleteFeedback = async(id)=>{
        await fetch(`/feedback/${id}`, {method: 'DELETE'});
    }

    //change state for editing feedback
    const editingFeedback = (item)=>{
        setFeedback({
            item,
            isEditing: true
        })
    }

  return (
    <FeedbackContext.Provider value={{feedbacks, 
                                      editingFeedback, 
                                      feedbackEdited,
                                      addFeedback,
                                      deleteFeedback,
                                      loading,
                                      setLoading}}>
        {props.children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackProvider };