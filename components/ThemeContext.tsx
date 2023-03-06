import React, { ChangeEvent, Children, Component, FormEvent, ReactElement } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactChildrenProps } from "./Children.types";


const Context = React.createContext<any>('');

interface ThemeSettings {
    selectedTheme: string,
    iconClassName?: string,
    colorScheme?: string,
    // updateTheme?(e: React.FormEvent<HTMLUListElement>): void
}

function ThemeContextProvider({ children }: ReactChildrenProps) {

    const [themeSettings, setThemeSettings] = useState<ThemeSettings>({ selectedTheme: '' });

    const [chosenTheme, setChosenTheme] = useState('');
    let userSelectedTheme = "";

    const [deviceTheme, setDeviceTheme] = useState('');

    function checkCookies() {
        let selectedThemeCookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('theme='))
            ?.split('=')[1] as string;

        if (selectedThemeCookie) {
            if (selectedThemeCookie === "dark") {
                document.documentElement.style.setProperty('color-scheme', 'dark');
                //document.documentElement.setAttribute('data-theme', 'dark');
                //add css variable
                //loadCustomThemeCSS();
                let input = document.getElementById("dark") as HTMLInputElement;
                if (input) {
                    input.checked = true;
                    changeThemeIcon("fa-moon");
                }
            }

            if (selectedThemeCookie === "light") {
                //document.documentElement.setAttribute('data-theme', 'light');
                //loadCustomThemeCSS();
                let input = document.getElementById("light") as HTMLInputElement;
                if (input) {

                    input.checked = true;
                    changeThemeIcon("fa-sun");
                }
            }

            if (selectedThemeCookie === "system") {
                document.documentElement.style.setProperty('color-scheme', 'light dark');
                let input = document.getElementById("system") as HTMLInputElement;
                if (input) {
                    input.checked = true;
                    changeThemeIcon("fa-laptop");
                }
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    selectedThemeCookie = 'dark';
                    setDeviceTheme('dark');
                }
                if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    selectedThemeCookie = 'light';
                    setDeviceTheme('light');
                }
            }

            if (selectedThemeCookie !== themeSettings.selectedTheme) {
                setThemeSettings({ selectedTheme: selectedThemeCookie })
            }

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
                tooltipBox.style.opacity = "0";
                let themeOptions: any = document.querySelector(".theme-options");
                themeOptions?.appendChild(tooltipBox);
            }

            tooltipButton.addEventListener('click', () => {
                tooltipBox.classList.add('hidden');
                setTimeout(() => {
                    let hiddenTooltip: any = document.querySelector(".theme-options > .tooltip.hidden");
                    hiddenTooltip!.style.display = "none";
                }, 2000);
            })

            onLoadActivities();

            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                selectedThemeCookie = 'dark';
                setDeviceTheme('dark');
            }
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                selectedThemeCookie = 'light';
                setDeviceTheme('light');
            }

            if (selectedThemeCookie && selectedThemeCookie !== themeSettings.selectedTheme) {
                setThemeSettings(prevThemeSettings => ({ ...prevThemeSettings, selectedTheme: selectedThemeCookie }));
            }
            if (selectedThemeCookie === undefined) {
                setThemeSettings({ selectedTheme: '' })
            }

        }


    }

    useEffect(() => {
        checkCookies()
    }, [themeSettings.selectedTheme])


    function changeThemeIcon(faNew: string) {
        let icon = document.getElementById('main-theme-icon');
        if (icon) {
            for (let index = 0; index < icon.classList.length; index++) {
                if (icon.classList[index] !== "fa-solid") {
                    if (icon.classList[index] !== faNew) {
                        icon.classList.remove(icon.classList[index]);
                    }
                }
            }
            icon.classList.add(faNew);
        }
    }

    function updateTheme(e: React.FormEvent<HTMLUListElement>) {


        let selectedTheme: string = "";

        if (e.target) {

            switch ((e.target as HTMLInputElement).id) {
                case "dark":
                    selectedTheme = "dark";
                    document.documentElement.style.setProperty('color-scheme', 'dark');
                    changeThemeIcon("fa-moon");
                    break;

                case "light":
                    selectedTheme = "light";
                    document.documentElement.style.setProperty('color-scheme', 'light');
                    changeThemeIcon("fa-sun");
                    break;

                case "system":
                    selectedTheme = "system";
                    document.documentElement.style.setProperty('color-scheme', 'light dark');
                    changeThemeIcon("fa-laptop");
                    break;

                default:
                    selectedTheme = "system";
                    document.documentElement.style.setProperty('color-scheme', 'light dark');
                    changeThemeIcon("fa-palette");
            }

            if (selectedTheme !== themeSettings.selectedTheme) {
                // setChosenTheme(selectedTheme);

            }

            setThemeSettings({ selectedTheme: selectedTheme });

            document.cookie = `theme=${selectedTheme}; SameSite=None; Secure`;

            console.log(selectedTheme, themeSettings.selectedTheme)

        }
    }


    function onLoadActivities() {

        let themeSwitchToolTip = document.querySelector(".theme-options > .tooltip");
        setTimeout(() => {
            if (themeSwitchToolTip) {
                (themeSwitchToolTip as HTMLElement).style.opacity = '1';
            }
        }, 5000);

        function scrollToHash(hash: string) {
            let scrollToDiv = document.querySelector(hash);
            if (scrollToDiv) {
                scrollToDiv.scrollIntoView(true);
            }
        }

        if (location.hash.length > 0) {
            scrollToHash(location.hash);
        }

    }

    return (

        <Context.Provider value={{ themeSettings, updateTheme, setThemeSettings }}>
            {children}
        </Context.Provider>
    )
}

export { ThemeContextProvider, Context }
