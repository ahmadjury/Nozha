import Cookies from 'js-cookie'
import React, {useState } from 'react';
import SignIn from './Signin';
import axios from 'axios';
import { navigate } from '@reach/router';

const LoginContainer = () => {

    const [errors, setErrors] = useState([])
    const [task, setTask] = useState()
    

    const formFun = (task) => {
        axios.post("http://localhost:8000/api/login", task)
        .then(res=>{
            Cookies.set("resorttoken" , res.data.resort._id)
            console.log(Cookies.get("resorttoken"))
            setTask(res.data);
            navigate("/show")


    }) 
        .catch(err=>{   
            console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    return (
        <div>
            <SignIn  label3="email"  label8="password" formFun={formFun} error={errors} buttonValue="Add"></SignIn>
        </div>
    )
}

export default LoginContainer