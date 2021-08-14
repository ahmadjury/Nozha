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
       paddingTop: '56.25%', // 16:9
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
        <div>
        <div>
        <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80"
                    title="Image title"
                />
            <h1>{resort.name}</h1>
            <h2>City: {resort.city}</h2>
            <h3>Capacity: {resort.capacity}</h3>
            <h4>{resort.description}</h4>
            <h5>Contact us:</h5>
            <p>Telephone Number: {resort.telephoneNumber}</p>
            <p>Email: {resort.email} </p>
        </div>
        <Footer />
        </div>
    )
}

export default Details
