import React from 'react'
import Title from "../title";
import NoResult from "./noResult";

import {useSelector} from "react-redux";
import VacationCatalog from "./vacationCatalog";

function VacationList(){
    const vacations=useSelector(state=>state.vacations)

    return(
        <section className='vacation-list'>
            <Title className='vacation-list-title vacation-list__component' title='My Leave Requests' />
            {!vacations.length?<NoResult/>:<VacationCatalog />
            }
        </section>
    )
}


export default VacationList;
