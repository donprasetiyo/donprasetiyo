'use client'
/* eslint-disable react/no-unescaped-entities */
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import welcome from '../public/animation/welcome.json'
import { type, type as loop } from '../public/animation/typical'
import Script from 'next/script';
import Image from 'next/image';
import Projects from './Projects';
import TechIcon from './TechIcon';
import { TechIcons } from '../constants/TechIcons';
import { SocialIcons } from '../constants/SocialIcons';
import SocialIcon from './SocialIcon';

const Content = () => {

    useEffect(() => {

        lottieAnimate();

    }, [])

    function lottieAnimate() {
        const steps = [250, "Hi, I'm Don.", 250, "I'm a front-end developer.", 250, "I'm back-end developer.", 250, "with a go-to stack of React.js/Next.js..", 250, "..Tailwind and TypeScript..", 250, "..who open to working with other technologies..", 250, "..or other programming languages.", 250, "I usually either dockerize my apps..", 250, "..or to serverless environment (Lambda)..", 250, "..with infra-as-code tool SST (sst.dev)", 250, "..or simply to PaaS like Vercel."];
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
        <div id="content" className='dark:bg-[#1B3E41]'>
            <div className="flex flex-col items-center justify-center dark:bg-[#1B3E41] h-[calc(100vh_-_100px)]">
                <div className="flex items-center justify-center md:w-[980px] flex-col">
                    <div className='flex items-center w-full justify-between'>
                        <h2 className='font-light lg:text-[40px] tracking-[-0.5px] dark:text-[#fafafa]' id="target"></h2>
                        <Player src={welcome} background="transparent" speed={1} style={{ height: '300px', width: '300px' }} loop controls autoplay />

                    </div>
                    <div className='social self-baseline rounded-[10px]'>
                        <ul className='m-0 p-0'>
                            {SocialIcons.map((item, index) => (
                                <SocialIcon iconClass={item.iconClass} href={item.href} key={index}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center dark:bg-[#1F4648]">
                <div className="mt-[20px] self-baseline flex-col w-[980px] items-center flex justify-between">
                    <h2 className='dark:text-[#fafafa]'>This website is made with:</h2>
                    <div>
                        <ul className='text-center p-0 m-0 list-none'>
                            {TechIcons.map((item, index) => (
                                <TechIcon key={index} alt={item.alt} src={item.src} name={item.name} />
                            ))}
                        </ul>
                    </div>
                    <a className='mt-[25px] mb-[30px] mx-0 dark:text-[#555] dark:bg-[#cfe9ea] hover:dark:bg-[#a4dada] no-underline inline-block transition-[1s] p-2.5 rounded-[10px]' href="https://github.com/donprasetiyo/donprasetiyo" target="_blank" rel="noopener noreferrer">
                        See the source code on Github
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
            <div className="dark:bg-[#1B3E41] flex justify-center items-center">
                <div className="flex justify-between mt-0 flex-col items-center md:w-[980px]">
                    <Projects />
                </div>
            </div>
            <div className=" dark:bg-[#1F4648] flex justify-center items-center ">
                <div className="mt-[20px] mb-[20px] self-baseline flex-col w-[980px] items-center flex justify-between my-5">
                    <h2 id="certification" className='dark:text-[#fafafa] font-light text-[50px] tracking-[-0.5px] m-0'>Certifications:</h2>
                    <div>
                        <ul className='p-0 m-0 list-none'>
                            <li className='dark:text-[#fafafa] list-none'>
                                <div className="cert">
                                    <a className='dark:text-[#fafafa] no-underline text-left' href="https://scrimba.com/certificate/uMw6vMT9/gjavascript" target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="certification dark:bg-[#1B3E41] dark:hover:bg-[#2d7179] flex flex-row items-center relative transition-[1s] p-2.5 rounded-[20px]">
                                            <div className="">
                                                <picture><img className='border-[1px] dark:border-[#fafafa] border-dashed h-auto max-h-[300px] rounded-[20px]' alt='scrimba' src="/images/scrimba-js-deep-dive.jpg"></img></picture>
                                            </div>
                                            <div className="">
                                                <h3 className='dark:text-[#fafafa] text-[35px] font-extralight m-0 px-2.5 py-0'>Javascript Deep Dive (Scrimba)</h3>
                                                <p className='font-normal text-[26px] px-2.5 py-0 m-0'>
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