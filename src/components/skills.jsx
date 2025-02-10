import React from 'react';
import { SiReact, SiJavascript, SiHtml5, SiPython, SiCplusplus, SiRailway, SiPostgresql, SiExpress, SiFlask, SiSvelte, SiSupabase, SiGit } from 'react-icons/si';
import './styles/skills.css';

function Icon ({name, icon}) {
    return (
        <div className='icon'>
            {icon}
            <p>{name}</p>
        </div>
    )
}

const Skills = () => {
    
    return (
        <>
            <h1>Skills</h1>
            <br></br>
            <div className='skills'>
                <Icon name='React' icon={<SiReact />} />
                <Icon name='JavaScript' icon={<SiJavascript />} />
                <Icon name='HTML5' icon={<SiHtml5 />} />
                <Icon name='Python' icon={<SiPython />} />
                <Icon name='C++' icon={<SiCplusplus />} />
                <Icon name='Railway' icon={<SiRailway />} />
                <Icon name='PostgreSQL' icon={<SiPostgresql />} />
                <Icon name='Express' icon={<SiExpress />} />
                <Icon name='Flask' icon={<SiFlask />} />
                <Icon name='Svelte' icon={<SiSvelte />} />
                <Icon name='Supabase' icon={<SiSupabase />} />
                <Icon name='Git' icon={<SiGit />} />
            </div>
        </>
    )
} 

export default Skills;
