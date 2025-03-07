import React from 'react';
import { Link } from 'react-scroll';
import { TfiAlignJustify } from "react-icons/tfi";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

const NavBar = () => {
    return (
        <Disclosure as="nav" className="flex sticky top-5 h-15 sm:h-10 lg:h-25 mb-20 sm:mb-20 bg-primary bg-opacity-30 shadow-md rounded-2xl z-1000">
            <DisclosureButton className="flex justify-evenly w-full px-8 my-8 mx-12">
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

            </DisclosureButton>
        </Disclosure>
    );
}

export default NavBar;
