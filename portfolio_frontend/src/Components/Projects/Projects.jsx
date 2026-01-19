import React from "react";
import './Projects.css'
import right_arrow1 from '../../assets/right_arrow1.png'
import mywork_data from "../../assets/mywork_data";
const Projects = () => {
    return(
        <div id="projects" className="project">
            <div className="project-title">
                <h1>My latest work</h1>
                
            </div>
            <div className="project-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="project-showmore">
                <p>Show More</p>
                <img src={right_arrow1} alt="..." />
            </div>
        </div>
    )
}
export default Projects