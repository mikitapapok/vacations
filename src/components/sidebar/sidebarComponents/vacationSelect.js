import React from "react";


function VacationSelect(props){
    return(
        <select className='vacation-form-data-dropdown' name="vacation" id="type-vacation" onChange={props.eHandler} >
            <option value='vacation '  selected={props.kind==='vacation'?'selected':''}  >Vacation</option>
            <option value='sick' selected={props.kind==='sick'?'selected':''}>Sick Leave</option>
            <option value='own' selected={props.kind==='own'?'selected':''}>Own expense leave</option>
        </select>
    )
}
export default VacationSelect;
