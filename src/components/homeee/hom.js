import React from 'react';
import { Link } from 'react-router-dom';
import img from './bck.jpg';
import './LoginSignUp.css'
export default function LoginSignUp ()  {
  return (
    <div className='container' >
      
      <h1 >
        Weather App
      </h1>
      <img className='bck' src={img}/>
      <p>Please login or sign up to access the weather app</p>
      <button className='login' style={{ marginRight: 70, backgroundColor: '#2196f3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}><Link to={"login"}>Login</Link></button>
      <button className='signup' style={{ backgroundColor: '#000000', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}><Link to={"Register"}>Sign up</Link></button>
    </div>
  );
}
