import React from "react";
import './About.css';
// import pics4 from "./cover.png";
// import pics5 from "./images/Group 2.png";
import pics6 from "./images/meditation.png";


function About() {
    return (
      <div className="About-us">
      
        <div className="head">
           <h1>About Solace</h1>
        </div>

      <div className="words">
      {/* <img src={pics4} alt="cover" width='100%'/>  */}
        <h3>Solace is a mobile application that aims to assist Gen Z in 
Kenya manage anxiety disorder.It provides interactive self
-help and resources such as guided meditation to help 
users to manage symptoms associated with anxiety 
disorder.It allows them to chat and share how they are 
feeling everyday in order to improve their quality of life.</h3>

</div>
<div className="steps">
<h1 id="h1">Features of the App</h1>
         <h3 id="h3">1.Easy to use User-Interface (UI).<br></br>
2.Calming templates.<br></br>
3.Chatting.<br></br>
4.Calming audios for meditating.<br></br>
5.Encryption of patient’s data.</h3>
</div>
   


<div className="Med"> 
{/* 
<img id="pics5" src={pics5} alt="phone"/>  */}
<img id="med" src={pics6} alt="meditate" width='40%'/> 
</div>

</div>
    );
  } 

export default About;