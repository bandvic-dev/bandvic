import Link from "next/link"

export function Header() {
  
    return (<>
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <Link href="/" ><a className="logo">BALANCO</a></Link>
                    <ul className="menu">
                        <li className="menu__item"><Link href="/"><a className="menu__link">Home</a></Link></li>
                        <li className="menu__item"><Link href="/resume"><a className="menu__link">Resume</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}
  
export default Header