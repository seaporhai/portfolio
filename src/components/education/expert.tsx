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

const ExperienceCard: React.FC<{ experience: Experience[] }> = ({ experience }) => {
    return (
        <div className="space-y-6">
            {experience.map((exp) => (
                <div
                    key={exp.id}
                    className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                    {/* Left Border Accent */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-xl"></div>

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
                    <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-lg font-medium shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export { ExperienceCard };
