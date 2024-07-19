import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignUp.css';
import img from './bck.jpg';

export default function LoginSignUp ()  {
  return (
    <div className='container' >
      
      <h4 style={{ color: '#2196f3' , width: '300'}}>
        Weather App
      </h4>
      <img className='bck' src={img} />
      <p>Please login or sign up to access the weather app</p>
      <button className='login' style={{ marginRight: 70, backgroundColor: '#2196f3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}><Link to={"login"}>Login</Link></button>
      <button className='signup' style={{ backgroundColor: '#000000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}><Link to={"Register"}>Sign up</Link></button>
    </div>
  );
}
