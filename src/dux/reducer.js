import entitiesReducer from "../dux/entities";
import {combineReducers} from "@reduxjs/toolkit";

export default combineReducers({
    entities : entitiesReducer
});
