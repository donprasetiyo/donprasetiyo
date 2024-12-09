import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react"
import { useRef } from "react";

const Section = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.section
            className={cn(`mx-auto flex flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 max-w-3xl px-4 sm:px-[unset]`, className)}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >{children}
        </motion.section>
    );
}

export default Section;