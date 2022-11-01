import React, { useState } from 'react';
import '../styles/Home.css';

import '../styles/Home.css';
import pic from "../images/sol.png";

function Home() {
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
      <div className="App">
             <div className="Title">
        <h2>Solace</h2>
        <h1>Find Your Peace</h1>
        <h3>Our main goal is to help you manage
            anxiety disorder.</h3>
            </div>
   
   <div className="Landing">
         <img src={pic}alt='page' width='50%'/> 
        </div>
        </div>
    );
  } 
 
export default Home;