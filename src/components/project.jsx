import React from 'react';

function Card({ title, description, skills, links }) {
    return (
        <div className=''>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{skills}</p>
            <div className='flex space-x-4 '>
                {links.github && <a href={links.github}>Code</a>}
                {links.website && <a href={links.website}>Website</a>}
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
                github: 'https://github.com/nestor-remo/Tempestive',
                website: 'https://tempestive.netlify.app'
            },
        },
        {
            title: 'Hobby Hub',
            skills: 'React, Supabase',
            description: 'Social media site for hobbies',
            links: {
                github: 'https://github.com/nestor-remo/HobbyHub',
                website: 'https://hubhobby.netlify.app/'
            },
        },
        {
            title: 'Flight-Aid',
            skills: 'React, Express, Railway, PostgreSQL',
            description: 'Vacation planning web-app',
            links: {
                github: 'https://github.com',
                website: 'https://github.com/nestor-remo/Flight-Aid'
            },
        },
        {
            title: 'Lecture Summarizer',
            skills: 'Python, OpenAI API',
            description: 'Summarizes lectures',
            links: {
                github: 'https://github.com/nestor-remo/LectureSummarizer',
            },
        }
    ]
    

    return (
        <div className="w-full">
            <h1 className='text-left text-5xl font-bold'>Projects</h1>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
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