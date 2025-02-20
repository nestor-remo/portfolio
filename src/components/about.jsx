import React from 'react';

function Icon ({name, icon}) {
    return (
        <div className='flex flex-col items-center w-[calc(25%-20px)] text-xl'>
            {icon}
            <p>{name}</p>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h1 className="text-left text-3xl font-bold"> Hello, I'm <span className="text-green-600">Nestor</span></h1>
            <p className="text-left"> Currently studying computer science <a className="hover:underline text-green-600" href="https://www.fullerton.edu/about/default.aspx" target='_blank'>@CSUF. </a>
                I'm passionate about web development and open source. I'm always looking for new opportunities to learn and grow as a developer.
                Proficient in React, Javascript/Typescript, Express.js, and Python.
            </p>
            <br></br>
        </div>
    )
}

export default About;