import * as actionTypes from "../actionTypes"

const initialState ={
    voteSuccess:false,
    voteFail : false,
    err: "",
    
}

export const voteReducer =(
    state = initialState,
    action
) =>{
    switch(action.type){
        case actionTypes.VOTE_SUCCESS:
            return {
                ...state,voteSuccess:true 
            };
        case actionTypes.VOTE_FAIL:
            return {
                ...state,voteFail:true,
                err:"cant vote multiple times"
            };
        case actionTypes.VOTE_RESET:
            return{
                ...state,voteSuccess:false,
                voteFail:false,err:""
            }
        default:
            return state
    }
}