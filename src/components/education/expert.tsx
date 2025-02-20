import React from "react";
import { Briefcase, Calendar, Code } from "lucide-react";

interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string[];
}
const techLogos: { [key: string]: string } = {
    "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "Tailwind": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "Express": "https://miro.medium.com/v2/resize:fit:680/1*7G9vb_q5MA8_C_8HtwMfqw.png",
    "MongoDB": "https://www.svgrepo.com/show/331488/mongodb.svg",
    "Docker": "https://www.svgrepo.com/show/331370/docker.svg",
    "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "GraphQL": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    "Firebase": "https://www.svgrepo.com/show/303388/firebase-1-logo.svg",
    "PostgreSQL": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    "JWT": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tN7ViFoFnhZZKMjeFYa0f6ghtnKBrFCcdg&s",
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
};



const ExperienceCard: React.FC<{ experience: Experience[] }> = ({
    experience,
}) => {
    return (
        <div className=" ">
            <div className="text-center mb-16 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900">
                <h1 className="text-3xl font-bold text-white  mb-4 ">Experience</h1>
                <h1 className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3 ">
                    
                    Passionate about building innovative web applications with a focus on
                    user experience and performance.
                </h1>
            </div>
            <div className=" mb-16 w-5xl  p-6 w-full ">

                {experience.map((exp) => (
                    <div
                        key={exp.id}
                        className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                        {/* Left Border Accent */}

                        {/* Header */}
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-700 rounded-lg">
                                <Briefcase className="text-blue-400 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{exp.position}</h3>
                                <p className="text-sm text-gray-400">{exp.company}</p>
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 mt-3 text-gray-300">
                            <Calendar className="w-5 h-5 text-blue-300" />
                            <p>{exp.duration}</p>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-gray-300">{exp.description}</p>
                        {/* Technologies */}
                        <h3 className="text-xl font-bold pt-5">Technology : </h3>
                        <div className="flex justify-center ">

                            <div className="mt-8 flex flex-wrap justify-between gap-5 w-[1000px]  ">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-white text-blue-300 rounded-lg font-medium shadow-sm "
                                    >
                                        {techLogos[tech] && (
                                            <img
                                                src={techLogos[tech]}
                                                alt={tech}

                                                className="w-12 h-12 object-contain " // Adjust size if needed
                                            />
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export { ExperienceCard };
