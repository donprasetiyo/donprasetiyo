/* eslint-disable react/no-unescaped-entities */
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import welcome from '../public/animation/welcome.json'
import { type, type as loop } from '../public/animation/typical'
import Script from 'next/script';
import Image from 'next/image';
import Projects from './Projects';

const Content = () => {

    useEffect(() => {

        lottieAnimate();
        
    }, [])

    function lottieAnimate() {
        const steps = [1000, "Hi, I'm Don.", 1000, "I'm a front-end developer.", 1000, "...with experience in the backend."];
        var x = document.getElementById('target')
        //THIS FUNCTION DOESN'T TRIGGER RE-RENDER. ONLY RUNS ONCE, AND TYPICAL.JS TAKES CARE OF THE LOOP
        type(x, ...steps, loop);
    }


    function growDiv(e: React.MouseEvent<HTMLButtonElement>) {
        //reusable collapsible
        //to use it, simply add the function to the onClick event handler
        //it then detects sibling element, and that sibling's first children

        let expandButton = e.target as HTMLButtonElement;
        var growDiv = expandButton.nextElementSibling as HTMLElement;
        if (growDiv.clientHeight) {
            growDiv.style.height = '0';
            if (expandButton.classList.contains('opened')) {
                expandButton.classList.remove('opened');
            }
        } else {
            if (!expandButton.classList.contains('opened')) {
                expandButton.classList.add('opened');
            }
            
            var wrapper = expandButton.nextElementSibling?.children[0];
            growDiv.style.height = wrapper?.clientHeight + "px";
        }
    }


    return (
        <div id="content">
            <div className="panel my-container">
                <div className="sub-my-container single">
                    <div className='two-single'>
                        <h2 id="target"></h2>
                        <Player src={welcome} background="transparent" speed={1} style={{ height: '300px', width: '300px' }} loop controls autoplay />

                    </div>
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
                </div>
            </div>
            <div className="panel my-container">
                <div className="sub-my-container up center single mt-[20px]">
                    <h2>This website is made with:</h2>
                    <div>
                        <ul className='image-list'>
                            <li>
                                <div className="image-text">
                                    <picture>
                                        <img alt='javascript' src="/images/js.png"></img></picture>

                                    <p>Javascript</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <picture><img alt='html' src="/images/html.png"></img></picture><p>HTML</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <picture><img alt='css' src="/images/css.png"></img></picture><p>CSS</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <picture><img alt='vitejs' src="/images/vitejs.svg"></img></picture><p>ViteJS</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <picture><img alt='react' src="/images/react.svg"></img></picture><p>React</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <picture><img alt='nodejs' src="/images/nodejs.png"></img></picture><p>NodeJS</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a className='src-btn' style={{ margin: "25px 0 30px" }} href="https://github.com/donprasetiyo/donprasetiyo" target="_blank" rel="noopener noreferrer">
                        See the source code on Github
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
            <div className="panel my-container" id="projects">
                <div className="sub-my-container single listing">
                    <Projects/>
                </div>
            </div>
            <div className="panel my-container">
                <div className="sub-my-container up center single mt-[20px] mb-[20px]">
                    <h2 id="certification">Certifications:</h2>
                    <div>
                        <ul className='cert-list'>
                            <li>
                                <div className="cert">
                                    <a href="https://scrimba.com/certificate/uMw6vMT9/gjavascript" target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="certification">
                                            <div className="cert-left">
                                                <picture><img alt='scrimba' src="/images/scrimba-js-deep-dive.jpg"></img></picture>
                                            </div>
                                            <div className="cert-right">
                                                <h3>Javascript Deep Dive (Scrimba)</h3>
                                                <p>
                                                    Instructor: Reed Barger
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Content;