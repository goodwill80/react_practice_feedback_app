import { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import FeedbackRating from './FeedbackRating';
import { FeedbackContext } from '../context/useFeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const { dispatch, feedbackEdited } = useContext(FeedbackContext);

   useEffect(()=>{
       if(feedbackEdited.isEditing === true) {
        setBtnDisabled(true);
        setText(feedbackEdited.item.text);
        setRating(feedbackEdited.item.rating)
       }
   }, [feedbackEdited])

  

    const handleChange = (e)=>{
       if(text === '') {
        setBtnDisabled(true);
        setMessage(null);
       } else if(text !== '' && text.trim().length <= 10) {
        setMessage("Text must be at least 10 characters");
        setBtnDisabled(true);
       } else {
        setBtnDisabled(false);
        setMessage(null);
       }
       setText(e.target.value);
    }

    const finishedInput = ()=> {
        setText('');
        setBtnDisabled(true);
        setMessage('');
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length > 10 && rating > 0) {
            if(feedbackEdited.isEditing) {
                dispatch({type:"EDIT_FEEDBACK", 
                            id: feedbackEdited.item.id, 
                          text: text, 
                        rating: rating
                        });
            feedbackEdited.isEditing = false;
            finishedInput();
            } else {
                dispatch({type:"ADD_FEEDBACK", rating: rating, text: text});
                finishedInput();
            }
        } else {
            alert("Please enter text and rating");
        }
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }className="mt-5">
            <h2 className="text-center text-xl">How would you rate your service with us?</h2>
            <FeedbackRating
                select={(rating)=>setRating(rating)}
            />
            <input className="mt-5 p-3 w-80 rounded-md text-blue-900" 
             type="text" 
             placeholder="Enter your feedback" 
             value={text}
             onChange={handleChange} />
            <Button type={"sudmit"} 
                    version={"info ml-2"}
                    disabled={btnDisabled}>Send</Button>
            <div className="p-2 h-5">
            { message && <p>{ message }</p> }
            </div>
           
        </form>
    </div>
  )
}

export default FeedbackForm;
