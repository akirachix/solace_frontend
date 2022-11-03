import React from 'react';
 import '../styles/About.css';
import pics4 from "../images/cover.png";
import pics6 from "../images/meditation.png";
// import pics13 from "../images/Group 2.png";



function About() {
return (
<div className="About-us" id="about">
      
<div className="head">
           <h1>About Solace</h1>
        </div>

     <div className="info">
     <img src={pics4} alt="cover" width='100%'/> 
       <h3 id='details'>Solace is a mobile application that aims to assist Gen Z in 
Kenya manage anxiety disorder.It provides interactive self
-help and resources such as guided meditation to help 
users to manage symptoms associated with anxiety 
disorder.It allows them to chat and share how they are 
feeling everyday in order to improve their quality of life.
</h3>
</div>
<div className="steps">
<h1 id='app' >Features of the App</h1>
        <h3 id="h3">1.Easy to use User-Interface (UI).<br></br>
2.Calming templates.<br></br>
3.Chatting.<br></br>
4.Calming audios for meditating.<br></br>
5.Encryption of patient’s data.</h3>
</div>
   


<div className="Meditation"> 
{/* <img id="screen" src={pics13} alt="onboard" width='40%'/> */}
<img id="med" src={pics6} alt="meditate" width='35%'/> 
</div>

</div>
    );
   } 

 export default About;