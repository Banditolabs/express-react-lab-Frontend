import {Link} from "react-router-dom"
import './styles.scss'

export default function Header (props) {
    // inline style for the nav tag
 

    return (
        <header>
            <nav className="header-nav">
                <Link className="nav-item" to="/">HOME</Link>
                <Link className="nav-item" to="/about">ABOUT</Link>
                <Link className="nav-item" to="/projects">PROJECTS</Link>
            </nav>
        </header>
    )
}