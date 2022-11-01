import React, { useState } from 'react';
 import '../styles/About.css';
import pics4 from "../images/cover.png";
import pics6 from "../images/meditation.png";
import Nav from '../components/Nav.js';


function About() {
return (
<div className="About-us" id="about">
      
<div className="head">
           <h1>About Solace</h1>
        </div>

     <div className="info">
     {/* <img src={pics4} alt="cover" width='100%' height='150%'/>  */}
       <h3>Anxiety disorders have been identified as the most common mental illness in Kenya. Solace seeks to protect Kenya's Generation Z population from various types of anxiety disorders and to help cut off symptoms associated with anxiety by developing a smartphone application.
The mobile application's main goal is to help Gen Z in Kenya manage their anxiety disorder and improve their quality of life by providing tools such as interactive self-help, guided meditation, breathing exercises, and other evidence-based techniques.</h3>
</div>
<div className="steps">
<h1 id="h1">Features of the App</h1>
        <h3 id="h3">1.Easy to use User-Interface (UI).<br></br>
2.Calming templates.<br></br>
3.Chatting.<br></br>
4.Calming audios for meditating.<br></br>
5.Encryption of patient’s data.</h3>
</div>
   


<div className="Meditation"> 
<img id="med" src={pics6} alt="meditate" width='40%'/> 
</div>

</div>
    );
   } 

 export default About;