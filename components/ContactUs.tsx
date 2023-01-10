import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactUs = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (process.env.EMAIL_SERVICE_ID && process.env.EMAIL_TEMPLATE_ID && form.current && process.env.EMAIL_PUBLIC_KEY) {
      emailjs.sendForm(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, form.current, process.env.EMAIL_PUBLIC_KEY)
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
    }

  };

  let isCaptchaManuallyLoaded = false;

  function showCaptchaIfNotShown(e: React.FormEvent<HTMLFormElement>) {
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
    <>
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
      <form ref={form.current} onSubmit={sendEmail} method="POST" onChange={(e) => showCaptchaIfNotShown(e)}>
        <p id="form-status" style={{ display: formStatus.length > 0 ? "block" : "none" }}>{formStatus}</p>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        {/* {grecaptcha ? <p>not loaded</p> : null} */}
        <div id="verify" className="g-recaptcha" data-sitekey={process.env.CAPTCHA}></div>
        <br />
        <input id="email-submit" type="submit" value="Send" style={{ cursor: 'pointer' }} />
      </form>
    </>

  );
};