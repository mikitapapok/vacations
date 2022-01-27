import React from "react";
import illustration from "../../style/images/illustration.png"
import Title from "../title";

function NoResult(){
    return(
        <div className="no-result">
            <img className='no-result-img' src={illustration} alt="no-result"/>
            <p className="no-result-title">No vacation requests yet</p>
            <Title className='no-result-text' title='As soon as you create your first request,
             you can find it here'></Title>
        </div>
    )
}


export default NoResult;