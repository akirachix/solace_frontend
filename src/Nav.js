import React from 'react';
import './App.css';
import "./solace.css"
import './Nav.css';
import pic from "./images/SolaceLogo.png";

function Nav() {
return (
  <div className='Nav'>

    <div className='Display'>
  <img src={pic}alt='logo' width='25%%' />
  </div>

  <div className='menu'>
    <ul>
    <li ><a href='#home' >Home</a></li>
      <li ><a href='#about' >About</a></li>
      <li> <a href='#team' >Team</a></li>
    </ul>
    </div>

  </div>

);
}

export default Nav;

