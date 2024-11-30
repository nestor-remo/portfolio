import React from 'react';
import Card from './card';

const Project = () => {
    const projects = [
        {
            title: 'Project 1',
            skills: 'React, Express, Railway',
            description: 'Developed a full stack application',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        },
        {
            title: 'Project 2',
            skills: 'React, Express, Railway',
            description: 'Developed a full stack application',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        },
        {
            title: 'Project 3',
            skills: 'React, Express, Railway',
            description: 'Developed a full stack application',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        }
    ]
    

    return (
        <div>
            <h1>Projects</h1>
            <div className='projects'>
                {projects.map((project, index) => {
                    return (
                    <Card key={index} title={project.title} description={project.description} />
                    )
                })}
            </div>
        </div>
    )
}

export default Project;