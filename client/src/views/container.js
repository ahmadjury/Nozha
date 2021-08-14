import React, {useState } from 'react';
import SignUp from './SignUp';
import axios from 'axios';
import { navigate } from '@reach/router';

const Container = () => {

    
    return (
        <div>
             {/* <h1>SignUp</h1> */}
            <SignUp  />
        </div>
    )
}

export default Container