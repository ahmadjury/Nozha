import React,{ useState,useEffect} from 'react';
import axios from 'axios';

const Resort = (props) => {
    const[trips,setTrips]=useState([]);
    const[loaded,setLoaded]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/restrips/'+props.id )
        .then(res=>{
            setTrips(res.data.trips)
            setLoaded(true);
        })
    },[props.id])
    return (
        <div style={{display:"flex",justifyContent:"center",color:"white",marginBottom:80,backgroundColor:"white"}}>
            <div style={{ width:"40%"}}>
              {loaded && trips.map((trip,Idx) => 
              <div style={{backgroundColor:"whitesmoke",padding:10,borderRadius:30,margin:30,border:"10px solid  #E10050",fontWeight:800}}>
                  <p style={{color:"#2C98F0"}}>School: {trip.name}</p>
                  <p style={{color:"gray",fontWeight:500}}>Reservation Date: {trip.dateOfReservation}</p>
                  <p style={{color:"black",fontWeight:500}}>Students attending: {trip.numberOfStudents}</p>
                  <p style={{color:"#E10050",fontWeight:500}}>Status: {trip.status}</p>
                  </div>
              )}
        </div>
        </div>
    )
}

export default Resort
