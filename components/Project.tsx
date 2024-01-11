import Image from "next/image";
import { useState } from "react";

const Details = (props: any) => {
    return (
        <div className={`fixed top-0 bottom-0 left-0 right-0 z-[2] bg-[#cfe9eb] border-dotted border-2 border-[#555] rounded-[10px] text-[#555] p-[10px_15px] w-[960px] h-fit m-auto ${props.shown ? 'visible transition-all scale-100 opacity-100' : 'fixed invisible transition-all scale-75 opacity-0'} max-[1020px]:w-[90%] dark:bg-[#1f4648]`}>
            <div className="flex flex-row justify-center items-center max-[840px]:flex-col max-[540px]:mt-[25px]">
                <Image className="w-[400px] max-[840px]:w-[100%]" src={props.image} alt={props.alt}></Image>
                <div>
                    <h2 className="text-[25px] m-[10px]">{props.title}</h2>
                    <h3 className="text-[18px] m-[10px]">Details:</h3>
                    <div className="m-[10px] details overflow-y-auto max-[540px]:max-h-[120px]">
                        {props.details}
                    </div>
                    <button className="m-[10px]" disabled={props.github ? false : true}>
                        <a className={`src-btn`} href={props.github} target="_blank" rel="noopener noreferrer">
                            See the source code on Github
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </button>
                    <button className="m-[10px] " disabled={props.url ? false : true}>
                        <a className={`src-btn`} href={props.url} target="_blank" rel="noopener noreferrer">
                            Visit the site
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </button>
                </div>
            </div>
            <button onClick={props.onClose}><i className="fa-solid fa-xmark text-[30px] absolute right-[5px] top-[3px] z-[2] dark:text-[#fafafa]"></i></button>
        </div>
    )
}

const Project = (props: any) => {

    const [openDetail, setOpenDetail] = useState(false);

    function openProject() {
        setOpenDetail((prev) => !prev)
    }

    return (
        <>
            <div className="w-[200px] inline-block align-top bg-[#c3e4e5] text-[#555] cursor-pointer m-[20px] dark:bg-[#1f4648] dark:text-[#fafafa] text-center rounded-[10px] hover:bg-[#a4dada] transition-all duration-[0.5s] max-[540px]:w-[90%] hover:scale-110" onClick={() => openProject()}>
                <div className='rounded-[10px_10px_0_0] relative'>
                    <Image src={props.image} alt={props.alt} className='rounded-[10px_10px_0_0] w-[200px] max-[540px]:w-[100%]' />
                    <span className="absolute bottom-0 z-[1] bg-[#2d7179] text-[#fafafa] text-[10px] p-[5px] left-0 rounded-[0_5px_0_0] uppercase">{props.category}</span>
                </div>
                <h3 className="p-[5px] max-[540px]:p-[10px]">{props.title}</h3>
            </div>
            <Details shown={openDetail} title={props.title} onClose={() => setOpenDetail(false)} image={props.image} alt={props.alt} details={<props.details/>} github={props.github} url={props.url}/>
        </>
    );
}

export default Project;