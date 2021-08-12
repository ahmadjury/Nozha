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
          backgroundColor: "lightblue"
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
                <Link to="/about"><Tab label="About" /></Link>
            
                <Link to="/login">
                  <Tab label="Sign In/Up" />  
                </Link>
                
            </Tabs>
        </Paper>
    </div>
  );
}