
const actionchecker=(store => next => action=>{
    if(action.payload.type==="error"){
        console.log(action.payload.message);
    }
    else   
    next(action);

})
export default actionchecker;