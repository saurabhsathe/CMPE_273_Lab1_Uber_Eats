import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux"
import {store,persist_store} from './app/store'
import './components/userdashboard/user.css'
import './components/userdashboard/side.css'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
    <PersistGate persistor={persist_store}>
    <App />
    </PersistGate>
    </Provider>
    ,document.getElementById('root')

    
    
);


reportWebVitals();
