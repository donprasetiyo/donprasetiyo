import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react"
import { useRef } from "react";

const Title = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.h1
            className={cn(`text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance`, className)}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {children}
        </motion.h1>
    );
}

export default Title;