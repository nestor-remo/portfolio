import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const NavBar = () => {

    return (
        <nav>
            <ul id="nav-mobile">
                <li><Link to ="/"><button>About</button></Link></li>
                <li><Link to="/experience"><button>Experience</button></Link></li>
                <li><Link to="/projects"><button>Projects</button></Link></li>
                <li><Link to="/contact"><button>Contact</button></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;