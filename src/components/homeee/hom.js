import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignUp.css';
import img from './bck.jpg';

import { Button ,Typography} from '@mui/material';

export default function LoginSignUp ()  {
  return (
    <div className='container' >
      
      <Typography variant='h2' color={"primary"} >
       Weather App
      </Typography>
      <img className='bck' src={img} ></img>
      <p>Please login or sign up to access the weather app</p>
      <Button className='login' variant="contained" color="primary" style={{ marginRight: 70 }}><Link  to={"login"}>Login</Link></Button>
      <Button className='signup' variant="contained" color="secondary" style={{ backgroundColor: '#000000'}}><Link  to={"Register"}>Sign up</Link></Button>
    </div>
  );
}