interface SocialIconProp {
    href: string,
    iconClass:string
}

const SocialIcon = ({href, iconClass}: SocialIconProp) => {
    return (
        <li className='inline'>
            <a className='dark:text-[#fafafa] hover:dark:text-[#71bcc6] duration-200' href={href} target="_blank" rel="noopener noreferrer">
                <i className={`${iconClass} m-[15px] text-[30px] `}></i>
            </a>
        </li>
    );
}

export default SocialIcon;