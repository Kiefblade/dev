import {combineReducers} from "redux";
import auth from "./authentication";
// import shop from "./shop";

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
