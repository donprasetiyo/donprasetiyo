import { cn } from "@/lib/utils";

const Subtitle = ({className, children}:{className?: string, children:React.ReactNode}) => {
    return (
        <span className={cn(`max-w-[750px] text-center text-lg font-medium text-foreground`, className)}>{children}</span>
    );
}
 
export default Subtitle;