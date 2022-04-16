import { v4 as uuidv4 } from 'uuid';


function FeedbackReducer(state, action) {
 switch(action.type) {
     case "LOAD_EXISTING_FEEDBACK":
         return action.item;
     case "ADD_FEEDBACK":
         return [{id: uuidv4(), rating: action.rating, text: action.text}, ...state];
     case "EDIT_FEEDBACK":
         return state.map(feedback=> feedback.id === action.id ? 
                         {...feedback, text: action.text, rating: action.rating} 
                         : feedback);
     case "DELETE_FEEDBACK":
         return state.filter(feedback=> feedback.id !== action.id);
     default:
         return state
 }
}

export default FeedbackReducer;