import React from 'react';
import { Link } from 'react-scroll';
import './styles/navbar.css';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <Link to="about" className="link" smooth={true} duration={500} >About</Link>
                <Link to="experience" className="link" smooth={true} duration={500}>Experience</Link>
                <Link to="projects" className="link" smooth={true} duration={500}>Projects</Link>
                <Link to="skills" className="link" smooth={true} duration={500}>Skills</Link>
            </ul>
        </nav>
    );
}

export default NavBar;