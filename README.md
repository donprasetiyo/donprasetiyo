DonPrasetiyo.com is a portfolio site that shows all of my personal projects, certifications, and more. It's built primarily with React, and at this time, is a static site.

### Features

There are few worth-noting features that I added to this site:

*   **Sticky navbar**. You can try scrolling from top to the bottom and vice versa, and you will notice that the navbar sticks to the top and becomes smaller when you scroll down (on desktop), and goes back to normal when you scroll up.
*   **Three different theme options**. Try clicking the theme switch button on the navbar, and you can choose between three theme options: dark mode, light mode, and device settings. For example, when you select the dark mode, appearance becomes dark which is nice when visiting this site in the dark or at night. The device settings follows your device settings (Windows, Mac, Android, and more). Selected theme will be saved in your browser cookies, so you don't have to switch after every time you reload.
*   **Responsive on mobile, tablet, and desktop**. I use some flexboxes to make the website easier to read on smaller screens, but I also have added some media queries and others to help improve the appearance when it is visited on the smartphone. I also made the reCAPTCHA responsive.
*   **Tooltip with dismiss button**. When you visit this site and a theme hasn't been selected yet, you will see a tooltip. After a theme is selected, configuration is saved on your browser cookies and this tooltip won't show. If you clear your cookies, the tooltip will pop up again after you reload.
*   **Scroll to element with anchor**. When you click the Project menu on the navbar, it will automatically scroll to my personal project list, with smooth-scrolling. The same thing will happen when you click the Contact menu.
*   **Reusable collapsible for changelog**. This feature is reusable by simply copying its React component. The same function triggers height changes to expand.
*   **Contact form with EmailJS and reCAPTCHA**. It's responsive, and email would send directly to my email.

More features will come soon.

Version 1.1.0
-------------

Released on: 6/12/2022

There are some changes in V1.1.0:

### Codes refactored:

*   Some features, such as theme options, previously rely on plain Javascript. Now they're fully React, relying on state changes and involving React useContext hook to apply theme (see ThemeContext.jsx).
*   Select theme now rely on CSS class added to the App component to apply. It now adds ".dark" when user selects dark theme, ".light" for light, ".system" for device settings. It adds " " when user hasn't selected any. This is possible thanks to useContext hook. Previously, I used CSS variables with attribute selectors (example: \[data-theme="dark"\]).
*   Fixing re-render on some useEffect hooks.

### Features/interface changes:

*   Adding contact form with EmailJS and reCAPTCHA. Email service ID and other sensitive info are stored on .ENV file.
*   Adding reusable changelog collapsible.
*   Theme menu now shows with CSS's clip: rect() transition. Previously, this wasn't possible due to the details element usage ([https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)), and applying transition to it isn't possible.
*   Adding hover transition to navigation links drop-down menu.
*   Fixing link color on footer on dark theme.
*   "Device settings" instead of "Default" on theme options menu.

# PLANS

My plans for the future:
*   Migrating to NextJS to create SEO-friendly blog functionality, and posts are stored on MongoDB.