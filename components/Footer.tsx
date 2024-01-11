import React from "react";
import { ContactUs } from "./ContactUs";

const Footer = () => {
    return (
        <footer id="contact" className="dark:bg-[#1b3e41]">
            <div className="footer sm:w-[500px] mx-auto my-0 pt-5 pb-0 px-0">
                <ContactUs></ContactUs>
                <div className="p-[10px] text-center">
                    <p>&copy; Copyright 2023 Don Prasetiyo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;