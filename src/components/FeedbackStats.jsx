import { useContext } from 'react';
import { FeedbackContext } from "../context/useFeedbackContext";

function FeedbackStats(props) {
    const { feedbacks } = useContext(FeedbackContext);

    const avgRating = (feedbacks.reduce((state, action)=>{
        return state + action.rating;
    }, 0) / feedbacks.length).toFixed(1);

  return (
    <div className="flex justify-between items-center w-80 mt-10">
        <h4 className="btn-success p-2 text-white rounded-md w-36 text-center">
            {feedbacks.length} Reviews</h4>
        <h4 className="btn-info p-2 text-white rounded-md">
            Average Rating: {avgRating > 0 ? avgRating : 0}</h4>
    </div>
  )
}



export default FeedbackStats