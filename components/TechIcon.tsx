interface TechIconProp {
    name: string;
    alt: string;
    src: string;
}

const TechIcon = ({alt, src, name}:TechIconProp) => {
    return (
        <li className='inline-block mx-[15px] my-0'>
            <div className="flex items-center">
                <picture><img className='object-cover h-[70px]' alt={alt} src={src}></img></picture><p>{name}</p>
            </div>
        </li>
    );
}

export default TechIcon;