// a function that has access to state and action which the two parameters can be used to update the state

import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
  auth: authReducer,
});

export default rootReducer;
