import Image from "next/image";
import { useEffect } from "react";
import Project from "./Project";
import kompiwin from '../public/images/kompiwin.jpg';
import mm from '../public/images/mm.jpg';
import flappy from '../public/images/flappy.jpg';
import meta from '../public/images/meta.jpg';

const Projects = () => {

    const KompiwinDetails = () => {
        return (
            <p>This website was made with WordPress. I sold the site in 2020. Deployed in DigitalOcean, on an Ubuntu server. Previously was a Blogger.com site with a template that I made myself using HTML and CSS. See my another discontinued Blogger template on <a href="https://www.deviantart.com/donyprasetiyo/art/Renosif-Free-Premium-Blogger-Template-508106620" target="_blank" rel="noopener noreferrer">DeviantArt</a>.</p>
        );
    }

    const MMDetails = () => {
        return (
            <>
                <p>This was a <strong>NextJS</strong> blog (previously WordPress) that was deployed on <strong>AWS Lightsail</strong>, running on an Ubuntu server, and its CSS made with Tailwind CSS, in <strong>TypeScript</strong>. It was responsive and SEO friendly.</p>
                <p>Previously was a WordPress blog, so it used a MySQL database to store the blog posts. It was SSR and purposely made to get organic traffic from search engines, monetized with Ezoic, so its tech SEO and its content is regularly carefully taken care of.</p>
                <p>This site is discontinued, and I let the domain expired.</p>
            </>
        );
    }

    const FlappyDetails = () => {
        return (
            <p>This is a Flappy Bird clone in JavaScript, that is also deployed on AWS Lightsail. It is a static site, and the game is playable on mobile and desktop.</p>
        );
    }

    const MetaDetails = () => {
        return (
            <p>A portfolio site that contains all of my projects, skills, certifications, and more. It is made with NextJS and Tailwind, in <strong>TyepScript</strong>.</p>
        );
    }

     const AIDetails = () => {
        return (
            <p>Currently building an AI SaaS (software as a service) that is not production-ready yet. It is a collection of AI tools with usage-based prepaid payment system. It uses Discord as authentication, and payment with PayPal Checkout. I use Lucia Auth, Planetscale (MySQL), Prisma as schema definition, Kysely as query builder, Next.js as full-stack framework that is deployed on Lambda and S3 using infra-as-code tool SST (sst.dev).</p>
        );
    }

    return (
        <>
            <div className="listing-title">
                <h2 className="mt-[20px]">Personal Projects</h2>
                <p>Here are some personal projects that I have built:</p>
            </div>
            <div className="mb-[20px] w-[100%]">
                <Project title="Kompiwin (2014-2020) (Sold)" image={kompiwin} alt={'kompiwin'} category='personal' details={<KompiwinDetails />} url={'https://kompiwin.com'} github={null} />
                <Project title="MonkeyManifesto (2019-2023) (Discontinued)" image={mm} alt={'mm'} category='personal' details={<MMDetails />} url={'https://monkeymanifesto.com'} github={null} />
                <Project title="Flappy Bird Clone in JavaScript (2022-now)" image={flappy} alt={'flappy'} category='personal' details={<FlappyDetails/>} url={'https://flappy.donprasetiyo.com/'} github={'https://github.com/donprasetiyo/Flappy'}/>
                <Project title="DonPrasetiyo.com (2022-now)" image={meta} alt={'meta'} category='meta'details={<MetaDetails/>} url={'/'} github={'https://github.com/donprasetiyo/donprasetiyo'} />
                <Project title="AI SaaS That Is Not Production-Ready (2023-now)" image={null} alt={'meta'} category='personal'details={<AIDetails/>} url={null} github={null} />
            </div>
        </>
    );
}

export default Projects;