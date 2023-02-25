import React from "react";
import { ContactUs } from "./ContactUs";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer">
                <ContactUs></ContactUs>
                <div className="p-[10px] text-center">
                    <p>&copy; Copyright 2023 Don Prasetiyo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;