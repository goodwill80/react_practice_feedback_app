import { useContext } from 'react';
import Card from "./shared/Card";
import { FeedbackContext } from "../context/useFeedbackContext";


function FeedbackItem(props) {
   
    const { dispatch, editingFeedback } = useContext(FeedbackContext);

    //Delete a feedback from the list
    const handleDelete = ()=>{
        if(window.confirm("Are you sure you want to delete?")) {
            dispatch({ type: "DELETE_FEEDBACK", id: props.id })
        }
    }
  return (
    <Card reverse={true}>
      <div className="bg-pink-500 absolute -translate-y-2 -translate-x-2 p-2 px-3 text-sm rounded-full">{props.rating}</div>
      <div className="bg-yellow-100 text-blue-900 font-bold h-32 rounded-md flex flex-col items-center justify-center p-5">
          <p className="mt-4 text-center">{props.text}</p>
        <div className="w-full flex items-end justify-end">
        <button onClick={handleDelete}>X</button>
        </div>
        <i onClick={()=>editingFeedback(props.item)} className="fa-solid fa-pen-to-square cursor-pointer mt-2"></i>
     </div>
    </Card>
  )
}

export default FeedbackItem;


