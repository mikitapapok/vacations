import React from 'react'


function Datepicker(props){

    return(
        <div className='vacation-form-data-date-picker__component'>
            <label htmlFor={props.datePickerName}>{props.datePickerLabel}<span>(inclusive)</span></label>
            <input type="date" id={props.datePickerName}  onChange={props.dateHandler}
                   value={props.localDate?props.localDate:null} />
        </div>
    )
}



export default Datepicker;