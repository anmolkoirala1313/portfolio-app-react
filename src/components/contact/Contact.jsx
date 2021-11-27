import React from "react";
import "./contact.css";
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import {useContext} from 'react';
import {ThemeContext} from '../../context';

const Contact = () => {

   const formRef = useRef()
   const [done, setDone] = useState(false)
   const handleSubmit = (e)=>{
       e.preventDefault();
        emailjs.sendForm('service_lb3k39l', 'template_eav1wdn', formRef.current, 'user_jq9BtInMuHS7IaM1g8sKY')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
 

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +977 987654321
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            anmlkoirala@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            Birtamode, Jhapa
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-descp">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}> 
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea  style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        
                    </form>
                    {done && "Thank you for reaching out. I will get in touch ASAP"}
                </div>
            </div>
        </div>
    )
}



export default Contact
