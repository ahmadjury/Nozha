import './App.css';
import Navbar from './components/Navbar';
import  SignUp  from './views/SignUp';
import {Router} from '@reach/router'
import Main from './views/Main';
import SignIn from './views/Signin';
import CreateTrip from './views/CreateTrip'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router >
      <Main path="/" />
      <SignUp  path ="/login"/>
      <SignIn path = "/Signin"/>
      <CreateTrip  path ="/newtrip" />
      </Router> 
    </div>
  );
}

export default App;
