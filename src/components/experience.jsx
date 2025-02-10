import React from 'react';
import Card from './card';

const Experience = () => {


    const experience = [
        {
            title: 'Software Developer',
            description: 'Developed software for the company',
            date: '2021'
        },
        {
            title: 'Software Developer',
            description: 'Developed software for the company',
            date: '2021'
        },
        {
            title: 'Software Developer',
            description: 'Developed software for the company',
            date: '2021'
        }
    ]



    return (
        <div>
            <h1>Experience</h1>
            <div className='projects'>
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