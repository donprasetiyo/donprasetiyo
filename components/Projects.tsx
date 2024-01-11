import Image from "next/image";
import { useEffect } from "react";
import Project from "./Project";
import kompiwin from '../public/images/kompiwin.jpg';
import mm from '../public/images/mm.jpg';
import flappy from '../public/images/flappy.jpg';
import meta from '../public/images/meta.jpg';
import { Projects } from "../constants/Projects";

const ProjectsSection = () => {

    

    return (
        <>
            <div className="">
                <h2 className="mt-[20px] dark:text-[#fafafa]">Personal Projects</h2>
                <p className="dark:text-[#fafafa] m-0">Here are some personal projects that I have built:</p>
            </div>
            <div className="mb-[20px] w-[100%]">
                {Projects.map((item, index) => (
                    <Project title={item.title} image={item.image} alt={item.alt} category={item.category} details={item.details} url={item.url} github={item.github} key={index}/>
                ))}
            </div>
        </>
    );
}

export default ProjectsSection;