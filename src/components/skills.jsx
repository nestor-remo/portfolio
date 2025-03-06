import React from 'react';
import { SiReact, SiJavascript, SiHtml5, SiPython, SiCplusplus, SiRailway, SiPostgresql, SiExpress, SiFlask, SiSvelte, SiSupabase, SiGit } from 'react-icons/si';

function Icon ({name, icon}) {
    return (
        <div className='flex items-center space-x-2 rounded-md border-white/10 bg-primary p-4'>
            {icon}
            <p>{name}</p>
        </div>
    )
}

const Skills = () => {
    
    return (
        <div className="w-full">
            <h1 className="text-left text-5xl font-bold">Skills</h1>
            <br></br>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
