import {createSlice} from "@reduxjs/toolkit";
let localStorage=window.localStorage
const currentDay=createSlice({
    name: 'currentDay',
    initialState:{
        currentDay: 0,
        kind:'',
        holidays:['1 jan','8 mar', '9 may', '3 jul'],
        numberOfId: localStorage.getItem('currentId')?JSON.parse(localStorage.getItem('currentId')):1,
        viewers:[
            {name:'John Smith',id:1,status:'Already approved',avatar:'one'},
            {name:'John Smith',id:2,status:'Already approved',avatar:'one'},
            {name:'Will McConnel',id:3,status:'Current approver(s), Notified users',avatar:'three'},
            {name:'John Smith',id:4,status:'Next approver(s), Notified users',avatar:'four'},
            {name:'Mike Smith',id:5,status:'Next approver(s), Notified users',avatar:'five'},
            {name:'Katrin Brown',id:6,status:'Documents registration (final step)',avatar:'six'}

        ]
    },

    reducers:{
        setCurrentDay(state,action){
            state.currentDay = action.payload
        },

        setDayCount(state,action){
            state.dayCount=action.payload;
        },
        setNewId(state){
            localStorage.setItem('currentId',JSON.stringify(state.numberOfId+1))
            state.numberOfId=state.numberOfId+1;

        }
    }

})

export const{setCurrentDay,setPrevDay,setEndDay,setDayCount,setNewId}=currentDay.actions;
export default currentDay.reducer

