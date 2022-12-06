import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as dotenv from 'dotenv'
import { useEffect } from 'react';
import { useState } from 'react';

// dotenv.config()

export const ContactUs = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
        
        if (result.status === 200) {
          setFormStatus('Email has been sent. Thank you for contacting us.');
        }
        else {
          setFormStatus("Something went wrong. Try again.");
        }
        
      }, (error) => {
        if (error.text === 'reCAPTCHA: The g-recaptcha-response parameter not found') {
          setFormStatus(`Please solve the reCAPTCHA before submitting.`);
        }
        else {
          setFormStatus(`Error occured. ${JSON.stringify(error)}`);
        }
      });

  };

  let isCaptchaManuallyLoaded = false;

  function showCaptchaIfNotShown(e) {
    if (isCaptchaManuallyLoaded === false) {
      grecaptcha.ready(function () {
        grecaptcha.render('verify', {
          'sitekey': `6Le2d1gjAAAAABe_WXGJ230vOKDt80Wvxm0i-0z6`
        });
      });
      isCaptchaManuallyLoaded = true;
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail} method="POST" onChange={(e) => showCaptchaIfNotShown(e)}>
      <p id="form-status" style={{ display: formStatus.length > 0 ? "block" : "none" }}>{formStatus}</p>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      {!window.grecaptcha ? <p>not loaded</p> : null}
      <div id="verify" className="g-recaptcha" data-sitekey={import.meta.env.VITE_CAPTCHA}></div>
      <br />
      <input id="email-submit" type="submit" value="Send" style={{cursor:'pointer'}} />
    </form>
  );
};