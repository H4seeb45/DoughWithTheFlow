import {combineReducers} from "@reduxjs/toolkit"
import todosReducer from "../dux/todos";
import usersReducer from "../dux/users";

export default combineReducers({
    todos : todosReducer,
    users : usersReducer
});