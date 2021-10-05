import './App.css';

import './login_page.css'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
        <BrowserRouter>
        
            <Main />

        
        
        </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
