


const Header = ({ children }: { children: React.ReactNode }) => {

    return (
        <header className={`border-b top-0 z-50 w-full border-border sticky border-none`}>
            {children}
        </header>
    );
}

export default Header;