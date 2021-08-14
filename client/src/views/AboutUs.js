import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import image from '../components/image/trip.jpg';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${image})`,
        width: '100%',
        height: '45vh',
        backgroundPosition: 'left 100px bottom -90px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <>
        
        
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3"> Nozha </Typography>
                <Typography variant="h5" className={classes.text}>
                    NOZHA is a platform that contains all entertainment/cultural places that schools would arrange tours to.
                     We have 3 kinds of users: Admin, Facility, School. School User is authorized to view all facilities on our site,
                     and request a reservation by specifying the date and number of students.
                      Facility User is authorized to add a facility, review schools’ request and accept or decline them.
                       When the facility accept the school’s request it will send them an email which contains an offer letter to
                    agree on different terms. 
                    
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default About;