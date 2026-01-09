import React from "react";
import './About.css'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about_left">
                    <img src={profile_img} alt="loading..." />
                </div>
                <div className="about-right">
                    <div className="about-content">
                        <p>I enjoy building projects using Django, JavaScript, and front-end frameworks</p>
                        <p>I’m passionate about learning through hands-on practice and continuous improvement.</p>
                    </div>
                    <div className="about-skills">
                        {/* skills section */}
                        <div className="about-skill">
                            <p>HTML & CSS <hr style={{width:"50%"}}/></p>
                            
                        </div>
                        <div className="about-skill">
                            <p>React js
                                 <hr  style={{width:"40%"}}/>
                            </p>
                        </div>
                        <div className="about-skill">
                            <p>Python
                                 <hr  style={{width:"60%"}}/>
                            </p>
                        </div>
                        <div className="about-skill">
                            <p>Django
                                 <hr  style={{width:"70%"}}/>
                            </p>
                        </div>
                    </div>
                </div>
             </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>1+</h1>
                            <p>YEARS OF EXPERICENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>5+</h1>
                            <p>ONGOING</p>
                        </div>
                     </div>
        </div>
    )
}
export default About