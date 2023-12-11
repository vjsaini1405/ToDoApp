import { combineReducers } from "redux";
import todoReducer from './todo/slice';


const rootReducer = combineReducers({
    todoReducer,
})

export default rootReducer;