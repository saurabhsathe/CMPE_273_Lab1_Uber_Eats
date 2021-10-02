import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux"
import store from './app/store'
import './components/userdashboard/user.css'
import './components/userdashboard/side.css'


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    ,document.getElementById('root')

    
    
);


reportWebVitals();
