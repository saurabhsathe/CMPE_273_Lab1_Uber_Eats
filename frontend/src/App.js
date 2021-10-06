import './App.css';

import './login_page.css'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { CookiesProvider } from "react-cookie";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CookiesProvider>
        <BrowserRouter>
        <CartProvider>
            <Main />

        
        </CartProvider>
        </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
