import './App.css';
import Navbar from './components/Navbar';
import  SignUp  from './views/SignUp';
import {Router} from '@reach/router'
import Main from './views/Main';
import SignIn from './views/Signin';
import CreateTrip from './views/CreateTrip';
import AboutUs  from './views/AboutUs'
import  LogoBar  from './components/LogoBar';
import Eform from './components/Eform';
import Resort from './components/Resort';
import Successful from './views/Successful';

function App() {
  return (
    <div className="App">
      <LogoBar/>
      <Navbar />
      <Router >
      <Main path="/" />
      <SignUp  path ="/login"/>
      <SignIn path = "/Signin"/>
      <CreateTrip  path ="/newtrip/:id" />
      <Eform  path ="/edittrip/:id" />
      <AboutUs path="/aboutus"/>
      <Resort path="/resorts/:id"/>
      <Successful path="/success" />
      </Router> 
      
    </div>
  );
}

export default App;
