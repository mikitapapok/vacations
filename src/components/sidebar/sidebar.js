import React from "react";
import DaysInfo from "./daysInfo";
import VacationForm from "./vacationForm";

function Sidebar(){
    return(
        <aside>
            <DaysInfo />
            <VacationForm />
        </aside>

    )
}

export default Sidebar;