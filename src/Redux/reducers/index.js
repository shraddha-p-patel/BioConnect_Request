import { combineReducers } from "redux";
import addInputReducer from "./requestReducer";

const rootReducer = combineReducers({
  addInput: addInputReducer,  
});

export default rootReducer;
