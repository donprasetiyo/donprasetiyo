import { ILink } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

interface Navigation extends React.HTMLAttributes<HTMLElement>{
    links: ILink[]
}

export function Navigation({
  className,
  links,
  ...props
}: Navigation) {

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {
        links.length > 0 ?
        links.map((link) => (
          <Link
          key={link.href}
          to={link.href}
          className={'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'}
        >
          {link.content}
        </Link>
        ))
        : null
      }
    </nav>
  )
}