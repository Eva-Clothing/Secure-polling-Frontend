import * as actionTypes from "../actionTypes"

const initialState ={
    dateOfPoll: [],
    isLoading: true,
    err: "",
    truePoll: [],
    falsePoll: [],
    
}

export const lineReducer =(
    state = initialState,
    action
) =>{
    switch(action.type){
                  
        case actionTypes.ADD_TRUE_POLL:
            return {
                ...state,isLoading:false,truePoll:action.payload
            };
        
        case actionTypes.ADD_FALSE_POLL:
            return {
                ...state,isLoading:false,falsePoll:action.payload
            }
        case actionTypes.POLL_LOADING:
            return{
                ...state,isLoading:true
            }
        case actionTypes.POLL_FAILED:
            return {
                ...state,isLoading:false , err:"poll can be loaded"
            }
        
        default:
            return state
    }
}