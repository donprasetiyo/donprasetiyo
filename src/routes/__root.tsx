import Header from '@/components/header'
import { MainNavigation } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import Logo from '@/components/logo'
import { ModeToggle } from '@/components/theme-toggle'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <div className="flex flex-col md:flex min-h-screen font-satoshi">
                    <Header >
                        <div className='flex h-12 items-center px-7 relative w-full border-b rounded-none mt-0 lg:w-[54rem] m-auto lg:border border-border lg:rounded-lg p-[1.75rem_0.75rem_1.75rem_0.75rem] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20 lg:mt-4'>
                            <div className="flex items-center justify-start ">
                                <Link to="/" className="flex items-center">
                                    <Logo className="fill-foreground w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" width="30" height="30" viewBox="0 0 300 300" />
                                    <h1 className="text-base sm:text-xl ml-[2px] font-normal">{'Don Prasetiyo'}</h1>
                                </Link>
                            </div>
                            <div className="ml-auto flex justify-end flex-1 items-center space-x-4">
                                <MainNavigation />
                                <MobileNav />
                                <ModeToggle />
                            </div>
                        </div>
                    </Header>
                    <main className='flex flex-col flex-1 space-y-4'>
                        <Outlet />
                    </main>
                    <footer className="w-[90%] mx-auto sm:w-full sm:mx-2 text-center border-border border rounded-md lg:w-[34rem] lg:mx-auto p-2 mb-4">
                        <p>Built by <a href={'https://x.com/donprasetiyo'} target="_blank">@donprasetiyo</a>.</p>
                    </footer>
                </div>
               {import.meta.env.DEV && <TanStackRouterDevtools />}
            </>
        )
    },
})