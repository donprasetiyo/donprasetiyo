import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import * as React from "react"
import { useMetaColor } from "@/hooks/use-meta-color"

interface MobileLinkProps extends React.ComponentProps<typeof Link> {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
    to,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    return (
        <Link
            to={to}
            onClick={() => {
                onOpenChange?.(false)
            }}
            className={cn("text-base", className)}
            {...props}
        >
            {children}
        </Link>
    )
}

export function MobileNav() {
    const [open, setOpen] = React.useState(false)
    const { setMetaColor, metaColor } = useMetaColor()

    const onOpenChange = React.useCallback(
        (open: boolean) => {
            setOpen(open)
            setMetaColor(open ? "#09090b" : metaColor)
        },
        [setMetaColor, metaColor]
    );

    const links = [
        {
            href: '/contact',
            content: 'Contact'
        }
    ]

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 xl:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="!size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[60svh] p-0 border border-popover bg-background">
                <div className="overflow-auto p-6">
                    <div className="flex flex-col space-y-3">
                        {
                            links.map((item) => (
                                <MobileLink
                                    key={item.href}
                                    to={item.href}
                                    onOpenChange={setOpen}
                                >
                                    {item.content}
                                </MobileLink>
                            ))
                        }
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}