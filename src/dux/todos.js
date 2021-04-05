import {createSlice} from "@reduxjs/toolkit";
let lastId=0;
const slice = createSlice({
                name:"Todos",
                initialState:[],
                reducers:{
                    //actions:keys
                    //events:eventshandlers
                    todoAdded: (todos=[], action) => {
                        let actpayload = action.payload;
                        todos.push({
                            id:++lastId,
                            description: actpayload.description,
                            resolved: false,
                            createdBy: actpayload.createdBy,
                            assigned: actpayload.assigned
                        });
                    }
                }
 });
 export const {todoAdded} = slice.actions;
 export default slice.reducer;