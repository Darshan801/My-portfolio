import { useState } from 'react'
import React  from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Projects from './Components/Projects/Projects.jsx'



const App = () => {
  return (
   
   <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
   </div>

  )
}
export default App
