import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react';
import { FeedbackContext } from "../context/useFeedbackContext";
import spinner from "./assets/spinner.gif";


function FeedbackList(props) {
    const { feedbacks, loading } = useContext(FeedbackContext);
    const listOfFeedback = feedbacks.map(feedback=>(
        <FeedbackItem 
         key={feedback.id}
         text={feedback.text} 
         rating={feedback.rating}
         id={feedback.id} 
         item={feedback}/>
        
    ))
    
    const conditionForLoading = loading? <img src={spinner} /> :  listOfFeedback; 

  return (
    <>
      { !loading && (feedbacks.length === 0 || !feedbacks) ? 
        <p className="mt-16 text-center">There is currently no feedback</p>
        :
        conditionForLoading }
      
    </>
  )
}

export default FeedbackList
