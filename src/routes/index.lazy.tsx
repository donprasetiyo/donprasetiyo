import { ImageCarousel } from '@/components/carousel'
import TextOnlyFeature from '@/components/landing/item'
import Section from '@/components/landing/section'
import Subtitle from '@/components/landing/subtitle'
import Title from '@/components/landing/title'
import WithImage from '@/components/landing/with-image'
import WithVideo from '@/components/landing/with-video'
import SocialIcons from '@/components/social'
import { buttonVariants } from '@/components/ui/button'
import { techSliders } from '@/constants/tech'
import { useDynamicTitle } from '@/hooks/dynamic-title'
import { cn } from '@/lib/utils'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    useDynamicTitle('Dony Prasetiyo, a software developer')
    return (
        <>
            <Section className="">
                <Title>
                    Building software that users will love</Title>
                <Subtitle>Helping companies to build solutions for their software needs.</Subtitle>
                <a href='mailto:dprasetiyo6@gmail.com' target="_blank" className={cn(buttonVariants())}>
                    Get in touch</a>
                <SocialIcons />
            </Section>
            <Section className='w-[70%] sm:w-auto'>
                <Subtitle>Tools I have experience with:</Subtitle>
                <ImageCarousel items={techSliders} />
            </Section>
            <div className="bg-secondary">
                <Section className="max-w-5xl">
                    <Title className="md:text-4xl">Projects</Title>
                    <WithVideo
                        type="textOnLeft"
                        imageSource="/project/stableoutput.mp4"
                        title="Stableoutput.com (2024)"
                        subtitle="A bring-your-own-API-key, chat client for OpenAI and Anthropic models."
                        description="Made with: Remix.run (the SSR React framework) for the frontend, Postgres for the database, Nestjs with TRPC for the backend, user authentication with Lucia, and Docker for deployment in an Ubuntu server. All in a single monorepo with Turborepo. Additionally, Tailwind for styling, Typescript for type-check, and Github Actions for automated CI/CD."
                        button={
                            <>
                                <a href='https://stableoutput.com/' target='_blank' className={buttonVariants()}>Visit website</a>
                            </>
                        }
                        list={
                            [
                                "Developed a lifetime license payment system using PayPal, enabling users to unlock exclusive features and extended limits with a one-time payment.",
                                "Designed and implemented a subscription management system with PayPal, supporting monthly extensions, subscription-specific features and limits, and real-time cancellation and renewal handling via webhook integration.",
                                "Created a billing management feature, including client-side processed invoices, downloadable receipts, and detailed billing history.",
                                "Built an advanced chat assistant supporting model selection from OpenAI to Anthropic, letting users use their API keys which are stored securely in localStorage for direct API calls on the browser while persisting chat data, settings, and files on the server.",
                                "Integrated Google SSO authentication for user registration and login processes.",
                                "Developed an admin dashboard for managing business-critical configurations, including user subscription plans, license-based feature access, and pricing adjustments."
                            ]
                        }
                    >
                    </WithVideo>
                    <WithImage
                        type="textOnRight"
                        imageSource="/project/flappy.jpg"
                        title="Flappy bird clone (2022)"
                        subtitle="A flappy bird clone game playable on the browser (desktop and mobile). Simply tap or click to jump to play."
                        description="Made with: Javascript with Vite."
                        button={
                            <>
                                <a href='https://flappy-iota.vercel.app/' target='_blank' className={buttonVariants()}>Visit website</a>
                            </>
                        }
                    />
                    <WithImage
                        type="textOnLeft"
                        imageSource="/project/kompiwin.jpg"
                        title="Kompiwin.com (sold in 2020)"
                        subtitle="A self-hosted Wordpress blog that I sold in 2020. Its traffic peak at 15000 pageviews/month (2019)."
                        button={
                            <>
                                <a href='https://kompiwin.com/' target='_blank' className={buttonVariants()}>Visit website</a>
                            </>
                        }
                    />
                </Section>
            </div>
            <div className="">
                <Section className="max-w-5xl ">
                    <Title className="md:text-4xl">Experience</Title>
                    <TextOnlyFeature
                        title='PT. Fuse Digital Asia (2023-2024)'
                        subtitle='Web Developer'
                        description='Designed and maintained responsive websites, collaborated with teams to enhance user experience, optimized performance and technical SEOs, integrated APIs, and resolved technical issues, all while leveraging industry trends to support innovative digital advertising strategies.'
                        list={[
                            'Developed and maintained responsive web solutions for a digital advertising company using HTML, CSS, JavaScript, and frameworks such as Nextjs.',
                            'Collaborated with design, marketing, and product teams to create user-friendly interfaces that drive engagement and enhance user experience.',
                            'Optimized website performance and ensured cross-browser compatibility to support advertising campaigns.',
                            'Integrated APIs and third-party services to enhance functionality and streamline digital advertising processes.',
                            'Participated in code reviews and contributed to team knowledge sharing to foster innovation in digital advertising strategies.',
                            'Troubleshot and resolved technical issues promptly to ensure seamless operation of advertising platforms.',
                            'Stayed updated with industry trends and best practices to continuously improve skills and support cutting-edge advertising solutions.'
                        ]}
                    />
                    <TextOnlyFeature
                        title='PT. Menangkan Masa Depan (2022-2023)'
                        subtitle='Fontend Developer'
                        description='Created and maintained interactive landing pages and applications that integrate with blockchain technologies.'
                        list={[
                            'Developed and maintained interactive landing pages and applications for a Web3 company using HTML, CSS, JavaScript, and frontend frameworks with Nextjs.',
                            'Developed blockchain payment solutions, enabling transactions through the MetaMask browser extension.',
                            'Optimized frontend performance and ensured compatibility across various devices and browsers.',
                        ]}
                    />
                    <TextOnlyFeature
                        title='CV. Growing Publishing (2018)'
                        subtitle='Web Developer'
                        description='Specialized in building and maintaining WordPress-based websites. Implemented landing pages, e-commerce functionality, and integrated Midtrans as the payment gateway to facilitate online transactions for Indonesian users.'
                        list={[
                            'Developed and maintained WordPress websites for a book publishing company, focusing on landing pages, e-commerce functionality, as well as technical SEO.',
                            'Integrated Midtrans as the payment gateway to enable secure and efficient online transactions.',
                            'Collaborated with design and marketing teams to create visually appealing and user-friendly interfaces.',
                            'Conducted regular updates and maintenance to ensure website security and functionality.'
                        ]}
                    />
                </Section>
            </div>
        </>

    )
}