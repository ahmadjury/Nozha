import React, { useState} from 'react'
import AddProductForm from '../components/AddProductForm'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreateTrip =()=> {
    // const [schoolname, setSchoolName]=useState("");
    // const [city, setCity]=useState("");
    // const [emil, setEmil]=useState("");
    // const [tel, setTel]=useState("");
    // const [date, setDate]=useState("");
    // const [num, setNum]=useState("");
    // const [location,setLocation] =useState ("");
    const [errors, setErrors]=useState("");

    const onSubmitHandler =(name,city, email,telephoneNumber,dateOfReservation,numberOfStudents,resort)=>{
        axios.post('http://localhost:8000/api/trip/new', 
        name,
        city,
        email,
        telephoneNumber,
        dateOfReservation,
        numberOfStudents,
        resort

    )
        .then(res=>navigate("/"))
        .catch(err=>{

            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        
    }


    return (
        <div>
            <AddProductForm  successfulfunction={onSubmitHandler}  />
            {/* <AddProductForm schoolname={schoolname} town={city} emailadd={emil}
             tel={tel} date={date} num={num} errors={errors} successfulfunction={onSubmitHandler} place={location} /> */}
        </div>
    )
}

export default CreateTrip
