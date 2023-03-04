import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "./ThemeContext";

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

    function hideTooltip() {
        let themeSwitchToolTip = document.querySelector(".theme-options > .tooltip");
        if (themeSwitchToolTip) {

            if (!themeSwitchToolTip.classList.contains('hidden')) {
                themeSwitchToolTip.classList.add('hidden');
                setTimeout(() => {
                    (document.querySelector(".theme-options > .tooltip.hidden") as HTMLElement).style.display = "none";
                }, 2000);
            }
        }
    }


    const [isOpened, setIsOpen] = useState(false);

    function openMenu() {
        setIsOpen(prevCheck => !prevCheck);
        hideTooltip();
    }

    const { updateTheme, themeSettings, setThemeSettings } = useContext(Context);

    const themeChangeTriggered = (e : React.FormEvent<HTMLUListElement>) => {
        updateTheme?.(e);
        console.log('selectedTheme' + themeSettings.selectedTheme)
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <header className="my-container" id="header">
            <div className="sub-my-container outer" id="offset">
                <div className='logo'>
                    <h1><Link href="/">Dony Prasetiyo</Link></h1>
                </div>
                <div className="nav-toggle">
                    <div className="nav">
                        <input type="checkbox" id="drop" />
                        <div className="nav-btn">
                            <label htmlFor="drop">
                                <i className="fa-solid fa-bars"></i>
                            </label>
                        </div>
                        <nav id="navbar" className="nav-links">
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#certification">Certifications</a></li>
                                <li>
                                    <input type="checkbox" id="drop-2" />
                                    <a href="#">Apps
                                        <i className="fa-solid fa-caret-down"></i>
                                    </a>
                                    <label htmlFor="drop-2">

                                    </label>

                                    <ul className="nav-links">
                                        <li><a href="https://flappy.donprasetiyo.com/">Flappy Clone</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className="theme-options" >
                        <div id="toggle-theme" onClick={() => openMenu()} > <i id="main-theme-icon" className="fa-solid fa-palette"></i>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className={`list ${isOpened ? 'opened' : 'closed'}`} onChange={(event) => themeChangeTriggered(event)}>
                            <li>
                                <input type="radio" name="item" id="dark" title="Dark" />
                                <label htmlFor="dark">
                                    <i className="fa-solid fa-moon"></i>
                                    Dark
                                </label>
                            </li>
                            <li>
                                <input type="radio" name="item" id="light" title="Light" />
                                <label htmlFor="light"><i className="fa-solid fa-sun"></i>
                                    Light</label>
                            </li>
                            <li>
                                <input type="radio" name="item" id="system" title="Default" />
                                <label htmlFor="system"> <i className="fa-solid fa-laptop"></i>
                                    Device Settings</label>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
}


export default Header;