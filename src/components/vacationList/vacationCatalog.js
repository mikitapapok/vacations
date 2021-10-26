import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import VacationComponent from "./vacationComponent";
import YearSortedComponent from "./yearSortedComponent";

function VacationCatalog(){

    const vacations=useSelector(state=>state.vacations);
    const years=[...new Set(vacations.map(e=>e.prevDate.split(' ').pop()).sort())]
    const [currentVacations,setCurrentVacations]=useState([]);
    useEffect(()=>{
        setCurrentVacations(vacations)
    },[vacations])
    return(
        <>{years.map(year=>{
            return(<>
                <YearSortedComponent year={year}  />
                <ul className='vacation-catalog' >
                    {currentVacations.filter(e=>e.prevDate.includes(year)).map(e=><VacationComponent key={e.id} vacations={currentVacations} vacation={e} />)}
                </ul>

            </>)

        })}</>

    )





}

export default VacationCatalog;