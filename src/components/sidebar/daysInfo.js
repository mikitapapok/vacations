import React from 'react'
import more from '../../style/images/more.png'
import {useSelector} from "react-redux";
import Title from "../title";

function DaysInfo(){
    const days=useSelector(state=>state.days)
    return(
        <div className='side-info'>
            <div className='side-info-block'>
                <Title className='side-info-title side-info__component' title='Vacation Days'/>
                <div className='side-info__component side-info-text'>
                    <p >Available</p>
                    <span>{days}</span>
                </div>

            </div>
            <div className='side-info__component side-info-details'>
                <img className='side-info-details__img' src={more} alt=""/>
                <p className='side-info-details__text'>more details</p>
            </div>
        </div>
    )
}
export default DaysInfo;