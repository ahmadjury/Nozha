import React, {useState } from 'react';
import SignUp from './SignUp';
import axios from 'axios';
import { navigate } from '@reach/router';

const Container = () => {

    const [errors, setErrors] = useState([])
    const [task, setTask] = useState([])

    const formFunction = (task) => {
        console.log("i am i the hpost method")
        axios.post("http://localhost:8000/api/register", task)
        .then(res=>{
            console.log(res.data)
            setTask(res.data);
            navigate("/Signin")


    }) 
        .catch(err=>{
            console.log(err.response.data.errors)
                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message)
                // }
                // // Set Errors
                // setErrors(errorArr);
            })

    }

    return (
        <div>
             {/* <h1>SignUp</h1> */}
            <SignUp label1="name"  label2="city" label3="email" label4="telephoneNumber" label5="password" label6="capacity" label7="description" label8="confirmPassword" formFun={formFunction} error={errors} buttonValue="Add" />
        </div>
    )
}

export default Container