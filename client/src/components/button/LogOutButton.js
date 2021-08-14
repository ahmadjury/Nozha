// import SignIn from './views/Signin';
import axios from 'axios';
import { navigate } from '@reach/router';

function LogOutButton() {
const formFun = () => {
    axios.get("http://localhost:8000/api/logout")
    .then(res=>{
        console.log(res.data)
        navigate("/")
    }

    )}
    return (
<p>
        <a href="/" onClick ={formFun} >logout</a>
      </p>

    );
  }
  
  export default LogOutButton;
  