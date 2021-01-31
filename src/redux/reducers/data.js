import * as actionTypes from "../actionTypes"

const initialState ={
    isLoading: true,
    err: "",
    pollData : [],
  
}

export const dataReducer =(
    state = initialState,
    action
) =>{
    switch(action.type){
        
        case actionTypes.ADD_DATA:
            return {
                ...state,isLoading:false, pollData: action.payload
            }
        case actionTypes.DATA_LOADING:
            return {
                ...state,isLoading:true,pollData:[]
            };
        
        case actionTypes.DATA_FAILED:
            return {
                ...state,isLoading:false, err:action.payload
            };
           
        default:
            return state
    }
}