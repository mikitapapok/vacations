import React from "react";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import PopUp from "../popUp";
import Title from "../title";
import {
    vacationMessageTwo,
    alarmMessageOne,
    alarmMessageTwo,
    alarmMessageFour,
    vacationMessageOne,
    alarmMessageThree
} from "../popUpMessages";
import VacationCredentials from "./sidebarComponents/vacationCredentials";
import {useLocation} from "react-router-dom";
import PopUpFooter from "../popUpFooter";
import PopUpHeader from "../popUpHeader";
import VacationInfoComponent from "../vacationList/vacationInfoComponent";


function VacationForm(props){
    const [curDay,setCurDay]=useState(null)
    const holidays = useSelector(state=>state.currentDay.holidays)
    const vacations=useSelector(state=>state.vacations)
    const location=useLocation()

    const [alarmMessage,setAlarmMessage]=useState(null)
    const [vacationMessage,setVacationMessage]=useState(null)
    const [kind, setKind]=useState(props.vacation?props.vacation.kind:'vacation');
    const [isTriggered,setIsTriggered]=useState(false);
    const [dateCount,setDateCount]=useState(props.vacation?props.vacation.daysCount:0);
    const [buttonTextOne,setButtonTextOne] = useState(null);
    const [buttonTextTwo,setButtonTextTwo] = useState(null);
    const[prevDate,setPrevDate]=useState(props.vacation?new Date(props.vacation.localPrevDate):null)
    const [endDate,setEndDate]=useState(props.vacation?new Date(props.vacation.localEndDate):null)
    const [localPrevDate,setLocalPrevDate]=useState(props.vacation?props.vacation.localPrevDate:null)
    const [localEndDate,setLocalEndDate]=useState(props.vacation?props.vacation.localEndDate:null)


     function findMatches(vacationList,firstDate,lastDate){
        return vacationList.filter(vacation=>{
              if(location.pathname==='/'){
                  return   vacation.prevDate === firstDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}) &&
                  vacation.endDate === lastDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'})
              }else{
                  return    vacation.prevDate === firstDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}) &&
                  vacation.endDate === lastDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}) &&
                  vacation.kind === kind
              }
        }).length
    }
    
    const roundToDays=(date)=>Math.floor(date/ (1000 * 60 * 60 * 24)) ;


    useEffect(()=>{
        setCurDay(new Date())
        setDateCount((roundToDays(endDate-prevDate))+1);
        if(!prevDate && !endDate){
            setDateCount(0)
        }
    },[prevDate,endDate,props.open])



    const setKindHandler=(e)=>{
        setKind(e.target.value)
    }

    const dateHandlerStart=(e)=>{
        setPrevDate(new Date(e.target.value))
        setLocalPrevDate(e.target.value)

    }
    const dateHandlerEnd=(e)=>{
            setEndDate(new Date(e.target.value))
            setLocalEndDate(e.target.value)
    }
    const getPopUpProps=(warning,text,buttonTextOne='confirm anyway', buttonTextTwo='change Dates')=>{
        setAlarmMessage(warning)
        setVacationMessage(text)
        setButtonTextOne(buttonTextOne)
        setButtonTextTwo(buttonTextTwo)
    }

    const finalDate=(e)=>{
        const weekPrevDay=prevDate.getDay();
        const weekEndDay=endDate.getDay();
        const dayInfo= prevDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}).split(' ')
        dayInfo.pop()
       const finalDayInfo= dayInfo.join(' ')

        e.preventDefault();
        const daysDifference=-1*(roundToDays(curDay)-roundToDays(prevDate))
        if(findMatches(vacations,prevDate,endDate) ){
            getPopUpProps(alarmMessageThree,null,'Ok, got it',null)
        }else{
        if(daysDifference<=14){

            getPopUpProps(alarmMessageOne,vacationMessageTwo,'Confirm anyway','change dates')
        }else if( (dateCount === 1 || dateCount === 2 )&&( weekPrevDay === 6 || weekPrevDay === 0 || weekEndDay === 6 || weekEndDay === 0)){

            getPopUpProps(alarmMessageTwo,null,)
        }else if(dateCount === 1 && holidays.includes(finalDayInfo)){

            getPopUpProps(alarmMessageTwo,null,)
        }else if(dateCount>14){

            getPopUpProps(alarmMessageFour,null,)
        }else{
            getPopUpProps(null,vacationMessageOne,'cancel','confirm')
        }}
        setIsTriggered(true)
    }


    return(props.open||location.pathname==='/')?(

    <div className={location.pathname==='/'?'vacation-form':'vacation-form vacation-form-vacation'}>
        {location.pathname === '/' ? <div className={
                `vacation-form__component vacation-form-cover vacation-form-cover__${kind}`
            }/> :
            <>
                <PopUpHeader text='Change request'/>
                <VacationInfoComponent vacation={props.vacation}/>
            </>

        }
        <div className='vacation-form-data'>
            <Title className='vacation-form-title' title='New Request'/>
            <VacationCredentials eHandler={setKindHandler} kind={kind} dateHandler={dateHandlerStart}
                                 dateHandlerPlus={dateHandlerEnd} dateCount={dateCount} localPrevDate={localPrevDate} localEndDate={localEndDate} vacation={props.vacation}/>
            {location.pathname === '/' ? <div className='vacation-form-submit'>
                <button onClick={prevDate && endDate ? finalDate : null}>SUBMIT</button>
                <p>Have questions? <span>Read FAQ</span></p>
            </div> : null}
            {isTriggered === true ? <PopUp
                currentDate={curDay}
                trigger={isTriggered}
                message={vacationMessage}
                alarm={alarmMessage}
                isTrigger={setIsTriggered}
                kind={kind}
                buttonTextOne={buttonTextOne}
                buttonTextTwo={buttonTextTwo}
                daysCount={dateCount}
                localPrevDate={localPrevDate}
                localEndDate={localEndDate}
                id={props.vacation?props.vacation.id:null}
            /> : null}
        </div>
        {location.pathname === '/vacation' ? <PopUpFooter buttonOne='cancel' buttonThree='save'
                                                          isOpened={props.isOpened}
                                                          open={props.open}
                                                          finalDate={finalDate}
                                                          setIsOpened={props.isOpened}/> : null}
    </div>

    ):null
}

export default VacationForm;