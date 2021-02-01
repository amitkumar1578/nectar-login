import { combineReducers } from "redux";
import log from "./login";
import users from "./dashboard";
export default combineReducers({
    log: log, users: users,
});