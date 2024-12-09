import { Navigation } from "./vite-nav";


const MainNavigation = () => {

    const links = [
        {
            href: '/contact',
            content: 'Contact'
        },
    ]
    return (
        <Navigation links={links} className="hidden xl:block"/>
    );
}

export { MainNavigation };