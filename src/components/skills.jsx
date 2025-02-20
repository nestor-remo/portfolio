import React from 'react';
import { SiReact, SiJavascript, SiHtml5, SiPython, SiCplusplus, SiRailway, SiPostgresql, SiExpress, SiFlask, SiSvelte, SiSupabase, SiGit } from 'react-icons/si';

function Icon ({name, icon}) {
    return (
        <div className='flex flex-col items-center w-[calc(25%-20px)] text-xl'>
            {icon}
            <p>{name}</p>
        </div>
    )
}

const Skills = () => {
    
    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold">Skills</h1>
            <br></br>
            <div className="flex justify-center flex-wrap gap-5 mt-6 w-full">
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
        </div>
    )
} 

export default Skills;
