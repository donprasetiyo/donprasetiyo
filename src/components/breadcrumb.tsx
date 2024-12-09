import { Slash } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { capitalizeFirstLetter, cn } from "@/lib/utils";

interface CustomBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}

export function CustomBreadcrumb({ className, ...props }: CustomBreadcrumbProps) {
    const [currentPageTitle, setCurrentPageTitle] = useState('');
    const location = useLocation();
    const { pathname } = location;

    if (pathname === '/') {
        return null;
    }

    const pathSegments = pathname
        .split('/')
        .filter(segment => segment.length > 0)
        .map((segment, index, array) => ({
            label: capitalizeFirstLetter(segment),
            path: `/${array.slice(0, index + 1).join('/')}`,
            isLast: index === array.length - 1
        }));

    useEffect(() => {
        const title = document.title.split('|')[0].trim();
        if (title) {
            setCurrentPageTitle(title);
        }
    }, [pathname]);

    return (
        <Breadcrumb className={className} {...props}>
            <BreadcrumbList className="relative">
                {pathSegments.map((segment, index) => (
                    <Fragment key={segment.path}>
                        {index > 0 && (
                            <BreadcrumbSeparator>
                                <Slash size={15} />
                            </BreadcrumbSeparator>
                        )}
                        <BreadcrumbItem
                            className={cn(
                                "relative overflow-hidden whitespace-nowrap",
                                segment.isLast && currentPageTitle 
                                    ? "fading-text-to-right" 
                                    : ""
                            )}
                        >
                            {segment.isLast ? (
                                <span>{segment.label}</span>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link to={segment.path}>{segment.label}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}