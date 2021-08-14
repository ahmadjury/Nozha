import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from "@material-ui/core/styles"
import { Link, navigate } from '@reach/router';


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

  const cards = [1, 2];

  export default function Album() {
    
  const [resort,setResort]= useState([]);
  const classes = useStyles();

  const handleClick =(e,id)=> {
    
    navigate("/newtrip/"+id);
    
  }
  const handleClick2 =(e,id)=> {
    
    navigate("/edittrip/"+id);
    
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/resort/")
        .then(res => setResort(res.data))
        .catch(err=>console.log("ism in the catch front end"))}, [])
  return (


<Container className={classes.cardGrid} maxWidth="md">
          
          <Grid container spacing={4}>
            {resort.map((eachResort,Idx) => (
              <Grid item  xs={12} sm={6} md={4} key={Idx}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {eachResort.name}
                    </Typography>
                    <Typography>
                    {eachResort.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={(e)=>handleClick(e,eachResort._id)} >
                      Reserve
                    </Button>
                  
                    <Button size="small" color="primary"onClick={(e)=>handleClick2(e,eachResort._id)}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        );
}