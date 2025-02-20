import { px } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

export interface ProjectCardProps {
  project: string;
  imageUrl: string;
  title: string;
  tags?: string[];
  children?: React.ReactNode;
}

const tagLinks: { [key: string]: string } = {
  "Next.js": "https://nextjs.org/",
  "Tailwind": "https://tailwindcss.com/",
  "Express.js": "https://expressjs.com/",
  "MongoDB": "https://www.mongodb.com/",
  "Docker": "https://www.docker.com/",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  imageUrl,
  title,
  tags = [],
  children,
}) => {
  return (
    <div className=" mb-16 w-5xl  p-6 w-full  ">
      <div className="max-w-xl flex flex-col rounded-xl  bg-gradient-to-r from-gray-800 to-gray-900 p-6 shadow-lg text-white transition-transform duration-300 hover:scale-105">
        {/* Top Image / Screenshot with blur effect */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
           width={500}
           height={100}
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-auto blur-[2px] hover:blur-none transition-all duration-300"
          />
          {/* GitHub Floating Button */}
          <a
            href={`https://github.com/Vath-Song99/learnwithkru-monorepo`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-[#1d1d1f] text-white p-2 rounded-full shadow-lg hover:bg-black transition-all duration-300"
          >
            <FaGithub className="w-6 h-6" /> {/* GitHub Icon */}
          </a>
        </div>
        {/* Project Title */}
        <h2 className="mt-4 text-2xl font-bold">{title}</h2>
        {/* Card Body (Dynamic children) */}
        <div className="mt-2 text-gray-300 leading-relaxed">{children}</div>

        {/* Tech Stack / Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <a
                href={tagLinks[tag] || "#"}
                key={tag}
                target="_blank"
                rel="noopener noreferrer"
                className="  px-3 py-1 rounded-md text-sm   hover:border-white hover:border "
              >
                {tag}
              </a>
            ))}
          </div>
        )}
      </div>

    </div>

  );
};

export default ProjectCard;
