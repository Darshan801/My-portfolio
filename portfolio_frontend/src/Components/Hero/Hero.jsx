import React from "react";
import './Hero.css'
import img from '../../assets/img.JPG'
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div className="image">
                <img className="img" src={img} alt="" />
            </div>
            <div className="hero-intro">
                <h1><span>I'm Darshan Kunwar</span></h1>
                <p>I’m Darshan, a motivated learner with a strong interest in web development and modern 
                    technologies. I enjoy building projects using Django, JavaScript, and front-end frameworks, 
                    and I’m passionate about learning through hands-on practice and continuous improvement.

                </p>
                <div className="hero-action">
                    <div className="hero-connect"><Link to="contact" smooth={true}>Connect with me</Link></div>
                    <div className="hero-resume">My resume</div>
                </div>
            </div>
        </div>
    )
}
export default Hero