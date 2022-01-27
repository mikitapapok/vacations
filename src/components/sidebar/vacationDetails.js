import React, {useEffect, useState} from "react";
import PopUpHeader from "../popUpHeader";
import PopUpFooter from "../popUpFooter";
import {useDispatch, useSelector} from "react-redux";
import VacationInfoComponent from "../vacationList/vacationInfoComponent";
import ViewerList from "../vacationList/viewerList";
import {useHistory} from "react-router-dom";
import {deleteVacation} from "../../redux/vacationsReducer";
import VacationForm from "./vacationForm";



function VacationDetails(){
    const [isOpened,setIsOpened]=useState(false)
    const dispatch=useDispatch();
    const storage=window.localStorage;
    const history=useHistory();
    const vacations=useSelector(state=>state.vacations)
    const viewers=useSelector(state=>state.currentDay.viewers)
    const currentId=storage.getItem('id')

    const vacation = vacations.filter(element=>element.id==currentId)[0];
    let viewersApproved=viewers.filter(e=>e.status.includes('Already approved'))
    let viewersCurrent=viewers.filter(e=>e.status.includes('Current approver(s)'))
    let viewersNext=viewers.filter(e=>e.status.includes('Next approver(s)'))
    let viewersFinal=viewers.filter(e=>e.status.includes('Documents registration (final step)'))
    let viewersSick=viewers.filter(e=>e.status.includes('Notified users'))



    const deleteOneVacation=()=>{
        dispatch(deleteVacation(vacation.id))
        history.push('/')

    }
    const openChangeLog=()=>{

        setIsOpened(true)
    }


    return (
        <div className="vacation-page">
            <div className="vacation-details">
                <PopUpHeader text={vacation.kind==='vacation'?'Request for vacation':vacation.kind==='sick'?'Sick leave request':'Request for leave at own expense'}/>

                <VacationInfoComponent vacation={vacation} />

                <div className="vacation-details-review">
                    {vacation.kind === 'sick' ?
                        <>
                            <ViewerList className='viewers-status__first' title='viewersSick' viewers={viewersSick}/>

                        </>
                        :
                        <>
                            <ViewerList className='viewers-status__first' title='Already approved' viewers={viewersApproved}/>
                            <ViewerList title='Current approver(s)' viewers={viewersCurrent}/>
                            <ViewerList title='Next approver(s)' viewers={viewersNext}/>

                        </>


                    }
                    <ViewerList title='Documents registration (final step)' viewers={viewersFinal}/>
                </div>
                <PopUpFooter id={vacation.id} action={deleteOneVacation} openCangeLog={openChangeLog}
                             buttonOne={vacation.kind==='sick'?'cancel request':vacation.kind==='own'?'decline request':''}
                             buttonTwo='change' buttonThree='close' vacation={vacation}/>

            </div>

            {isOpened===true?<VacationForm open={isOpened} isOpened={setIsOpened}  vacation={vacation}/>:null}
        </div>

    )
}


export default VacationDetails;