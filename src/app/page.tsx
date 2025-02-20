"use client";
import { SkillCard } from "@/components";
import { Navigation } from "@/components/navbarr";
import { Skill } from "@/components/type";
import AboutMe from "@/components/personal";
import TimelineSection from "../components/education/page";
import React from "react";
import { ExperienceCard } from "@/components/education/expert";
import ContactForm from "@/components/personal/contactMe";
import ProjectList from "@/components/card/peojectlist";
const skills: Skill[] = [
  { name: "TypeScript", level: 4, category: "Frontend" },
  { name: "React/Next.js", level: 4, category: "Frontend" },
  { name: "Tailwind CSS", level: 4, category: "Frontend" },
  { name: "Node.js", level: 4, category: "Backend" },
  { name: "ExpressJs", level: 4, category: "Backend" },
  { name: "AWS", level: 2, category: "Cloud" },
  { name: "SQL", level: 3.5, category: "Cloud" },
  { name: "MongoDB", level: 4, category: "Cloud" },
  { name: "Docker", level: 2, category: "Tools" },
  { name: "Git", level: 4.5, category: "Tools" },
  { name: "Figma", level: 3.5, category: "Tools" },
  { name: "StoryBook", level: 3.5, category: "Tools" },
];
const experiences = [
  {
    id: 1,
    company: "SabaiCode",
    position: "Full-Stack Developer",
    duration: "2023-2024",
    description:
      "Developed full-stack applications using React, Node.js, and MongoDB. Integrated APIs, Dynamic UI, optimized performance, and deployed with Docker & AWS.",

    technologies: [
      "React",
      "Tailwind",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "AWS",
      "Docker",
    ],
  },
];

const projects = [
  {
    id: 1,
    project: "LearnWithKru",
    imageUrl: "/image/image.png",
    title: "LearnWithKru",
    tags: ["Next.js", "Tailwind", "Express.js", "MongoDB", "Docker"],
    description:
      "LearnWithKru is a platform that can connecting students with tutors for personalized learning.",
  },

  // {
  //   id: 2,
  //   project: 'Next Big Thing',
  //   imageUrl: 'https://via.placeholder.com/600x300/000/fff?text=AnotherProject',
  //   title: 'Next Big Thing',
  //   tags: ['#nodejs', '#express', '#typescript'],
  //   description:
  //     'This project is the next big thing in web development with blazing-fast performance.',
  // },
  // Add more projects as needed...
];

const categories = ["Frontend", "Backend", "Cloud", "Tools"];

const Page = () => {
  return (
    <div>
      {/* Navigation */}
      <Navigation />
      <section id="about me" className="py-16 px-6 max-w-6xl mx-auto my-10">
        <AboutMe />
      </section>

      {/* Timeline Section */}
      <section id="education">
        <TimelineSection />
        <ExperienceCard experience={experiences} />
        <div className="text-center mb-16 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900">
          <h1 className="text-3xl font-bold text-white  mb-4 ">Project</h1>
          <h1 className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3 ">
            {" "}
            Check out some of the projects I've worked on, showcasing my skills.
          </h1>
        </div>
        <div className="mb-14 flex justify-center">

          <ProjectList projects={projects}></ProjectList>
        </div>
      </section>
      {/* Skill Cards */}
      <section id="skills" >
        <div className="text-center mb-16 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900">
          <h1 className="text-3xl font-bold text-white  mb-4 ">Skills</h1>
          <h1 className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3 ">
            {" "}
            Skilled in developing dynamic, responsive web applications using
            modern frameworks, with a strong focus on
            performance, scalability, and user experience.
          </h1>
        </div>
        <div className="container mx-auto px-6 py-12 space-y-8">

          {categories.map((category) => (
            <SkillCard key={category} category={category} skills={skills} />
          ))}
        </div>
      </section>
      {/* Contact Form */}
      <section id="contact">
      </section>
      <ContactForm />
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white pt-5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sea Porhai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
