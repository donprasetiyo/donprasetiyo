/* eslint-disable react/no-unescaped-entities */
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';
import welcome from '../public/animation/welcome.json'
import { type, type as loop } from '../public/animation/typical'
import Script from 'next/script';
import Image from 'next/image';

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
            <div className="panel container">
                <div className="sub-container single">
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
            <div className="panel container">
                <div className="sub-container up center single">
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
                    {/* <div className="changelog">
                        <button onClick={(e) => growDiv(e)}>See Changelog <i className="fa-solid fa-caret-down"></i></button>
                        <div className="wrapper">
                            <div className="expand">
                                <h2 id="version-1-1">Version 1.1.0</h2>
                                <p className="released-on">Released on: 6/12/2022</p>
                                <p>There are some changes in V1.1.0:</p>
                                <h3 id="codes-refactored-">Codes refactored:</h3>
                                <ul>
                                    <li>Some features, such as theme options, previously rely on plain Javascript. Now they&#39;re fully React, relying on state changes and involving React useContext hook to apply theme (see ThemeContext.jsx).</li>
                                    <li>Select theme now rely on CSS class added to the App component to apply. It now adds &quot;.dark&quot; when user selects dark theme, &quot;.light&quot; for light, &quot;.system&quot; for device settings. It adds &quot; &quot; when user hasn&#39;t selected any. This is possible thanks to useContext hook. Previously, I used CSS variables with attribute selectors (example: [data-theme=&quot;dark&quot;]).</li>
                                    <li>Fixing re-render on some useEffect hooks.</li>
                                </ul>
                                <h3 id="features-interface-changes-">Features/interface changes:</h3>
                                <ul>
                                    <li>Adding contact form with EmailJS and reCAPTCHA. Email service ID and other sensitive info are stored on .ENV file.</li>
                                    <li>Adding reusable changelog collapsible.</li>
                                    <li>Theme menu now shows with CSS&#39;s clip: rect() transition. Previously, this wasn&#39;t possible due to the details element usage (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details</a>), and applying transition to it isn&#39;t possible.</li>
                                    <li>Adding hover transition to navigation links drop-down menu.</li>
                                    <li>Fixing link color on footer on dark theme.</li>
                                    <li>&quot;Device settings&quot; instead of &quot;Default&quot; on theme options menu.</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="panel container" id="projects">
                <div className="sub-container single listing">
                    <div className="listing-title">
                        <h2>Personal Projects</h2>
                        <p>Here are some personal projects that I have built:</p>
                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <picture><img src="/images/kompiwin.jpg" alt="kompiwin" /></picture>
                        </div>
                        <div className="right">
                            <h2 className='title'>Kompiwin.com (2014 - 2020)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='blogger' src="/images/blogger.png"></img></picture><p>Blogger.com (deprecated)</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='wordpress' src="/images/wp.png"></img></picture><p>WordPress</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='javascript' src="/images/js.png"></img></picture><p>Javascript</p>
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
                                                <picture><img alt='php' src="/images/php.svg"></img></picture><p>PHP</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='mysql' src="/images/mysql.png"></img></picture><p>MySQL</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                This is a website that I used to make a living out of, which was then <strong>sold</strong> in 2020.
                                At this time of writing, the website is still running managed by someone else, <strong>but you can see
                                    my involvement in the website by accessing it through achrive.org</strong>. Here are a few of the snapshots
                                to make the process a bit easier:
                            </p>

                            <ul>
                                <li><a href="https://web.archive.org/web/20151214231919/www.kompiwin.com/p/hubungi-kami.html"
                                    target="_blank" rel="noopener noreferrer">Archive.org Snapshot in 2015 (Contact Us page, containing my another active
                                    email)</a></li>
                                <li><a href="https://web.archive.org/web/20141116072427/www.kompiwin.com/"
                                    target="_blank" rel="noopener noreferrer">Archive.org Snapshot in 2014 (Homepage, my name on the author tag
                                    on each post)</a></li>
                                <li><a href="https://web.archive.org/web/20170603211816/http://www.kompiwin.com/"
                                    target="_blank" rel="noopener noreferrer">Archive.org Snapshot in 2017 (Homepage, my name on the author tag
                                    on each post, hover the post title to show them)</a></li>
                            </ul>
                            <h3>History about the site and a bit about me</h3>
                            <p className='description'>
                                Kompiwin.com has a quite unique story. The kompiwin.com domain was bought in 2014, but the website was made prior to 2014 in Google's Blogger platform using
                                .blogpost.com, and is still accessible at <a href="http://tipstrikwindows8-1.blogspot.com/" target="_blank"
                                    rel="noopener noreferrer">tipstrikwindows8-1.blogspot.com</a>.
                            </p>
                            <p>
                                As the name suggests, it used to talk about Windows 8.1, made some nice organic traffic from Google search,
                                giving me a good knownledge in SEO, <strong>including in HTML and CSS, a bit in Javascript, as I used to made
                                    blogger templates from scracth</strong>, and one of them was then used for kompiwin.com.
                            </p>
                            <p>
                                Another was released on <a href="https://www.deviantart.com/donyprasetiyo/art/Renosif-Free-Premium-Blogger-Template-508106620"
                                    target="_blank" rel="noopener noreferrer">my DeviantArt account on 2015 for free</a>, in exchange of free
                                backlink linked to to my blogspot subdomain through footer credit link on someone's website that uses
                                the template. That credit link can't be changed as I obfuscated the Javascript files,
                                preventing others from removing the credit link.
                            </p>
                            <p>I don't bother to modify or update the Blogger template as I'm not interested in using the CMS/platform anymore,
                                so you might find some bugs on the demo link on the DeviantArt page.
                            </p>
                            {/* <p>While I did have some front-end skills after making my own Blogger templates and running a WordPress-based site
                                , I was interested more in SEO and running the website as a content site that was monetized using
                                Google AdSense (or Ezoic for MonkeyManifesto). Not until June 2022, I'm interested more in coding,
                                learning C# to make some Windows 11 apps with WinUI 3, that are used personally.
                            </p>
                            <p>
                                Now I have more interest in building websites and apps without a CMS, made with a backend framework instead,
                                one that I'm still learning now is NodeJS.
                            </p> */}
                        </div>

                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <picture><img src="/images/mm.jpg" alt="monkey manifesto" /></picture>
                        </div>
                        <div className="right">
                            <h2 className='title'>MonkeyManifesto.com (2019 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='wordpress' src="/images/wp.png"></img></picture><p>WordPress</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='php' src="/images/php.svg"></img></picture><p>PHP</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='mysql' src="/images/mysql.png"></img></picture><p>MySQL</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='javascript' src="/images/js.png"></img></picture><p>Javascript</p>
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
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                It's a two-year-old WordPress website runs on an Ubuntu server, hosted on DigitalOcean, monetized with Ezoic ads.
                                Although it uses a free theme (Kandece), sometimes I modify the theme's CSS to fix some layout,
                                make it more responsive, and more to better adapt with the changes that I made with the website, such as installing new plugins
                                or showing ads.
                            </p>
                        </div>
                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <picture><img src="/images/flappy.jpg" alt="flappy" /></picture>
                        </div>
                        <div className="right">
                            <h2 className='title'>Flappy Bird Clone in Javascript (2021 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>

                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='javascript' src="/images/js.png"></img></picture><p>Javascript</p>
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
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                This is a Flappy Bird clone made using plain Javascript using ViteJS. It is playable on your browser
                                and can be played on PC by using Up Arrow key to jump and Space to restart the game. It is also playable on
                                mobile device, and you can tap the screen to jump.</p>
                            <h3>How it works</h3>
                            <p>
                                User visit the flappy.donprasetiyo.com on their browser. They will see a welcome screen, which pauses
                                the game temporarily until the user decide to play it by pressing Up Arrow key (or clicking on the screen), which also makes the
                                character jump, which triggers wing-flipping sound effect.
                            </p>
                            <p>
                                I use the original's Flappy Bird's sound effects to make the game a bit more fun to play.
                            </p>
                            <p>
                                There are one pipe and one hole that iterate every four seconds from the right screen to the left.
                                When user successfully passes the hole, the score counter increments and it will play the point sound effect.
                            </p>
                            <p>
                                When the character hit the pipe, it will fall and the game is over. If it simply falls to the ground,
                                the game is over. User will see a text showing their score and instruct them to press Space to restart the game.
                            </p>
                            <p>
                                When user restart the game, it will reset the score counter, pause and reset the pipe and hole animations,
                                setting the character's top position at 100px, and finally, restart the game interval.
                            </p>
                            <p>
                                The game has been designed to be playable on any PC screen and responsive on mobile.
                                I have made the game to generate the hole position between the top screen and the bottom screen,
                                so the character won't have to pass an invisible hole to get more points.
                            </p>
                            <p>
                                You can test the responsiveness by resizing your web browser window and then reloading the web page.
                                You can also play it on full-screen.
                            </p>
                            <a className='src-btn' href="https://flappy.donprasetiyo.com/" target="_blank" rel="noopener noreferrer">
                                Play in New Tab
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a className='src-btn' href="https://github.com/donprasetiyo/Flappy" target="_blank" rel="noopener noreferrer">
                                See the source code on Github
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>

                        </div>
                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <picture><img src="/images/this.jpg" alt="flappy" /></picture>
                        </div>
                        <div className="right">
                            <h2 className='title'>This website (2022 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>

                                        <li>
                                            <div className="image-text">
                                                <picture><img alt='javascript' src="/images/js.png"></img></picture><p>Javascript</p>
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
                                {/* <div className="changelog">
                                    <button onClick={(e) => growDiv(e)}>See Changelog <i className="fa-solid fa-caret-down"></i></button>
                                    <div className="wrapper">
                                        <div className="expand">
                                            <h2 id="version-1-1">Version 1.1.0</h2>
                                            <p className="released-on">Released on: 6/12/2022</p>
                                            <p>There are some changes in V1.1.0:</p>
                                            <h3 id="codes-refactored-">Codes refactored:</h3>
                                            <ul>
                                                <li>Some features, such as theme options, previously rely on plain Javascript. Now they&#39;re fully React, relying on state changes and involving React useContext hook to apply theme (see ThemeContext.jsx).</li>
                                                <li>Select theme now rely on CSS class added to the App component to apply. It now adds &quot;.dark&quot; when user selects dark theme, &quot;.light&quot; for light, &quot;.system&quot; for device settings. It adds &quot; &quot; when user hasn&#39;t selected any. This is possible thanks to useContext hook. Previously, I used CSS variables with attribute selectors (example: [data-theme=&quot;dark&quot;]).</li>
                                                <li>Fixing re-render on some useEffect hooks.</li>
                                            </ul>
                                            <h3 id="features-interface-changes-">Features/interface changes:</h3>
                                            <ul>
                                                <li>Adding contact form with EmailJS and reCAPTCHA. Email service ID and other sensitive info are stored on .ENV file.</li>
                                                <li>Adding reusable changelog collapsible.</li>
                                                <li>Theme menu now shows with CSS&#39;s clip: rect() transition. Previously, this wasn&#39;t possible due to the details element usage (<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details</a>), and applying transition to it isn&#39;t possible.</li>
                                                <li>Adding hover transition to navigation links drop-down menu.</li>
                                                <li>Fixing link color on footer on dark theme.</li>
                                                <li>&quot;Device settings&quot; instead of &quot;Default&quot; on theme options menu.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <p className="description">
                                It wouldn't be enough without talking about this website itself. DonPrasetiyo.com is a portfolio site
                                that shows all of my personal projects, certifications, and more. It's
                                built primarily with React, and at this time, is a static site.</p>
                            <h3>Features</h3>
                            <p>
                                There are few worth-noting features that I added to this site:
                            </p>
                            <ul>
                                <li>
                                    <strong>Sticky navbar</strong>. You can try scrolling from top to the bottom and vice versa, and you will notice that
                                    the navbar sticks to the top and becomes smaller when you scroll down (on desktop), and goes back to normal when
                                    you scroll up.
                                </li>
                                <li>
                                    <strong>Three different theme options</strong>. Try clicking the theme switch button on the navbar, and you can choose between three
                                    theme options: dark mode, light mode, and device settings. For example, when you select the dark mode, appearance becomes dark
                                    which is nice when visiting this site in the dark or at night.
                                    The device settings follows your device settings (Windows, Mac, Android, and more). Selected theme will be saved in your
                                    browser cookies, so you don't have to switch after every time you reload.
                                </li>

                                <li>
                                    <strong>Responsive on mobile, tablet, and desktop</strong>. I use some flexboxes to make the website easier to read
                                    on smaller screens, but I also have added some media queries and others to help improve the appearance
                                    when it is visited on the smartphone. I also made the reCAPTCHA responsive.
                                </li>
                                <li>
                                    <strong>Tooltip with dismiss button</strong>. When you visit this site and a theme hasn't been selected yet, you will see a tooltip.
                                    After a theme is selected, configuration is saved on your browser cookies and this tooltip won't show. If you clear your
                                    cookies, the tooltip will pop up again after you reload.
                                </li>
                                <li><strong>Scroll to element with anchor</strong>. When you click the Project menu on the navbar, it will automatically scroll to my
                                    personal project list, with smooth-scrolling. The same thing will happen when you click the Contact menu.

                                </li>
                                {/* <li><strong>Reusable collapsible for changelog</strong>. This feature is reusable by simply copying its React component. The same function triggers
                                    height changes to expand.</li> */}
                                <li><strong>Contact form with EmailJS and reCAPTCHA</strong>. It's responsive, and email would send directly to my email. Email service ID and other sensitive info are stored on .ENV file.
                                </li>
                            </ul>
                            <p>More features will come soon.</p>
                            <a className='src-btn' href="https://github.com/donprasetiyo/donprasetiyo" target="_blank" rel="noopener noreferrer">
                                See the source code on Github
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel container">
                <div className="sub-container up center single">
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