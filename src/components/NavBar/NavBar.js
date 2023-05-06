import React from 'react'

import './Navstyle.css'
import { useNavigate } from 'react-router-dom';


function    NavBar() {
    const navigate=useNavigate()
  return (
    <div className='navbox'>
    <h1 onClick={()=> navigate('/')} > Movies</h1>
    <h3 onClick={()=> navigate('/')}> Home</h3>
    <h3 onClick={()=> navigate('/ContactUs')}> Contact Us</h3>
    <h3 onClick={()=> navigate('/AboutUs')}> About Us </h3>

    </div>
  );
}

export default NavBar