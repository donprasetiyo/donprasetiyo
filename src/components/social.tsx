import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from "framer-motion"

const socialLinks = [
  { href: "mailto:dprasetiyo6@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/donprasetiyo/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/donprasetiyo/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/donprasetiyo", icon: Twitter, label: "Twitter" },
]

export default function SocialIcons() {
  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

