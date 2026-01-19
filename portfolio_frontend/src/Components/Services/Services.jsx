import React from "react";
import './Services.css'
import Services_Data from '../../assets/services_data'
import right_arrow1 from '../../assets/right_arrow1.png'
const Services = () => {
    return(
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
            </div> 
            <div className="services-content">
                {Services_Data.map((Service,index) =>{
                    return <div key={index} className="services-format">
                        <h3>{Service.s_no}</h3>
                        <h2>{Service.s_name}</h2>
                        <p>{Service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={right_arrow1} alt="..." />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services