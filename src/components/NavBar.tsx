import { Link } from 'react-router-dom';
import './NavBar.scss';

export function NavBar() {
    return <header>
        <div className='logo'>
            <Link to="/">Anirudh Giran</Link>
        </div>
        <nav>
            <Link to="/">00. Home</Link>
            <a href="#about">01. About Me</a>
            <a href='#work'>03. Work</a>
            <Link to="/projects">04. Projects</Link>
        </nav>
    </header>
}