import {createSlice} from '@reduxjs/toolkit'

var storage=window.localStorage;
const vacationReducer=createSlice({
        name:'vacations',
        initialState:storage.getItem("vacations")?JSON.parse(storage.getItem('vacations')):[],
    reducers:{
            setNewVacation(state,action){
                const newState=[...state,action.payload]
                storage.setItem("vacations",JSON.stringify(newState))
               return newState
            },
            deleteVacation(state,action){
                    const newState=state.filter(e=>e.id!==action.payload)
                    storage.setItem("vacations",JSON.stringify(newState))
                return newState
            },
            rewriteVacationList(state,action){
                 state=state.filter(e=>e.id!==action.payload.id)
                 storage.setItem("vacations",JSON.stringify([...state,action.payload]))
                return state=[...state,action.payload]
            }

    }

    })
export const {setNewVacation,deleteVacation,rewriteVacationList}=vacationReducer.actions;
export default vacationReducer.reducer