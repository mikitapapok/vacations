import React from "react";
import {useHistory} from "react-router-dom";
import VacationInfoComponent from "./vacationInfoComponent";


function VacationComponent(props){
    const storage=window.localStorage;
    const history=useHistory();
    const goToVacationDetails=()=>{
        storage.setItem('id',props.vacation.id)
        history.push('/vacation')

    }
    const componentStyle=props.vacations.indexOf(props.vacation)%2===0 && props.vacations.length>1?'vacation-catalog__component-dark':''
    return(
        <li  onClick={goToVacationDetails} className={`vacation-catalog__component ${componentStyle}`}>
                <VacationInfoComponent vacation={props.vacation} />
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L6 6L1 1" stroke="#AFB7BF" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


        </li>
    )
}
export default VacationComponent;