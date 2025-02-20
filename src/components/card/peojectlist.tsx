// components/ProjectList.tsx
import React from 'react';
import ProjectCard from './project';


interface Project {
    id: number;
    project: string;
    imageUrl: string;
    title: string;
    tags?: string[];
    description: string;
}



const ProjectList: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <div className="">
            {projects.map((proj) => (
                <ProjectCard
                    key={proj.id}
                    project={proj.project}
                    imageUrl={proj.imageUrl}
                    title={proj.title}
                    tags={proj.tags}
                >
                    <p>{proj.description}</p>
                </ProjectCard>
            ))}
        </div>
    );
};


export default ProjectList;
