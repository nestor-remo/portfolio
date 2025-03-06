import React from 'react';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { FaFileAlt } from 'react-icons/fa';

function Icon ({ icon, link}) {
    return (
        <div onClick={() => window.open(link)} className='cursor-pointer text-2xl'>
            {icon}
        </div>
    )
}

const About = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-left text-5xl font-bold"> Hello, I'm <span className="text-green-600">Nestor</span></h1>
            <p className="text-left"> Currently studying computer science <a className="hover:underline text-green-600" href="https://www.fullerton.edu/about/default.aspx" target='_blank'>@CSUF. </a>
                I'm passionate about web development and open source. I'm always looking for new opportunities to learn and grow as a developer.
                Proficient in React, Javascript/Typescript, Express.js, and Python.
            </p>
            <div className="flex gap-5 w-full">
                <Icon icon={<SiGithub />} link='https://github.com/nestor-remo'/>
                <Icon icon={<SiLinkedin />} link='https://www.linkedin.com/in/nestor-remo/'/>
                <Icon icon={<SiGmail />} link='mailto:nestorreateguimori@gmail.com'/>
                <Icon icon={<FaFileAlt />} link='https://github.com/nestor-remo/resume/blob/main/resume.pdf'/>
            </div>
        </div>
    )
}

export default About;