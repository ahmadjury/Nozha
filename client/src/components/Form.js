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
        < div >
            <h1> Resort Manager </h1>
            <h2>reserve a resort</h2>
            <form onSubmit={onSubmitHandler}>
                
            <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>Name</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>City</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="text" required onChange={(e) => setCity(e.target.value)} value={city} />
                </p>
                <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>Email</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="text" required onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>Tel</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="number" required onChange={(e) => setTelephoneNumber(e.target.value)} value={telephoneNumber} />
                </p>
                <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>Date of reservation</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="date" required onChange={(e) => setDateOfReservation(e.target.value)} value={dateOfReservation} />
                </p>
                <p style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"10px solid  whitesmoke",fontWeight:800}}>
                    <label>Number of student</label>
                    <input style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:0,marginLeft:10,border:"3px solid #E1E1E1",fontWeight:800}} type="number" required onChange={(e) => setNumberOfStudents(e.target.value)} value={numberOfStudents} />
                </p>
                <p >
                    
                </p>
                <input  style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,margin:2,border:"2px solid  #E1E1E1",fontWeight:800}} type="submit" value="Reserve a date" /><br/>
                <input style={{borderRadius:15,fontSize:20,visibility:"hidden"}} type="text"     />
            </form>
        </div>
    );
};
export default Form;