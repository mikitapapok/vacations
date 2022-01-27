import {combineReducers, configureStore} from "@reduxjs/toolkit";
import daysReducer from "./daysReducer";
import currentDay from "./currentDay";
import vacationsReducer from "./vacationsReducer";

export const rootReducer=combineReducers({
    days: daysReducer,
    currentDay: currentDay,
    vacations: vacationsReducer
})

export const store=configureStore({
    reducer: rootReducer,
})
