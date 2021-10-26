import {createSlice} from '@reduxjs/toolkit'

const daysReducer=createSlice({
    name: 'days',
    initialState: 147,
    reducers:{
        setNewDaysScore(state,action){
          return  state=state-action.payload
        }
    }
},
)
export const {setNewDaysScore}=daysReducer.actions;
export default daysReducer.reducer;