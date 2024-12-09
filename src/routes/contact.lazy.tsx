import Section from '@/components/landing/section'
import Subtitle from '@/components/landing/subtitle'
import Title from '@/components/landing/title'
import SocialIcons from '@/components/social'
import { buttonVariants } from '@/components/ui/button'
import { useDynamicTitle } from '@/hooks/dynamic-title'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact')({
    component: Contact,
})

function Contact() {
    useDynamicTitle('Contact')
    return (
        <Section className="">
            <Title>Contact</Title>
            <Subtitle>You can contact me through email address or by social profiles</Subtitle>
            <a href='mailto:dprasetiyo6@gmail.com' target="_blank" className={cn(buttonVariants())}>
                Get in touch</a>
            <SocialIcons />
        </Section>
    )
}