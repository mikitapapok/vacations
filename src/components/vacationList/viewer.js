import React from "react";
import Title from "../title";

function Viewer(props){
        const avatar='../style/images/viewers/viewer1.png'
    return(
        <div className="viewers">
            <div className={`viewers-avatar viewers__component viewers-avatar-${props.viewer.avatar}`} />
            <div className="viewers-text viewers__component">
                <Title className='viewers-name ' title={props.viewer.name}/>
                {props.viewer.status==='Already approved'?<p className='viewers-name-context'>Comments: Have a nice vacation!</p>:''}

            </div>

        </div>
    )
}
export default Viewer;