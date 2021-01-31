import * as actionTypes from "../actionTypes"

const initialState ={
    
    isLoading: true,
    err: "",
    chartData : {}
}

export const barReducer =(
    state = initialState,
    action
) =>{
    switch(action.type){
        case actionTypes.ADD_CHART_DATA:
            return {
                ...state,isLoading:false, chartData:action.payload
            }
        case actionTypes.CHART_LOADING:
            return {
                ...state,isLoading:true , chartData:{}
            }
        case actionTypes.CHART_FAILED:
            return{
                ...state, isLoading:false
            }
        default:
            return state
    }
}