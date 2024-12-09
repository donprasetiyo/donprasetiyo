import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ReadMoreButtonProps {
  children: React.ReactNode
  maxHeight: number
}

export default function ReadMoreButton({ children, maxHeight }: ReadMoreButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.scrollHeight > maxHeight)
    }
  }, [children, maxHeight])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative">
      <motion.div
        ref={contentRef}
        initial={false}
        animate={{ height: isExpanded ? "auto" : maxHeight }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <Button onClick={toggleExpand} variant="outline" size="sm">
              {isExpanded ? "Read less" : "Read more"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

