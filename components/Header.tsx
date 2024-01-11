'use client'
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { NavigationMenu } from "./ui/navigation-menu";

const Header = () => {

    let lastScrollTop = 0;

    useEffect(() => {

        window.onscroll = function () { onScroll() };

        let logonav = document.getElementById("offset");
        let logonavTop = logonav?.offsetTop;

        const header = document.getElementById("header");
        //let headerBottom = window.innerHeight - header.style.height;

        function onScroll() {

            let outerDiv = document.querySelector(".outer");

            if (lastScrollTop > window.scrollY) {
                //user scroll up

                outerDiv?.classList.remove('margin-ten')
            }
            else {

                outerDiv?.classList.add('margin-ten')
                //user scroll down
            }

            lastScrollTop = window.scrollY;

            if (logonavTop && window.scrollY >= logonavTop) {
                if (logonav && window.scrollY >= logonav.offsetHeight) {
                    header?.classList.add("sticky");
                }
                else {
                    header?.classList.remove("sticky");
                }
            }
            else {

                // logonav.classList.remove("sticky-support");
            }
        }
    },);


    return (
        <header id='header' className="flex flex-col items-center justify-center z-[1] relative dark:bg-[#2d7179]">
            <div className="flex flex-row justify-between lg:w-[1280px]" id="offset">
                <div className='self-center'>
                    <h1 className="m-0 font-light lg:text-[30px]"><Link href="/">Don Prasetiyo</Link></h1>
                </div>
                <div className="flex flex-row items-center">
                    <NavigationMenu />

                    <div className="theme-options relative mr-4 px-1" >
                        <ThemeToggle />
                    </div>
                </div>

            </div>
        </header>
    );
}


export default Header;