import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Team from './Team';
import Footer from './Footer';


function App() {
return (
<div>

<Nav />
<Home/> 
<About/>
<Team />
<Footer id='about' />

</div>
);
}
export default App;

