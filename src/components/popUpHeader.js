import React from "react";
import {useLocation} from "react-router-dom";
import copy from "../style/images/copy.png"
function PopUpHeader(props){
    const location=useLocation();
    return(
        <div className="pop-up-header ">
            <p className="pop-up-header-name">{props.text}</p>
            {location.pathname==='/vacation' && props.text!=='Change request'? <img src={copy} alt="copy"/>:null}
        </div>
    )
}

export default PopUpHeader;