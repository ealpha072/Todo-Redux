import React, { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'fontawesome/index'
import './app.css'
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from './App'

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)

