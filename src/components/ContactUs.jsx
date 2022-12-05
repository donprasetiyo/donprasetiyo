import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as dotenv from 'dotenv'
import { useEffect } from 'react';
import { useState } from 'react';

// dotenv.config()

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    document.getElementById("email-submit").setAttribute('disabled', '');

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
        if (result.status === 200) {
          setFormStatus('Email has been sent. Thank you for contacting us.');
        }
        else {
          setFormStatus("Something went wrong. Try again.");
        }
        if (grecaptcha !== undefined) { //this if statement is important to prevent site from crashing if grecaptcha is undefined
          grecaptcha.reset?.();
        }
      }, (error) => {
        setFormStatus(`Error occured. ${JSON.stringify(error)}`);
      });
  };

  if (grecaptcha !== undefined) { //this if statement is important to prevent site from crashing if grecaptcha is undefined
    //RECAPTCHA WON'T LOAD WITHOUT THIS UNLESS HARD-RELOADING THE PAGE (SHIFT+F5)
    useEffect(() => {
      grecaptcha.render?.('verify', {
        'sitekey': `${import.meta.env.VITE_CAPTCHA}`
      });
    }, [])
  }

  return (
    <form ref={form} onSubmit={sendEmail} method="POST">
      <p id="form-status" style={{ display: formStatus.length > 0 ? "block" : "none" }}>{formStatus}</p>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <div id="verify" className="g-recaptcha" data-callback="recaptchaCallback" data-sitekey={import.meta.env.VITE_CAPTCHA}></div>
      <br />
      <input id="email-submit" type="submit" value="Send" disabled />
    </form>
  );
};