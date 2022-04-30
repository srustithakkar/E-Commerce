import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './_helpers/Store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);