import React from "react";
import Question from "./question";

function DaysCounter(props){

    return(
        <div className='vacation-form-data-date-picker__component'>
            <div className='days-counter'>
                <span>Day(s)</span>
                <Question />
            </div>

            <p className='days-display'>{props.dateCount>0? props.dateCount: null}</p>
        </div>

    )
}

export default DaysCounter;