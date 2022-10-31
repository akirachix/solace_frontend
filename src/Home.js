import React from "react";
import './App.css';
import './Home.css';
// import pics from "./images/Group 1.png";
// import pics2 from "./images/Group 2.png";
// import pics3 from "./images/Group 3.png";
import pic from "./images/sol.png";

function Home() {
    return (
      <div className="App">
        {/* <h1>Home page</h1> */}

          <div className="info">
        <h2>Solace</h2>git credential-manager uninstall
        <h1>Find Your Peace</h1>
        <h3>Our goal is to help you manage<br></br>
            anxiety disorder.</h3>
            </div>
  
      <div className="Landing">
         <img src={pic}alt='page' width='150%'/> 
        </div>
      </div>
    );
  } 
 
export default Home;