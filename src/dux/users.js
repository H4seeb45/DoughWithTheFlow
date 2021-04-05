import {createSlice} from "@reduxjs/toolkit";
let lastId=0;
const slice = createSlice({
                name:"Users",
                initialState:[],
                reducers:{
                    //actions:keys
                    //events:eventshandlers
                    userAdded: (users=[], action) => {
                        let actpayload = action.payload;
                        users.push({
                            id:++lastId,
                            Name: actpayload.name,
                            banned: false,
                            createdBy: actpayload.createdBy,
                            role: actpayload.userRole
                        });
                    }
                }
 });
 export const {userAdded} = slice.actions;
 export default slice.reducer;