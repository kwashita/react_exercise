import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import store from './store'


// import App from './App';
import AppRedux from './AppRedux';



const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <AppRedux/>
    </Provider>
); 