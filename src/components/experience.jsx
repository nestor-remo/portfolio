import React from 'react';

function Card({ title, description, date }) {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    );
}


const Experience = () => {

    const experience = [
        {
            title: 'ASSURE-US Undergraduate Researcher',
            description: 'Developed a pairs trading algorithm to predict stock prices',
            date: '2023'
        },
        {
            title: 'Instructional Assistant',
            description: 'Graded assignments and gave feedback to students in a linear algebra course',
            date: '2024-Present'
        },
        {
            title: 'ACM Open Source Board Member',
            description: 'Worked on ACM Open Source projects and helped organize workshops',
            date: '2025-Present'
        }
    ]



    return (
        <div className="w-full">
            <h1 className='text-left text-5xl font-bold'>Experience</h1>
            <div>
                {experience.map((experience, index) => {
                    return (
                    <Card key={index} title={experience.title} description={experience.description} />
                    )
                })}
            </div>
        </div>
    )
}


export default Experience;