import { cn } from "@/lib/utils";

const Description = ({className, children}:{className?: string, children:React.ReactNode}) => {
    return (
        <span className={cn(`max-w-[750px] text-center text-base font-normal text-foreground`, className)}>{children}</span>
    );
}
 
export default Description;