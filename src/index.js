import React from 'react';   // in the index page we'll make all the necessary calls for the libraries in this case is BrowserRouter.
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter> 
        <App/>
    </BrowserRouter>
); ///we must wrap the app with the BrowserRouter libraries



