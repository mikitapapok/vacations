import React from "react";
import {useLocation} from "react-router-dom";
import VacationTypeAvatar from "../vacationTypeAvatar";
import DateInfo from "../dateInfo";


function VacationInfoComponent(props){
    const location=useLocation();
    return(
    <div className="vacation-details-info">
        <VacationTypeAvatar kind={props.vacation.kind}/>
        <div className="vacation-catalog__component-info">
            <DateInfo style='vacation-catalog__component-info-dates' start={props.vacation.prevDate} end={props.vacation.endDate} daysCount={props.vacation.daysCount}
                      text={props.vacation.kind==='sick'?'Sick leave:':props.vacation.kind==='own'?'Own expense leave:':'Vacation:'}
                      kind={props.vacation.kind} />
            <p className="vacation-catalog__component-info-origin-info">{`Created: ${props.vacation.currentDate}`}</p>
            {location.pathname==="/vacation" && props.vacation.kind==='own'?
                <p className="vacation-catalog__component-info-origin-info">
                Reason: Reason type</p>:null}
            {location.pathname==="/"?
                <p className="vacation-catalog__component-info-origin-approval">{props.vacation.kind === 'vacation' ? 'Approved' : 'Approved and registered'}</p>:
                <p className="vacation-catalog__component-info-origin-view">Pending confirmation</p>}
        </div>
    </div>

    )
}

export default VacationInfoComponent;