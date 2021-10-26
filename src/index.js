import React from 'react'
import './style/style.scss';
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {store} from "./redux/rootReducer";
import App from "./App";


const root=document.getElementById('root')

render(    <Provider store={store}>
    <App />
</Provider>,root)