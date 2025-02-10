import React from 'react';
import './styles/navbar.css';

const NavBar = () => {

    return (
        <nav>
            <ul id="nav-mobile">
                <li><a href="#hero">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;