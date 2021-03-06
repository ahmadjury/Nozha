import React, { useState} from 'react'
import AddProductForm from '../components/AddProductForm'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const CreateTrip = props => {

    const [errors, setErrors] = useState([]);

    const createProject = (opject) => {
        axios.post('http://localhost:8000/api/trip/new', opject)
            .then(res=>console.log(opject))
            .then(res => navigate('/success'))
            .catch(err => {
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
            <Form onSubmitProp={createProject} id={props.id} />
            {errors.map((err, index) => <p key={index} style={{ color: "red",float:"left" }}>{err}</p>)}<br/>
            <br/>
            <Link style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,fontWeight:800}} to = "/">Back to Dashboard</Link>
        </div>
    );
};
export default CreateTrip;

