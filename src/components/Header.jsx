import { useEffect } from "react";

const Header = () => {

    function loadCustomThemeCSS() {
        if (!document.getElementById("myCss")) {

            var cssId = 'myCss';  // you could encode the css path itself to generate id..
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/src/customtheme.css';
            link.media = 'all';
            head.appendChild(link);
        }
    }

    function removeCustomThemeCSS() {
        var head = document.getElementsByTagName('head')[0];

        var link = document.querySelector('#myCss');
        if (link) {
            head.removeChild(link);
        }
    }

    function changeThemeIcon(faNew) {
        let icon = document.getElementById('main-theme-icon');
        for (let index = 0; index < icon.classList.length; index++) {
            if (icon.classList[index] !== "fa-solid") {
                if (icon.classList[index] !== faNew) {
                    icon.classList.remove(icon.classList[index]);
                }
            }


        }
        // icon.classList.remove(faOld);
        icon.classList.add(faNew);
    }

    const selectedThemeCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('theme='))
        ?.split('=')[1];

    if (selectedThemeCookie) {

        if (selectedThemeCookie === "dark") {
            document.documentElement.style.setProperty('color-scheme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            //add css variable
            loadCustomThemeCSS();

            useEffect(() => {
                let input = document.getElementById("dark");
                if (input) {
                    input.checked = true;
                    changeThemeIcon("fa-moon");
                }
            })


        }
        if (selectedThemeCookie === "light") {
            document.documentElement.setAttribute('data-theme', 'light');

            loadCustomThemeCSS();

            useEffect(() => {
                let input = document.getElementById("light");
                if (input) {

                    input.checked = true;
                    changeThemeIcon("fa-sun");
                }
            })
        }
        if (selectedThemeCookie === "system") {

            document.documentElement.style.setProperty('color-scheme', 'light dark');
            //var cssId = 'myCss';  // you could encode the css path itself to generate id..
            removeCustomThemeCSS();
            useEffect(() => {
                let input = document.getElementById("system");
                if (input) {

                    input.checked = true;
                    changeThemeIcon("fa-laptop");
                }
            })
        }
    }
    else {
        useEffect(() => {
            let tooltipBox = document.createElement('div');
            let tooltipText = document.createElement('p');
            tooltipText.innerText = "Try the dark mode.";
            tooltipBox.appendChild(tooltipText);
            let tooltipButton = document.createElement('button');
            tooltipButton.innerText = "Dismiss";
            tooltipBox.appendChild(tooltipButton);
            tooltipBox.classList.add("tooltip");

            let themeSwitchToolTip = document.querySelector(".theme-switch > .tooltip");
            if (!themeSwitchToolTip) {
                tooltipBox.style.opacity = 0;
                document.querySelector(".theme-switch").appendChild(tooltipBox);
            }

            tooltipButton.addEventListener('click', () => {
                tooltipBox.classList.add('hidden');
                setTimeout(() => {
                    document.querySelector(".theme-switch > .tooltip.hidden").style.display = "none";
                }, 2000);
            })

            window.onload = function () {
                setTimeout(loadAfterTime, 5000)
            };
            function loadAfterTime() {
                tooltipBox.style.opacity = 1;
            }
        })
    }


    let lastScrollTop = 0;

    useEffect(() => {

        window.onscroll = function () { onScroll() };

        let logonav = document.getElementById("offset");
        let logonavTop = logonav.offsetTop;

        const header = document.getElementById("header");
        let headerBottom = window.innerHeight - header.style.height;



        function onScroll() {

            let outerDiv = document.querySelector(".outer");

            if (lastScrollTop > window.scrollY) {
                //user scroll up
                // console.log("up");

                outerDiv.classList.remove('margin-ten')
            }
            else {
                // console.log("down");

                outerDiv.classList.add('margin-ten')
                //user scroll down
            }

            lastScrollTop = window.scrollY;

            if (window.scrollY >= logonavTop) {
                // console.log(window.scrollY, logonav.offsetHeight)
                // logonav.classList.add("sticky-support");
                if (window.scrollY >= logonav.offsetHeight) {
                    header.classList.add("sticky");
                }
                else {
                    header.classList.remove("sticky");
                }
            }
            else {

                // logonav.classList.remove("sticky-support");
            }
        }
    },);

    function toggleDo(e) {
        // console.log(e.target.id)
        let detailElement = document.querySelector(".theme-switch details");
        detailElement.removeAttribute("open");

        let selectedTheme = "";

        switch (e.target.id) {
            case "dark":
                // code block
                selectedTheme = "dark";
                document.documentElement.style.setProperty('color-scheme', 'dark');
                document.documentElement.setAttribute('data-theme', 'dark');
                //add css variable
                loadCustomThemeCSS();
                changeThemeIcon("fa-moon");
                // document.documentElement.style.setProperty('--white', ' #fafafa');
                // document.documentElement.style.setProperty('--link-color', ' #6487ae');
                // document.documentElement.style.setProperty('--header-bg', ' #2d7179');
                // document.documentElement.style.setProperty('--header-cl', ' #fafafa');
                // document.documentElement.style.setProperty('--nav-link', ' #fafafa');
                // document.documentElement.style.setProperty('--nav-ul-bg', ' #2d7179');
                // document.documentElement.style.setProperty('--nav-ul-bdr', ' #1d4f55');
                // document.documentElement.style.setProperty('--content-bg', ' #1B3E41');
                // document.documentElement.style.setProperty('--footer-bg', ' #555');
                // document.documentElement.style.setProperty('--panel-bg', ' #1B3E41');
                // document.documentElement.style.setProperty('--panel-even-bg', ' #1F4648');
                // document.documentElement.style.setProperty('--social-a', ' #fafafa');
                // document.documentElement.style.setProperty('--social-a-hover', ' #2d7179');
                // document.documentElement.style.setProperty('--social-border', ' #fafafa');
                // document.documentElement.style.setProperty('--toggle-bg', ' #1B3E41');
                // document.documentElement.style.setProperty('--toggle-color', ' #fafafa');
                // document.documentElement.style.setProperty('--theme-toggle-input-checked-and-toggle-bg', ' #2e7178');
                // document.documentElement.style.setProperty('--theme-toggle-input-checked-and-toggle-cr', ' #fafafa');
                // document.documentElement.style.setProperty('--theme-toggle-input-focus-and-toggle-bx-shdw', ' #2e7178');
                // document.documentElement.style.setProperty('--listing-title-h2-border-btm', ' 1px dashed #fafafa');
                // document.documentElement.style.setProperty('--panel-listing-two-single-bg', ' #204848');
                // document.documentElement.style.setProperty('--panel-listing-two-single-bdr', ' 1px dashed #fafafa');
                // document.documentElement.style.setProperty('--right-a', ' #90B2D5');
                // document.documentElement.style.setProperty('--made-width-bg', ' #1B3E41');
                // document.documentElement.style.setProperty('--made-width-bdr', ' 1px dashed #fafafa');
                // document.documentElement.style.setProperty('--src-btn-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--src-btn-cr', ' #555 !important');
                // document.documentElement.style.setProperty('--a-src-btn-hover', ' #a4dada');
                // document.documentElement.style.setProperty('--certification-bg', ' #1B3E41');
                // document.documentElement.style.setProperty('--cert-left-img-bdr', ' 1px dashed #fafafa');
                // document.documentElement.style.setProperty('--cert-a', ' #fafafa');
                // document.documentElement.style.setProperty('--cert-a-hover-certification-bg', ' #2d7179');
                // document.documentElement.style.setProperty('--cert-a-hover-certification-after-bg', ' #1f4648');
                // document.documentElement.style.setProperty('--theme-switch-summary-bg-color', ' #2D7179');
                // document.documentElement.style.setProperty('--theme-switch-summary-bg-brd', ' 1px solid #1d4f55');
                // document.documentElement.style.setProperty('--theme-switch-ul-bg', ' #2D7179');
                // document.documentElement.style.setProperty('--theme-switch-ul-brd', ' 1px solid #1d4f55');
                // document.documentElement.style.setProperty('--theme-switch-label-hover-bg', ' #286269');
                // document.documentElement.style.setProperty('--theme-switch-label-span-brd', ' 1px solid #727272');

                ///
                break;
            case "light":
                // code block
                selectedTheme = "light";
                document.documentElement.setAttribute('data-theme', 'light');

                loadCustomThemeCSS();
                changeThemeIcon("fa-sun");
                // document.documentElement.style.setProperty('color-scheme', 'light');
                // document.documentElement.style.setProperty('--white', ' #555');
                // document.documentElement.style.setProperty('--link-color', ' #0D4C92');
                // document.documentElement.style.setProperty('--header-bg', ' #3A8891');
                // document.documentElement.style.setProperty('--header-cl', ' #fafafa');
                // document.documentElement.style.setProperty('--nav-link', ' #fafafa');
                // document.documentElement.style.setProperty('--nav-ul-bg', ' #3A8891');
                // document.documentElement.style.setProperty('--nav-ul-bdr', ' 1px solid #2a676e');
                // document.documentElement.style.setProperty('--content-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--footer-bg', ' #aaa');
                // document.documentElement.style.setProperty('--panel-bg', ' #cfe9eb');
                // document.documentElement.style.setProperty('--panel-even-bg', ' #c3e4e5');
                // document.documentElement.style.setProperty('--social-a', ' #444');
                // document.documentElement.style.setProperty('--social-a-hover', ' #3a8891');
                // document.documentElement.style.setProperty('--social-border', ' 1px dashed #444');
                // document.documentElement.style.setProperty('--toggle-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--toggle-color', ' #706d6d');
                // document.documentElement.style.setProperty('--theme-toggle-input-checked-and-toggle-bg', ' #2e7178');
                // document.documentElement.style.setProperty('--theme-toggle-input-checked-and-toggle-cr', ' #fafafa');
                // document.documentElement.style.setProperty('--theme-toggle-input-focus-and-toggle-bx-shdw', ' 0 0 1px #2e7178');
                // document.documentElement.style.setProperty('--listing-title-h2-border-btm', ' 1px dashed #555');
                // document.documentElement.style.setProperty('--panel-listing-two-single-bg', ' #c2e4e4');
                // document.documentElement.style.setProperty('--panel-listing-two-single-bdr', ' 1px dashed #555');
                // document.documentElement.style.setProperty('--right-a', ' #2f4b7c');
                // document.documentElement.style.setProperty('--made-width-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--made-width-bdr', ' 1px dashed #555');
                // document.documentElement.style.setProperty('--src-btn-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--src-btn-cr', ' #555 !important');
                // document.documentElement.style.setProperty('--a-src-btn-hover', ' #a4dada');
                // document.documentElement.style.setProperty('--certification-bg', ' #cfe9ea');
                // document.documentElement.style.setProperty('--cert-left-img-bdr', ' 1px dashed #555');
                // document.documentElement.style.setProperty('--cert-a', ' #555');
                // document.documentElement.style.setProperty('--cert-a-hover-certification-bg', ' #a4dada');
                // document.documentElement.style.setProperty('--cert-a-hover-certification-after-bg', ' #c2e4e4');
                // document.documentElement.style.setProperty('--theme-switch-summary-bg-color', ' transparent');
                // document.documentElement.style.setProperty('--theme-switch-summary-bg-brd', ' 1px solid #1d4f55');
                // document.documentElement.style.setProperty('--theme-switch-ul-bg', ' #3A8891');
                // document.documentElement.style.setProperty('--theme-switch-ul-brd', ' 1px solid #2a676e');
                // document.documentElement.style.setProperty('--theme-switch-label-hover-bg', ' #317b83');
                // document.documentElement.style.setProperty('--theme-switch-label-span-brd', ' 1px solid #727272');

                break;
            case "system":
                // code
                selectedTheme = "system";
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                //var cssId = 'myCss';  // you could encode the css path itself to generate id..
                removeCustomThemeCSS();
                changeThemeIcon("fa-laptop");
                //
                break;
            default:
                // code block
                selectedTheme = "system";
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                //document.documentElement.removeAttribute('data-theme');
                removeCustomThemeCSS();
                changeThemeIcon("fa-palette");

        }


        document.cookie = `theme=${selectedTheme}; SameSite=None; Secure`;


    }

    useEffect(() => {
        window.onload = function () {
            function scrollToHash(hash) {
                let scrollToDiv = document.querySelector(hash);
                if (scrollToDiv) {
                    scrollToDiv.scrollIntoView(true);
                }
            }
            if (location.hash.length > 0) {
                scrollToHash(location.hash);
            }
        }

    })

    function hideTooltip() {
        let themeSwitchToolTip = document.querySelector(".theme-switch > .tooltip");
        if (themeSwitchToolTip) {

            if (!themeSwitchToolTip.classList.contains('hidden')) {
                themeSwitchToolTip.classList.add('hidden');
                setTimeout(() => {
                    document.querySelector(".theme-switch > .tooltip.hidden").style.display = "none";
                }, 2000);
            }
        }

    }


    return (
        <header className="container" id="header">
            <div className="sub-container outer" id="offset">
                <div className='logo'>
                    <h1>Don Prasetiyo</h1>
                </div>
                <div className="nav-toggle">
                    <div className="nav">
                        <input type="checkbox" id="drop" />
                        {/* <div className="nav-header">
                            <div className="nav-title">
                                JoGeek
                            </div>
                        </div> */}
                        <div className="nav-btn">
                            <label htmlFor="drop">
                                <i className="fa-solid fa-bars"></i>
                            </label>
                        </div>
                        <nav id="navbar" className="nav-links">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li>
                                    <input type="checkbox" id="drop-1" />
                                    <a href="#">Apps
                                        <i className="fa-solid fa-caret-down"></i>
                                    </a>
                                    <label htmlFor="drop-1">

                                    </label>

                                    <ul className="nav-links">
                                        <li><a href="https://flappy.donprasetiyo.com/">Flappy Clone</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="theme-switch">
                        <details className="theme-select">
                            <summary onClick={() => hideTooltip()} className="radios" onChange={(e) => toggleDo(e)}>

                                <i id="main-theme-icon" className="fa-solid fa-palette"></i>
                                <input type="radio" name="item" id="default" title="Theme" defaultChecked="true">

                                </input>
                                <input type="radio" name="item" id="dark" title="Dark">

                                </input>
                                <input type="radio" name="item" id="light" title="Light">

                                </input>
                                <input type="radio" name="item" id="system" title="Default">

                                </input>
                                <i className="fa-solid fa-caret-down"></i>
                            </summary>
                            <ul className="list">
                                <li>
                                    <label htmlFor="dark">
                                        <i className="fa-solid fa-moon"></i>
                                        Dark
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="light"><i className="fa-solid fa-sun"></i>
                                        Light</label>
                                </li>
                                <li>
                                    <label htmlFor="system"> <i className="fa-solid fa-laptop"></i>
                                        Default</label>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;