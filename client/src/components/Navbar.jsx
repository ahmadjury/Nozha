import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from '@reach/router';




export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:40,

          // backgroundColor: "lightblue"
        }}>
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            
            >
                <Link to="/"><Tab label="Home" /></Link>
                
            
                <Link to="/login">
                  <Tab label="Sign In/Up" />  
                </Link>
                <Link to="/aboutus ">
                  <Tab label="About" />  
                </Link>
            
                <a href="https://naughty-brattain-00bd53.netlify.app/chats "><Tab label="Chat"/>  </a>
           
                
            </Tabs>
        </Paper>
    </div>
  );
}