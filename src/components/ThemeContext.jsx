import React, { Children, Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Context = React.createContext();


function ThemeContextProvider({ children }) {

    const [chosenTheme, setChosenTheme] = useState('');

    let userSelectedTheme = "";

    function checkCookies() {
        const selectedThemeCookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('theme='))
            ?.split('=')[1];

        if (selectedThemeCookie) {
            if (selectedThemeCookie === "dark") {
                document.documentElement.style.setProperty('color-scheme', 'dark');
                //document.documentElement.setAttribute('data-theme', 'dark');
                //add css variable
                //loadCustomThemeCSS();
                let input = document.getElementById("dark");
                if (input) {
                    input.checked = true;
                    changeThemeIcon("fa-moon");
                }
            }

            if (selectedThemeCookie === "light") {
                //document.documentElement.setAttribute('data-theme', 'light');
                //loadCustomThemeCSS();
                let input = document.getElementById("light");
                if (input) {

                    input.checked = true;
                    changeThemeIcon("fa-sun");
                }
            }

            if (selectedThemeCookie === "system") {
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                //var cssId = 'myCss';  // you could encode the css path itself to generate id..
                //removeCustomThemeCSS();
                let input = document.getElementById("system");
                if (input) {
                    input.checked = true;
                    changeThemeIcon("fa-laptop");
                }
            }



            if (selectedThemeCookie !== chosenTheme) {
                setChosenTheme(selectedThemeCookie)
            }
            console.log('cookie is not null')
        }

        else {
            let tooltipBox = document.createElement('div');
            let tooltipText = document.createElement('p');

            tooltipText.innerText = "Try the dark mode.";
            tooltipBox.appendChild(tooltipText);
            let tooltipButton = document.createElement('button');
            tooltipButton.innerText = "Dismiss";
            tooltipBox.appendChild(tooltipButton);
            tooltipBox.classList.add("tooltip");

            let themeSwitchToolTip = document.querySelector(".theme-options > .tooltip");
            if (!themeSwitchToolTip) {
                tooltipBox.style.opacity = 0;
                document.querySelector(".theme-options").appendChild(tooltipBox);
            }

            tooltipButton.addEventListener('click', () => {
                tooltipBox.classList.add('hidden');
                setTimeout(() => {
                    document.querySelector(".theme-options > .tooltip.hidden").style.display = "none";
                }, 2000);
            })

            onLoadActivities();

            // function loadAfterTime() {
            //     tooltipBox.style.opacity = 1;
            // }
            if (selectedThemeCookie !== chosenTheme) {
                setChosenTheme(selectedThemeCookie)
            }
            if (selectedThemeCookie === undefined){
                setChosenTheme('');
            }

            console.log('cookie is null')
        }
    }

    useEffect(() => {
        checkCookies()
    }, [chosenTheme])

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

    function updateTheme(e) {
        // console.log(e.target.id)
        // let detailElement = document.querySelector(".theme-options > ul");
        // detailElement.classList.remove("opened");
        // detailElement.classList.add('closed');

        let selectedTheme = "";

        switch (e.target.id) {
            case "dark":
                // code block
                selectedTheme = "dark";
                document.documentElement.style.setProperty('color-scheme', 'dark');
                //document.documentElement.setAttribute('data-theme', 'dark');
                //add css variable
                // loadCustomThemeCSS();
                changeThemeIcon("fa-moon");
                ///
                break;
            case "light":
                // code block
                selectedTheme = "light";
                document.documentElement.style.setProperty('color-scheme', 'light');
                // document.documentElement.setAttribute('data-theme', 'light');

                // loadCustomThemeCSS();
                changeThemeIcon("fa-sun");
                break;
            case "system":
                // code
                selectedTheme = "system";
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                //var cssId = 'myCss';  // you could encode the css path itself to generate id..
                // removeCustomThemeCSS();
                changeThemeIcon("fa-laptop");
                //
                break;
            default:
                // code block
                selectedTheme = "system";
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                //document.documentElement.removeAttribute('data-theme');
                //removeCustomThemeCSS();
                changeThemeIcon("fa-palette");
        }

        console.log('updateTheme is triggered')

        if (selectedTheme !== chosenTheme){
         setChosenTheme(selectedTheme);
        }

        document.cookie = `theme=${selectedTheme}; SameSite=None; Secure`;

    }


    function onLoadActivities() {

        let themeSwitchToolTip = document.querySelector(".theme-options > .tooltip");
        setTimeout(() => {
            themeSwitchToolTip.style.opacity = 1;
        }, 5000);
        function scrollToHash(hash) {
            let scrollToDiv = document.querySelector(hash);
            if (scrollToDiv) {
                scrollToDiv.scrollIntoView(true);
            }
        }
        if (location.hash.length > 0) {
            scrollToHash(location.hash);
        }
        //setTimeout(loadAfterTime, 5000);

    }


    return (
        <Context.Provider value={{ chosenTheme, updateTheme }}>
            {children}
        </Context.Provider>
    )
}

export { ThemeContextProvider, Context }
