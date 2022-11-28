import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useState } from 'react';
import welcome from '../lotties/welcome.json'
import { type, type as loop } from '../utils/typical'

const Content = () => {


 

    useEffect(() => {
        //STUFF THAT YOU WANT TO RUN EVERY TIME THE PAGE RE-RENDERS.
        //TO RUN ONLY WHEN A SPECIFIC RENDER OCCURS, ADD DEPENDENCIES INSIDE [] AT THE BOTTOM.

        //BELOW CODE SHOULD RUN ON VANILLA JS AND WOULD LOOP. HOWEVER, ON REACT, IT NEVER GETS FIRED UNLESS
        //THE PAGE RE-RENDERS, WHICH IS WHY IT IS INSIDE THE EFFECT HOOK

        const steps = [1000, "Hi, I'm Don.", 1000, "I'm a front-end developer.", 1000, "...with experience in the backend."];
        var x = document.getElementById('target')
        //THIS FUNCTION DOESN'T TRIGGER RE-RENDER. ONLY RUNS ONCE, AND TYPICAL.JS TAKES CARE OF THE LOOP
        type(x, ...steps, loop);

        
    })




    return (
        <div id="content">
            <div className="panel container">
                <div className="sub-container single">
                    <div className='two-single'>
                        <h2 id="target"></h2>
                        <Player src={welcome} background="transparent" speed="1" style={{ height: '300px', width: '300px' }} loop controls autoplay />

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
                                    <img src="/src/assets/js.png"></img><p>Javascript</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <img src="/src/assets/html.png"></img><p>HTML</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <img src="/src/assets/css.png"></img><p>CSS</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <img src="/src/assets/vitejs.svg"></img><p>ViteJS</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <img src="/src/assets/react.svg"></img><p>React</p>
                                </div>
                            </li>
                            <li>
                                <div className="image-text">
                                    <img src="/src/assets/nodejs.png"></img><p>NodeJS</p>
                                </div>
                            </li>
                        </ul>
                    </div>
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
                            <img src="/src/assets/kompiwin.jpg" alt="kompiwin" />
                        </div>
                        <div className="right">
                            <h2 className='title'>Kompiwin.com (2014 - 2020)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/blogger.png"></img><p>Blogger.com (deprecated)</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/wp.png"></img><p>WordPress</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/js.png"></img><p>Javascript</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/html.png"></img><p>HTML</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/css.png"></img><p>CSS</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/php.svg"></img><p>PHP</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/mysql.png"></img><p>MySQL</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                This is a website that I used to make a living out of, which was then <strong>sold</strong> in 2020.
                                At the time of writing, the website is still running managed by someone else, <strong>but you can see
                                    my involvement in the website by accessing it through achrive.org.</strong>. Here are a few of the snapshots
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
                            <p>While I did have some front-end skills thanks to self-made Blogger templates and running a WordPress-based site
                                , I was interested more in SEO and running the website as a content site that was monetized using
                                Google AdSense (or Ezoic for MonkeyManifesto). Not until June 2022, I'm interested more in coding,
                                learning C# to make some Windows 11 apps with WinUI 3, that are used personally.
                            </p>
                            <p>
                                Now I have more interest in building websites and apps without a CMS, made with a backend framework instead,
                                one that I'm still learning now is NodeJS.
                            </p>
                        </div>

                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <img src="/src/assets/mm.jpg" alt="monkey manifesto" />
                        </div>
                        <div className="right">
                            <h2 className='title'>MonkeyManifesto.com (2019 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/wp.png"></img><p>WordPress</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/php.svg"></img><p>PHP</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/mysql.png"></img><p>MySQL</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/js.png"></img><p>Javascript</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/html.png"></img><p>HTML</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/css.png"></img><p>CSS</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                It's a two-year-old WordPress website runs on an Ubuntu server, hosted by DigitalOcean, monetized with Ezoic ads.
                                Although it uses a free theme (Kandece), sometimes I modify the theme's CSS to fix some layout,
                                make it more responsive, and more to better adapt with the changes that I made with the website, such as installing new plugins
                                or showing ads.
                            </p>
                        </div>
                    </div>
                    <div className='two-single'>
                        <div className="left">
                            <img src="/src/assets/mm.jpg" alt="flappy" />
                        </div>
                        <div className="right">
                            <h2 className='title'>Flappy Bird Clone in Javascript (2022 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>

                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/js.png"></img><p>Javascript</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/html.png"></img><p>HTML</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/css.png"></img><p>CSS</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/vitejs.svg"></img><p>ViteJS</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="description">
                                This is a Flappy Bird clone made using plain Javascript using ViteJS. It is playable on your browser
                                and at this time can only be played on PC by using Up Arrow key to jump and Space to restart the game.</p>
                            <h3>How it works</h3>
                            <p>
                                User visit the flappy.donprasetiyo.com on their browser. They will see a welcome screen, which pauses
                                the game temporarily until the user decide to play it by pressing Up Arrow key, which also makes the
                                character jump, which triggers wing-flipping sound effect.
                            </p>
                            <p>
                                I use the original's Flappy Bird's sound effects to make the game a bit more fun to play.
                            </p>
                            <p>
                                There are one pipe and one hole that iterate every four seconds from the right screen to the left.
                                When user succesfully pass the hole, the score counter increments and it will play the point sound effect.
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
                                The game has been designed to be playable on any PC screen and responsive (except mobile).
                                I have made the game to generate the hole position between the top screen and the bottom screen,
                                so the character won't have to pass invisible hole to get more points.
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
                            <img src="/src/assets/mm.jpg" alt="flappy" />
                        </div>
                        <div className="right">
                            <h2 className='title'>This website (2022 - now)</h2>
                            <div className="made-with">
                                <h3>Made with:</h3>
                                <div>
                                    <ul className='image-list'>

                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/js.png"></img><p>Javascript</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/html.png"></img><p>HTML</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/css.png"></img><p>CSS</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/vitejs.svg"></img><p>ViteJS</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/react.svg"></img><p>React</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="image-text">
                                                <img src="/src/assets/nodejs.png"></img><p>NodeJS</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
                                    Sticky navbar. You can try scrolling from top to the bottom and vice versa, and you will notice that
                                    the navbar sticks to the top and becomes smaller when you scroll down (on desktop), and goes back to normal when
                                    you scroll up.
                                </li>
                                <li>
                                    Three different theme options. Try clicking the theme switch button on the navbar, and you choose between three
                                     theme options: dark mode, light mode, and default. For example, when you select the dark mode, appearance becomes dark
                                    which is nice when visiting this site in the dark or at night. 
                                     The default follows your device settings (Windows, Mac, Android, and more). Selected theme will be saved in your
                                      browser cookies, so you don't have to switch after every time you reload.
                                </li>
                                
                                <li>
                                    Responsive on mobile, tablet, and desktop. I use some flexboxes to make the website easier to read
                                    on smaller screens, but I also have added some media queries and others to help improve the appearance
                                    when it is visited on the smartphone.
                                </li>
                                 <li>
                                    Tooltip with dismiss button. When you visit this site and a theme hasn't been selected yet, you will see a tooltip.
                                    After a theme is selected, configuration is saved on your browser cookies and and this tooltip won't show. If you clear your
                                    cache, the tooltip will pop up again after you reload.
                                </li>
                                <li>Scroll to element with anchor. When you click the Project menu on the navbar, it will automatically scroll to my 
                                    personal project list, with smooth-scrolling. The same thing will happen when you click the Contact menu.

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
                                                <img src="/src/assets/scrimba-js-deep-dive.jpg"></img>
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
           <footer id="contact">
            <div className="footer">
                <h2>Contact:</h2>
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
           </footer>
        </div>
    );
}

export default Content;