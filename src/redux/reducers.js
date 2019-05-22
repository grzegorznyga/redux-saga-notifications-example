import { combineReducers } from "redux";
import notifications from "./modules/notifications";
import counter from "./modules/counter";
import asyncTask from "redux/modules/asyncTask";

export default combineReducers({
  counter,
  notifications,
  asyncTask
});
