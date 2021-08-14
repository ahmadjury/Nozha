import React, { useState ,useEffect} from 'react'
import image from '../components/image/trip.jpg';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Eform = (props) => {
    const { onSubmitProp } = props;
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("")
    const [telephoneNumber, setTelephoneNumber] = useState()
    const [dateOfReservation, setDateOfReservation] = useState()
    const [numberOfStudents, setNumberOfStudents] = useState()
    const id = props.id
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/resort/' + id)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setCity(res.data.city);
                setEmail(res.data.email);
                setTelephoneNumber(res.data.telephoneNumber);
                setDateOfReservation(res.data.dateOfReservation);
                setNumberOfStudents(res.data.numberOfStudents);
            })
    }, [id])
    const updateresort = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/resort/edit/' + id, {
            name,
            city,
            email,
            telephoneNumber,
            dateOfReservation,
            numberOfStudents

        })
            .then(res => console.log(res));
    }
 

    return (
        < div style= {{backgroundImage:"url(${image})"}}>
            <h1> Trip Manager </h1>
            <h2>Update Resort</h2>
            <form onSubmit={updateresort}>
                
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>Name</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>City</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="text" required onChange={(e) => setCity(e.target.value)} value={city} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>Email</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="text" required onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>Tel</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="number" required onChange={(e) => setTelephoneNumber(e.target.value)} value={telephoneNumber} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>Date of reservation</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="date" required onChange={(e) => setDateOfReservation(e.target.value)} value={dateOfReservation} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label>Number of student</label><br />
                    <input style={{borderRadius:15,fontSize:20}} type="number" required onChange={(e) => setNumberOfStudents(e.target.value)} value={numberOfStudents} />
                </p>
                <p style={{borderRadius:15,fontSize:20}}>
                    <label></label><br />
                    <input style={{borderRadius:15,fontSize:20,visibility:"hidden"}} type="text"     />
                </p>
                <input  style={{borderRadius:15,fontSize:20}} type="submit" value="Update Resort" />
            </form>
            <Link to ={`/resorts/${id}`} >show trips</Link>
        </div>
    );
};
export default Eform;