import React from "react";
import { ContactUs } from "./ContactUs";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer">
                <h2>Contact:</h2>
                <div className='social'>
                    <ul>
                        <li>
                            <a href="mailto:dprasetiyo6@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/donprasetiyo/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/donprasetiyo/" target="_blank" rel="noopener noreferrer">

                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/donprasetiyo" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="another">
                    Or use the contact form below (EmailJS):
                </p>
                <ContactUs></ContactUs>
            </div>
        </footer>
    );
}

export default Footer;