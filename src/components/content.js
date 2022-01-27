import React from "react";
import {Switch,Route} from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import VacationList from "./vacationList/vacationList";
import VacationDetails from "./sidebar/vacationDetails";


function Content(){

    return(
        <main className='content'>

                <Switch>
                    <Route path='/' exact>
                        <Sidebar />
                        <VacationList />
                    </Route>
                    <Route path='/vacation'>
                        <VacationDetails />
                    </Route>
                </Switch>



        </main>
    )
}

export default Content;