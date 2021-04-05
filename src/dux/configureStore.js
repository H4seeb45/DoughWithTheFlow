import reducer from "./reducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import actionchecker from "./middleware/actionchecker"

export default function(){
    return configureStore({
        reducer,
        middleware:[
            ...getDefaultMiddleware(),
            actionchecker
        ]
    });
}