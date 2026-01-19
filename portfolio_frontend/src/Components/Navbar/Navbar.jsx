import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "react-scroll";
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuref=useRef();

  const openMenu=()=>{
    menuref.current.style.right="0"
  }
  const closeMenu=()=>{
    menuref.current.style.right="-350px"
  }
  return (
    <div className="navbar">
        <img className="nav-logo" src={logo} alt="" />
        <img className="nav-open" src={menu_open} onClick={openMenu} alt="" />
        <ul ref={menuref} className="nav-menu">
          <img className="nav-close" src={menu_close} onClick={closeMenu} alt="" />
           <li><Link to="home" smooth={true} onClick={() => setMenu("home")} className={menu === "home" ? "active" : "" } style={{cursor:"pointer"}}>Home</Link></li>
           <li><Link to="about" smooth={true} offset={50} onClick={() => setMenu("about")} className={menu === "about" ? "active" : "" } style={{cursor:"pointer"}}>About</Link></li>
           <li><Link to="services" smooth={true} offset={50} onClick={() => setMenu("services")} className={menu === "services" ? "active" : "" } style={{cursor:"pointer"}}>Services</Link></li>
           <li><Link to="projects" smooth={true} offset={50} onClick={() => setMenu("projects")} className={menu === "projects" ? "active" : "" } style={{cursor:"pointer"}}>Projects</Link></li>
           <li><Link to="contact" smooth={true} offset={50} onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : "" } style={{cursor:"pointer"}}>Contact</Link></li>
        </ul>
        <div className="nav-connect"><Link to="contact" smooth={true}>Connect with me</Link></div>
    </div>
  )
}   
export default Navbar;