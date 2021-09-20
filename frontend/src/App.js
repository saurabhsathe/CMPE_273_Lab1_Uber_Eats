import MainLoginForm from './components/login_and_signup/MainLoginForm'
import {selectuser} from './features/user_slice'
import {useSelector} from 'react-redux'
import Success from './components/login_and_signup/Success'
function App() {
  const user = useSelector(selectuser)
  return (

    <div className="App" id="maindiv">
        { user? <Success userdetails={user.username} />  : <MainLoginForm /> }
    </div>
  );
}

export default App;
