import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store'
import Router from './router/index.jsx'
// import ReactDOM from 'react-dom'

// import App from './App';
// import AppRedux from './AppRedux';
// import AppRouter from './AppRedux';



const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        {/* <Router/> */}
        <Router/>
    </Provider>
); 

// ReactDOM.render(
//     <Router></Router>,
//     document.getElementById("root")
// )