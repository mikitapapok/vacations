import React, {useEffect} from 'react'
import VacationDataInfo from "./vacationDataInfo";
import {useDispatch, useSelector} from "react-redux";
import {rewriteVacationList, setNewVacation} from "../redux/vacationsReducer";
import {setNewDaysScore} from "../redux/daysReducer";
import PopUpFooter from "./popUpFooter";
import {setNewId} from "../redux/currentDay";
import PopUpHeader from "./popUpHeader";
import {useHistory, useLocation} from "react-router-dom";


function PopUp(props){
    const storage=window.localStorage;
    const dispatch=useDispatch();
    const vacations=useSelector(state=>state.vacations);
    const location=useLocation();
    const history=useHistory();
    let newId=useSelector(state=>state.currentDay.numberOfId)


    const addVacation=()=>{
            if(props.id){

                newId=props.id
            }
        dispatch(setNewId())
         const newVacation={
            id:newId,
             prevDate:new Date(props.localPrevDate).toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}),
             localPrevDate: props.localPrevDate,
             endDate:new Date(props.localEndDate).toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}),
            localEndDate: props.localEndDate,
             daysCount: props.daysCount,
             currentDate:props.currentDate.toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'}),
                kind: props.kind,
             year: new Date(props.localPrevDate).getYear()
            }
            if(location.pathname==='/vacation'){
                dispatch(rewriteVacationList(newVacation));
                history.push('/')
            }else{

                dispatch(setNewVacation(newVacation))
            }

            if(props.kind !=='sick'){
                dispatch(setNewDaysScore(props.daysCount))
            }
        props.isTrigger(false)
    }
    const closePopUp=()=>{
        props.isTrigger(false)
    }

    return(props.trigger)?(
            <div className="pop-up">
                <section className='pop-up-content'>
                    <PopUpHeader text='Request a vacation'/>
                    <section className="pop-up-main">
                        <div className='pop-up-date'>
                        </div>
                        {props.alarm ? <p className="pop-up-alarm">{props.alarm}</p>: null}
                        {props.message? <p className='pop-up-message'>{props.message}</p>:null}
                        <VacationDataInfo kind={props.kind} daysCount={props.daysCount} prevDate={props.localPrevDate} endDate={props.localEndDate}/>

                    </section>

                    <PopUpFooter actionButtonOne={closePopUp}
                                 actionButtonTwo={addVacation}
                                 buttonTextOne={props.buttonTextOne||null}
                                 buttonTextTwo={props.buttonTextTwo||null}
                                   alarm={props.alarm}

                    />

                </section>

            </div>

        ):null;


}
export default PopUp;