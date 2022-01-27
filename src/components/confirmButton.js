import React from "react";


function ConfirmButton(props){

    return(
        <button className={'confirm-button '+' '+ props.buttonStyle} onClick={props.action}>{props.title}</button>
    )
}

export default ConfirmButton;