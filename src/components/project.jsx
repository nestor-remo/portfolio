import React from 'react';

function Card({ title, description, skills, links }) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{skills}</p>
            <div className='links'>
                <a href={links.github}>GitHub</a>
                <a href={links.website}>Website</a>
            </div>
        </div>
    );
}

const Project = () => {
    const projects = [
        {
            title: 'Tempestive',
            skills: 'React, WeatherBit API',
            description: 'Weather web-app',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        },
        {
            title: 'Hobby Hub',
            skills: 'React, Supabase',
            description: 'Social media site for hobbies',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        },
        {
            title: 'Flight-Aid',
            skills: 'React, Express, Railway, PostgreSQL',
            description: 'Vacation planning web-app',
            links: {
                github: 'https://github.com',
                website: 'https://website.com'
            },
        }
    ]
    

    return (
        <div className="w-full">
            <h1>Projects</h1>
            <div className='projects'>
                {projects.map((project, index) => {
                    return (
                    <Card key={index} title={project.title} description={project.description} skills={project.skills} links={project.links} />
                    )
                })}
            </div>
        </div>
    )
}

export default Project;