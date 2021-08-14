import React, { useState } from 'react'
import image from '../components/image/trip.jpg';
const Form = (props) => {
    const { onSubmitProp } = props;
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("")
    const [telephoneNumber, setTelephoneNumber] = useState("")
    const [dateOfReservation, setDateOfReservation] = useState("")
    const [numberOfStudents, setNumberOfStudents] = useState("")
    const resort = props.id
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, city, email,telephoneNumber, dateOfReservation,numberOfStudents,resort});

    }
    return (
        < div style= {{backgroundImage:"url(${image})"}}>
            <h1> Trip Manager </h1>
            <h2>reserve a resort</h2>
            <form onSubmit={onSubmitHandler}>
                
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
                <input  style={{borderRadius:15,fontSize:20}} type="submit" value="Plan Project" />
            </form>
        </div>
    );
};
export default Form;