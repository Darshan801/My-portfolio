import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () =>  {
    return(
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>You can contact anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />   
                            <p>helloearth146@gmail.com</p>                        
                        </div>
                        <div className="contact-detail">
                                <img src={call_icon} alt="" />
                                <p>9806001001</p>
                        </div>
                        <div className="contact-detail">
                                <img src={location_icon} alt="" />
                                <p>Pokhara</p>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="">Your Name : </label>
                    <input type="text" name="name" placeholder="Enter your name" />

                    <label htmlFor="">Your Email : </label>
                    <input type="email" name="email" placeholder="Enter your email" />

                    <label htmlFor="">Write a message here :</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

                    <button className="contact-submit" type="submit">
                        Submit now
                    </button>
                </form>
            </div>

        </div>
    )
}
export default Contact