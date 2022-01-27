import React from "react";
import {useSelector} from "react-redux";


function YearSortedComponent(props) {


    return (
        <div className='vacation-years-sort'>
            <p>{props.year} Year</p>
        </div>
    )

}
export default YearSortedComponent;