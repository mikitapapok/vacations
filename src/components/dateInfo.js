import React from "react";
import {useLocation} from "react-router-dom";



function   DateInfo(props){
    const location=useLocation()
    const dayInfo=props.kind==='vacation'?`(${props.daysCount} days)`:'';
    const timeBegin=props.kind==='own' && location.pathname==='/vacation'?'(11:00 - 14:00)':'';
    const timeEnd= props.kind==='own'  && location.pathname==='/vacation'?'(09:00 - 12:00)':'';
    const ownStyle=useLocation().pathname==='/vacation'?'date-info-own':''
    return(
        <div className={'date-info '+' '+ props.style}>
            {props.text && props.daysCount?<p className={`date-info-dates ${ownStyle}`}>{`${props.text} ${props.start}${timeBegin} - ${props.end}${timeEnd} ${dayInfo}`}</p>:
                <p className='date-info-dates'>{`${props.start} - ${props.end} `}</p>
            }
        </div>
    )
}

export default DateInfo;