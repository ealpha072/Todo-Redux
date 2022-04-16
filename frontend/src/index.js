import React, { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import './app.css'

import {store} from './redux/store'
import {Provider} from 'react-redux'

import App from './App'

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)

