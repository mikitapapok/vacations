import React from "react";
import Title from "../title";
import Viewer from "./viewer";



function ViewerList(props){
    return(
        <div className="viewers-info">
            <Title className={props.className?props.className:'viewers-status'} title={props.title}/>
            {props.viewers.map(e=>{
                return <Viewer viewer={e}/>
            })}

        </div>
    )
}

export default ViewerList;