import React, {useState} from 'react';
//import Avatar from '@material-ui/core/avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {navigate } from '@reach/router';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },

  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [errors, setErrors] = useState([])
  const [task, setTask] = useState([])

    // const formFunction = (task) => {
    //     console.log("i am i the hpost method")
    //     axios.post("http://localhost:8000/api/register", task)
    //     .then(res=>{
    //         console.log(res.data)
    //         setTask(res.data);
    //         navigate("/Signin")


    // }) 
    //     .catch(err=>{
    //         console.log(err.response.data.errors)
    //             // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //             // const errorArr = []; // Define a temp error array to push the messages in
    //             // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //             //     errorArr.push(errorResponse[key].message)
    //             // }
    //             // // Set Errors
    //             // setErrors(errorArr);
    //         })

    // }

  // let {label1,label2,label3,label4,label5,label6,label7,label8,formFun ,buttonValue} =props

  const [name, setname] = useState("")
  const [city, setcity] = useState("")
  const [email, setemail] = useState("")
  const [telephoneNumber, settelephonenumber] = useState()
  // const [password, setpassword] = useState("")
  // const [confirmPassword, setconfirmpassword] = useState("")
  const [capacity, setcapacity] = useState()
  const [description, setdescription] = useState("")
  const [picture, setPicture] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/resort/new",
    name,
    city,
    email,
    telephoneNumber,
    capacity,
    description,
    picture)
    .then(res=>navigate("/"))
    .catch(err=>{
    
        const errorResponse = err.response.data.errors; 
        const errorArr = []; 
        for (const key of Object.keys(errorResponse)) { 
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
    })  
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit= {submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField 
                autoComplete="fname"
                label= "Name"
                onChange={e => setname(e.target.value)}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label= "City"
                onChange={e => setcity(e.target.value)}
                required
                fullWidth
                id="City"
                name="City"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= "Email"
                onChange={e => setemail(e.target.value)}
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= "Telephone Number"
                onChange={e => settelephonenumber(e.target.value)}
                required
                fullWidth
                name="Phone no."
                type="Phone no."
                id="Phone no."
                autoComplete="Phone-no."
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= {label5}
                onChange={e => setpassword(e.target.value)}
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid> */}
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= {label8}
                onChange={e => setconfirmpassword(e.target.value)}
                required
                fullWidth
                name="confirmpassword"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= "Capacity"
                onChange={e => setcapacity(e.target.value)}
                required
                fullWidth
                name="capacity"
                type="capacity"
                id="capacity"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= "Description"
                onChange={e => setdescription(e.target.value)}
                required
                fullWidth
                name="description"
                type="description"
                id="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label= "Picture"
                onChange={e => setPicture(e.target.value)}
                required
                fullWidth
                name="picture"
                type="picture"
                id="picture"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {/* <input
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value = "add"
          /> */}
          <button style={{width:100,height:30,borderRadius:15,backgroundColor:"#E10050", borderColor:"#E10050", color:"white",}}>add</button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href ="/Signin" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}

