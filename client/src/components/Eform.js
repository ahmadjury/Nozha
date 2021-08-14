import React, { useState ,useEffect} from 'react'
// import image from '../components/image/trip.jpg';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Eform = (props) => {
    const { onSubmitProp } = props;
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("")
    const [telephoneNumber, setTelephoneNumber] = useState()
    const [capacity, setCapacity] = useState()
    const [description, setDescription] = useState()
    const [picture, setPicture] = useState()
    const id = props.id
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/resort/' + id)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setCity(res.data.city);
                setEmail(res.data.email);
                setTelephoneNumber(res.data.telephoneNumber);
                setCapacity(res.data.capacity);
                setDescription(res.data.description);
                setPicture(res.data.picture)
            })
    }, [id])
    const updateresort = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/resort/edit/' + id, {
            name,
            city,
            email,
            telephoneNumber,
            capacity,
            description,
            picture

        })
            .then(res => navigate("/"));
    }
 

    return (
        < div style= {{backgroundImage:"url(${image})"}}>
            <h1> Resort Manager </h1>
            <h2>Update Resort</h2>
            <form onSubmit={updateresort}>
                
                <p >
                    <label>Name</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}}  type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p >
                    <label>City</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="text" required onChange={(e) => setCity(e.target.value)} value={city} />
                </p>
                <p >
                    <label>Email</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="text" required onChange={(e) => setEmail(e.target.value)} value={email} />
                </p>
                <p >
                    <label>Tel</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="number" required onChange={(e) => setTelephoneNumber(e.target.value)} value={telephoneNumber} />
                </p>
                <p >
                    <label>Capacity</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="number" required onChange={(e) => setCapacity(e.target.value)} value={capacity} />
                </p>
                <p >
                    <label>Description</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="text" required onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <p >
                    <label>Resort Image</label><br />
                    <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:400}} type="text" required onChange={(e) => setPicture(e.target.value)} value={picture} />
                </p>
                <p >
                    <label></label><br />
                    <input style={{borderRadius:15,fontSize:20,visibility:"hidden"}} type="text"     />
                </p>
                <input style={{backgroundColor:"whitesmoke",padding:10,marginRight:20,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:800}} type="submit" value="Update Resort" />
                <Link style={{backgroundColor:"whitesmoke",padding:10,borderRadius:3,border:"3px solid  #2C2C2C",fontWeight:800}} to ={`/resorts/${id}`} >show trips</Link>
            </form>
            
        </div>
    );
};
export default Eform;