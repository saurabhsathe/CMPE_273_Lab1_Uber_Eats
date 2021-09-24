import './App.css';
import './login_page.css'
import Dashboard from './components/dashboard/Dashboard'
import Userdash from './components/userdashboard/Userdash'
import BootCdn from './components/userdashboard/BootCdn'
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Jumbo from './components/dashboard/Jumbo'
import SideBar from './components/userdashboard/SideBar'
import MainLoginForm from './components/login_and_signup/MainLoginForm'
function App() {
  return (
    <BrowserRouter>
    <Main />
    <Navbar />
    
    </BrowserRouter>
  );
}

export default App;
