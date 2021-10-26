import React from "react";
import ConfirmButton from "./confirmButton";
import{useLocation,useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

function PopUpFooter(props){
    const history=useHistory();
    const goBack=()=>{
        history.push('/')
        }

    const closeChangeLog=()=>{
        props.setIsOpened(false)
    }

    return(

        <div className="pop-up-footer">
            {props.buttonTextOne?
                <div className="pop-up-footer-button-block">
                    <ConfirmButton action={props.buttonTextOne==='cancel' || !props.buttonTextTwo ?props.actionButtonOne:props.actionButtonTwo}
                                   buttonStyle='pop-up-footer-button-block__component'
                                   title={props.buttonTextOne}/>
                    {props.buttonTextTwo ? <ConfirmButton
                        buttonStyle='confirm-button-blue pop-up-footer-button-block__component'
                        action={props.alarm? props.actionButtonOne: props.actionButtonTwo} title={props.buttonTextTwo}/>:null}
                </div>
                :<div className="pop-up-footer-button-block">
                    {props.buttonOne? <ConfirmButton action={props.buttonOne==='cancel'?closeChangeLog:props.action} buttonStyle='vacation-details-button' title={props.buttonOne}/>:null}
                    {props.buttonTwo?<ConfirmButton buttonStyle='vacation-details-button' title={props.buttonTwo}
                                    action={props.openCangeLog}/>:null}
                    {props.buttonThree?<ConfirmButton action={props.buttonThree==='save'?props.finalDate:goBack} buttonStyle='confirm-button-blue' title={props.buttonThree}/>:null}
                </div>

            }

    </div>
    )
}


export default PopUpFooter;