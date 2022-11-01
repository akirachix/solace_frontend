import React, { useState } from 'react';
import '../styles/Nav.css';

import pics7 from "../images/Prudence.png";
import pics8 from "../images/Yasmin.png";
import pics9 from "../images/Nancy.png";
import pics10 from "../images/Wanda.png";
import pics11 from "../images/Jane.png";
import '../styles/Team.css'


function Team() {
    return (
      <div className="Team" id="team">
        <div className="Devs">
        <h1 >Meet our Team</h1>
        </div>
  
        <div className="Profile"> 
       <img id='pics7' src={pics7}alt=".pics7" /> 
       <img id='pics8' src={pics8} alt="pics8" />
       <img id='pics9' src={pics9}alt="pics9" /> 
        </div>
        <div className="Members">  
       <img id='pics10' src={pics10}alt="pics10" /> 
       <img id='pics11' src={pics11}alt="pics11" />
        </div>

        <h3 id="Prudence">Prudence Ahimbisibwe<br></br>
          <span>Backend Developer</span></h3>
        <h3 id="Yasmin">Yasmin  Mahad<br></br> 
        <span>Frontend Developer</span></h3>
        <h3 id="Nancy">Nancy Wambui<br></br>
          <span>UI/UX Designer</span></h3>
        <h3 id="Wanda">Wanda Elizabeth<br></br>
          <span>Backend Developer</span></h3>
        <h3 id="Jane">Jane Musimbi<br></br>
         <span>Frontend Developer</span></h3>
    

     </div>
    );
  } 
  
  export default Team;