import React from 'react'

import VacationTypeAvatar from "./vacationTypeAvatar";
import DateInfo from "./dateInfo";



function VacationDataInfo(props){

    const start=new Date(props.prevDate).toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'})
    const end=new Date(props.endDate).toLocaleDateString('en-GB',{day: 'numeric', month: 'short', year: 'numeric'})

    return(
            <div className="vacation-info">
                <VacationTypeAvatar kind={props.kind}/>
                <DateInfo start={start} end={end}/>
                <p className='vacation-info-counter'> ({props.daysCount} days)</p>
            </div>
    )
}

export default VacationDataInfo;