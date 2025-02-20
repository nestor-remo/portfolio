import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="flex sticky top-5 h-25 bg-primary bg-opacity-30 shadow-md rounded-2xl z-1000">
            <ul className="flex justify-evenly w-full px-8 my-8 mx-12">
                <Link 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-2xl font-display font-medium font-spartan hover:text-green-600 cursor-pointer"
                >
                    About
                </Link>
                <Link 
                    to="experience" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-2xl font-display font-medium font-spartan hover:text-green-600 cursor-pointer"
                >
                    Experience
                </Link>
                <Link 
                    to="projects" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-2xl font-display font-medium font-spartan hover:text-green-600 cursor-pointer"
                >
                    Projects
                </Link>
                <Link 
                    to="skills" 
                    smooth={true} 
                    duration={500} 
                    className="text-black text-2xl font-display font-medium font-spartan hover:text-green-600 cursor-pointer"
                >
                    Skills
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
