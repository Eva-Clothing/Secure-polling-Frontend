import * as actionTypes from './actionTypes'
import axios from 'axios'
import {base_url} from '../config'

export const voteSuccess = () =>{
    return {
        type: actionTypes.VOTE_SUCCESS
    }
}

export const voteFail = () => {
    return {
        type : actionTypes.VOTE_FAIL
    }
}

export const reset_form =() =>{
    return {
        type: actionTypes.VOTE_RESET
    }
}
export const makeVote = (formData) => (dispatch) => {
    
    axios.post(base_url + "vote",formData)
    .then((res) =>{
        console.log("succ")
        dispatch(voteSuccess())
    })
    .catch((err)=>{
        dispatch(voteFail())
    })    
}

export const addData = (data) =>{
    return {
        type :actionTypes.ADD_DATA,
        payload: data
    }
}

export const dataLoading = () => {
    return {
        type : actionTypes.DATA_LOADING
    }
}

export const dataFailed = (err) => {
   return {
       type: actionTypes.DATA_FAILED,
       payload: err
   }
}

export const fetchData =  () => (dispatch) =>{
    dispatch(dataLoading())

    return fetch(base_url + "data")
    .then((res)=>{
        return res.json()})
    .then((data)=>{
        dispatch(addData(data.data))
    })
    .catch((err)=>{
        
        dispatch(dataFailed(err))
        })

}

export const pollLoading = ()=>{
    return {
        type: actionTypes.POLL_LOADING
    }
}

export const pollFailed = ()=>{
    return {
        type : actionTypes.POLL_FAILED
    }
}

export const addTruePoll = (data) => {
    return {
        type: actionTypes.ADD_TRUE_POLL,
        payload: data
    }
}

export const addFalsePoll = (data) => {
    return {
        type : actionTypes.ADD_FALSE_POLL,
        payload: data
    }
}

export const fetchTruePolls = () =>(dispatch) =>{
    dispatch(pollLoading())

    return fetch(base_url + "countT?voting_choice=true")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        dispatch(addTruePoll(data.data))
    })
    .catch((err)=>{
        dispatch(pollFailed())
    })
}

export const fetchFalsePolls = () =>(dispatch) =>{
    dispatch(pollLoading())

    return fetch(base_url + "countF?voting_choice=false")
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        dispatch(addFalsePoll(data.data))
    })
    .catch((err)=>{
        dispatch(pollFailed())
    })
}

export const chartLoading = () =>{
    return {
        type: actionTypes.CHART_LOADING
    }
}

export const chartFailed = () =>{
    return {
        type : actionTypes.CHART_FAILED
    }
}

export const addChart = (data) => {
    return {
        type: actionTypes.ADD_CHART_DATA,
        payload: data
    }
}

export const fetchChart = () => (dispatch) =>{
    dispatch(chartLoading())

    return fetch(base_url + "result")
    .then((res)=>{
        return res.json()
    })
    .then((data) =>{
        dispatch(addChart(data.data))
    })
    .catch((err)=>{
        dispatch(chartFailed())
    })
}
