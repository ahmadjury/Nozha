
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles"



const useStyles = makeStyles((theme) => ({

     footer: {
    backgroundColor: "lightblue",
    padding: theme.spacing(6),
  },
}));

export default function Footer(){
    const classes = useStyles();
    return(


<footer className={classes.footer}>
        <Typography>
          Contacts us.|
          Email: Nozha@gmail.com|
          Phone No.: +97459999999|
          Location: Abu Shkaidem, Turn left then right.

        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Copyright 2021 NOZHA
        </Typography>
        
      </footer>
    );
}