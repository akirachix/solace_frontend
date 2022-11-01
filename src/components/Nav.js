import React, { useState } from 'react';
import '../styles/Nav.css';
import pic from "../images/SolaceLogo.png";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Nav() {
  const [MenuOpen,setMenuOpen]=useState(false)
  const [my_right,set_right] = useState('-100%')
  let styles = {
    right: my_right
  };
  const open_ = ()=>{
    setMenuOpen(!MenuOpen)
    set_right("0")
}
const close_ = ()=>{
  setMenuOpen(!MenuOpen)
  set_right("-100%")

}
return (
  <div className='Nav'>

  <img className="Logo" src={pic} alt='logo'/>
  

   
    <ul className='menu'>
    <li ><a href='#home' >Home</a></li>
      <li ><a href='#about' >About</a></li>
      <li> <a href='#team' >Team</a></li>
    </ul>
    <div className='hamberger'>
      {MenuOpen ? <MenuOpenIcon onClick={open_}/>:<MenuIcon onClick={close_}/>}
   

    </div>

     <div className='mobileNav' style={styles}>
      
    <ul className='mobile-menu'>
    <li ><a href='#home' >Home</a></li>
      <li ><a href='#about' >About</a></li>
      <li> <a href='#team' >Team</a></li>
    </ul>
    </div> 
    </div>
);
}

export default Nav;

