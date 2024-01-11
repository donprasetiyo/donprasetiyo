'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { SocialIcons } from '../constants/SocialIcons';
import SocialIcon from './SocialIcon';

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
      <div className='social self-baseline rounded-[10px]'>
        <ul className='m-0 p-0'>
          {SocialIcons.map((item, index) => (
            <SocialIcon iconClass={item.iconClass} href={item.href} key={index} />
          ))}
        </ul>
      </div>
      <p className="m-[10px] text-center">
        Or use the contact form below (EmailJS):
      </p>
      <form className='mx-auto w-[400px] flex flex-col p-5 rounded-[15px]' ref={form.current} onSubmit={sendEmail} method="POST" onChange={(e) => showCaptchaIfNotShown(e)}>
        <p id="form-status" className='text-base mb-5 m-0 p-2.5 border-l-[5px] border-l-[#1b3e41] border-solid bg-[#265559]' style={{ display: formStatus.length > 0 ? "block" : "none" }}>{formStatus}</p>
        <label>Name</label>
        <input className='mt-2.5 p-2.5 rounded-[10px] border-0  mb-[20px] dark:bg-[#1b3e41]' type="text" name="user_name" />
        <label>Email</label>
        <input className='mt-2.5 p-2.5 rounded-[10px] border-0 mb-[20px] dark:bg-[#1b3e41]' type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" className='mt-2.5 p-2.5 rounded-[10px] border-0 mb-[20px] dark:bg-[#1b3e41]' />
        {/* {grecaptcha ? <p>not loaded</p> : null} */}
        <div id="verify" className="g-recaptcha" data-sitekey={process.env.CAPTCHA}></div>
        <br />
        <input className='mt-2.5 p-2.5 rounded-[10px] border-0 mb-[20px] dark:bg-[#1b3e41]' id="email-submit" type="submit" value="Send" style={{ cursor: 'pointer' }} />
      </form>
    </>

  );
};