import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react';
import { FeedbackContext } from "../context/useFeedbackContext";


function FeedbackList(props) {
    const { feedbacks } = useContext(FeedbackContext);
    const listOfFeedback = feedbacks.map(feedback=>(
        <FeedbackItem 
         key={feedback.id}
         text={feedback.text} 
         rating={feedback.rating}
         id={feedback.id} 
         item={feedback}/>
        
    ))
  return (
    <>
      { feedbacks.length === 0 ? 
        <p className="mt-16 text-center">There is currently no feedback</p>
        :
      listOfFeedback }
      
    </>
  )
}

export default FeedbackList
