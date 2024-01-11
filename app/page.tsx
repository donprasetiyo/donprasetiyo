'use client'
import Content from "@/components/Content";
import Script from "next/script";
import { useEffect, useState } from "react";


const Home = () => {

    const [isReady, setIsReady] = useState(false)

    function loadCaptcha() {

        // Usage
        if (grecaptcha) {
            grecaptcha.ready(function () {
                grecaptcha.render('verify', {
                    'sitekey': "6Le2d1gjAAAAABe_WXGJ230vOKDt80Wvxm0i-0z6"
                });
            });
        }
    }

    useEffect(() => {
        // loadCaptcha()
    }, [isReady])

    return (
        <>
            {/* <Script src='https://www.google.com/recaptcha/api.js' strategy='beforeInteractive' onReady={() => setIsReady(true)}></Script> */}
            <Content />
        </>

    );
}

export default Home;