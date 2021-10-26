import React from "react";
import VacationSelect from "./vacationSelect";
import WarningMessage from "./warningMessage";
import Datepicker from "./datepicker";
import DaysCounter from "./daysCounter";
import VacationFormComment from "./vacationFormCommens";


function VacationCredentials(props){
            return(
                <>
                    {props.vacation?<VacationSelect  eHandler={props.eHandler} kind={props.vacation.kind}/>:<VacationSelect  eHandler={props.eHandler} />}

                            { props.kind==='sick'?<WarningMessage/>:null}
                            <div className='vacation-form-data-date-picker'>
                                {props.vacation?
                                    <>
                                        <Datepicker  dateHandler={props.dateHandler} localDate={props.localPrevDate} datePickerName='prev-date' datePickerLabel='Start Date' />
                                        <Datepicker  dateHandler={props.dateHandlerPlus} localDate={props.localEndDate} datePickerName='second-date'
                                                     datePickerLabel ={props.kind === 'sick'?'Expected End Date':'End Date'}/>
                                    </>
                                    :
                                    <>
                                    <Datepicker  dateHandler={props.dateHandler}  datePickerName='prev-date' datePickerLabel='Start Date' />
                                    <Datepicker  dateHandler={props.dateHandlerPlus}  datePickerName='second-date'
                                    datePickerLabel ={props.kind === 'sick'?'Expected End Date':'End Date'}/>
                                    </>

                                }

                                {props.kind==='vacation'?<DaysCounter  dateCount={props.dateCount}/>:''}

                            </div>


                    <VacationFormComment />
                </>
            )
}



export default VacationCredentials;