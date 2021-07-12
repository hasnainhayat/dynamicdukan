const initialState={
    role:"user",
}
const loginReducer=(state=initialState,action)=>{
 
    switch(action.type){
        case "login":
            return{
                ...state,
                role:action.payload.role
           }
        
        default:
            return state;
        };
    }
    export default loginReducer;