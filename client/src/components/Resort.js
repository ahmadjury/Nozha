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
        <div>
              {loaded && trips.map((trip,Idx) => 
              <>
                  <p>{trip.name}</p>
                  <p>{trip.dateOfReservation}</p>
                  <p>{trip.dateOfReservation}</p>
                  </>
              )}
        </div>
    )
}

export default Resort
