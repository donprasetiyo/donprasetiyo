import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../components/ThemeContext'
import Script from 'next/script'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {

  function loadCaptcha() {
    // if (typeof grecaptcha === 'undefined') {
    //   grecaptcha = {} as ReCaptchaV2.ReCaptcha & {enterprise: ReCaptchaV2.ReCaptcha};
    // }
    // grecaptcha.ready = function (cb) {
    //   if (typeof grecaptcha === 'undefined') {
    //     // window.__grecaptcha_cfg is a global variable that stores reCAPTCHA's
    //     // configuration. By default, any functions listed in its 'fns' property
    //     // are automatically executed when reCAPTCHA loads.
    //     const c = '___grecaptcha_cfg';
    //     window[c] = window[c] || {};
    //     (window[c]['fns'] = window[c]['fns'] || []).push(cb);
    //   } else {
    //     cb();
    //   }
    // }

    // Usage
    grecaptcha.ready(function () {
      grecaptcha.render('verify', {
        'sitekey': "6Le2d1gjAAAAABe_WXGJ230vOKDt80Wvxm0i-0z6"
      });
    });
  }

  return (
    <>
      <Head>
        <meta data-charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
        <title>Don ww</title>
      </Head>
      {/* scripts belows are always loaded inside Head */}
      <Script src='https://www.google.com/recaptcha/api.js' strategy='afterInteractive' onReady={() => { loadCaptcha }}></Script>
      <Script src='https://kit.fontawesome.com/84d2741daf.js' crossOrigin='anonymous' strategy='afterInteractive'></Script>
      <Script src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js' strategy='afterInteractive'></Script>
      <Script src='https://www.google.com/recaptcha/api.js' strategy='afterInteractive'></Script>

      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>

    </>

  )
}
