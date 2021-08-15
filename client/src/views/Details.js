import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Footer from '../components/Footer'
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from "@material-ui/core/styles"


const Details = (props) => {
    const useStyles = makeStyles((theme) => ({
     cardGrid: {
       paddingTop: theme.spacing(8),
       paddingBottom: theme.spacing(8),
     },
     card: {
       height: '100%',
       display: 'flex',
       flexDirection: 'column',
     },
     cardMedia: {
       paddingTop: '15.25%', // 16:9
       height:30,
     },
     cardContent: {
       flexGrow: 1,
     },
     }));

    const {id} = props;
    const classes = useStyles();
    const [resort, setResort]=useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/resort/'+id)
        .then(res=>{
            setResort(res.data);
            console.log(res.data)
    })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div style={{width:"100%"}}>
        <div style={{width:"100%"}}>
        <CardMedia 
                    className={classes.cardMedia}
                    image={resort.picture}
                    title="Image title"
                />
            {/* <h1 style= {{backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:10,borderRadius:30,margin:30,border:"10px solid  #E10050",fontWeight:800}} >{resort.name}</h1> */}
            <div style= {{width:"100%",backgroundImage:"url(${image})"}} style={{backgroundColor:"whitesmoke",padding:50,borderRadius:30,margin:30,fontWeight:800,display:"flex",justifyContent:"center",fontSize:"2vw"}} >
            {/* <h2>City: {resort.city}</h2>
            <h4>Capacity: {resort.capacity}</h4>
            <h4>{resort.description}</h4>
            <h4>Contact us:</h4>
            <p>Telephone Number: {resort.telephoneNumber}</p>
            <p>Email: {resort.email} </p>
            */}
             <table>
                <tr><td style={{textAlign:"justify",padding:20,color:"#E10050",borderBottom : "3px solid #C4C4C4"}}>Resort  </td><td style={{textAlign:"justify",padding:20,borderBottom:"3px solid #2C98F0"}}>{resort.name}</td></tr>
                <tr><td style={{textAlign:"justify",padding:20,color:"#E10050",borderBottom : "3px solid #C4C4C4"}}>City  </td><td style={{textAlign:"justify",padding:20,borderBottom:"3px solid #2C98F0"}}>{resort.city}</td></tr>
                <tr><td style={{textAlign:"justify",padding:20,color:"#E10050",borderBottom : "3px solid #C4C4C4"}}>capacity  </td><td style={{textAlign:"justify",padding:20,borderBottom:"3px solid #2C98F0"}}>{resort.capacity}</td></tr>
                <tr><td style={{textAlign:"justify",padding:20,color:"#E10050",borderBottom : "3px solid #C4C4C4"}}>Telephone Number  </td><td style={{textAlign:"justify",padding:20,borderBottom:"3px solid #2C98F0"}}>{resort.telephoneNumber}</td></tr>
                <tr><td style={{textAlign:"justify",padding:20,color:"#E10050",borderBottom : "3px solid #C4C4C4"}}>Email </td><td style={{textAlign:"justify",padding:20,borderBottom:"3px solid #2C98F0"}}>{resort.email}</td></tr>
            </table>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Details
