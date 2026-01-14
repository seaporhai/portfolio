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
  { name: "Vue Js", level: 3, category: "Frontend" },
  { name: "Node.js", level: 4, category: "Backend" },
  { name: "ExpressJs", level: 4, category: "Backend" },
  { name: "NestJs", level: 3, category: "Backend" },
  { name: "AWS", level: 2, category: "Cloud" },
  { name: "Sequelize", level: 4, category: "Cloud" },
  { name: "Prisms", level: 3, category: "Cloud" },
  { name: "SQL", level: 3.5, category: "Cloud" },
  { name: "Firebase", level: 3.5, category: "Cloud" },
  { name: "MongoDB", level: 4, category: "Cloud" },
  { name: "Nginx", level: 2, category: "Cloud" },
  { name: "Bucket Cloud Storage", level: 2, category: "Cloud" },
  { name: "Docker", level: 2, category: "Tools" },
  { name: "Swagger", level: 3, category: "Tools" },
  { name: "API-DOG", level: 4, category: "Tools" },
  { name: "Postman", level: 4, category: "Tools" },
  { name: "Jira", level: 2, category: "Tools" },
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
  {
    id: 2,
    company: "Suntel Technology Cambodia",
    position: "Backend Developer",
    duration: "2025-2026",
    description:
      "Designed scalable backend systems using NestJS & Node.js, optimized database performance, implemented secure authentication, and led cloud deployments with Docker, AWS, and Nginx.",

    technologies: [
      "Node.js",
      "Express",
      "Sequielize",
      "NestJS",
      "JWT",
      "AWS",
      "Docker",
      "Bucket Cloud Storage",
      "Nginx",
      "Firebase",
      "PostgreSQL",
      "MySQL",
    ],
  },
];

const projects = [
  {
    id: 1,
    project: "LearnWithKru",
    imageUrl: "/image/image.png",
    title: "LearnWithKru",
    tags: ["Next.js", "Tailwind", "Multer", "Express.js", "MongoDB", "Docker"],
    description:
      "LearnWithKru is an innovative online platform designed to connect students with experienced tutors for personalized learning. With a strong emphasis on security and trust, the platform ensures a seamless and efficient learning experience through modern technology and user-friendly features.",
  },
  {
    id: 2,
    project: "Beasy Cleaning Service",
    imageUrl: "/image/BeasyLogo.jpeg",
    title: "Beasy Cleaning Service",
    tags: ["Express.js", "Sequelized", "AWS", "Nginx", "MYSQL"],
    description:
      "Beasy Cleaning Service is a backend-driven service platform built with Node.js and Express.js, providing secure and scalable APIs for booking management, user authentication, and service workflows. The system uses Sequelize for database modeling and optimization, implements role-based access control, and is deployed on AWS for DataBase with Docker and Nginx to ensure performance, reliability, and scalability.",
  },
  {
    id: 3,
    project: "BNow Message",
    imageUrl: "/image/Bnow.png",
    title: "BNow Message",
    tags: [
      "Express.js",
      "Sequelized",
      "Nginx",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Docker",
      "Bucket Cloud Storage",
      "CloudFlare",
    ],
    description:
      "BNow Message is a real-time messaging platform built with Node.js and Express.js, using Socket.io for live communication, Redis for pub/sub and caching, and PostgreSQL with Sequelize for data management, deployed on AWS for DataBase with Docker, Nginx, and Cloudflare.",
  },
  {
    id: 4,
    project: "BHRMS System",
    imageUrl: "/image/Bhrms.png",
    title: "BNow Message",
    tags: [
      "Express.js",
      "Sequelized",
      "AWS",
      "Nginx",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Bucket Cloud Storage",
    ],
    description:
      "BHRMS System is a backend-driven Human Resource Management platform built with Node.js and Express.js, providing secure APIs for employee management, attendance, and payroll workflows. It uses JWT for authentication, PostgreSQL with Sequelize for data handling, integrates cloud bucket storage for file management, and is deployed on AWS for DataBase with Docker and Nginx for scalability and reliability.",
  },
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
            Check out some of the projects I have worked on, showcasing my
            skills.
          </h1>
        </div>
        <div className="mb-14 flex justify-center">
          {/* Project */}
          <ProjectList projects={projects}></ProjectList>
        </div>
      </section>
      {/* Skill Cards */}
      <section id="skills">
        <div className="text-center mb-16 w-5xl  p-6 w-full bg-gradient-to-r from-gray-800 to-gray-900">
          <h1 className="text-3xl font-bold text-white  mb-4 ">Skills</h1>
          <h1 className="text-lg text-white leading-relaxed text-center max-w-2xl mx-auto mb-3 ">
            Skilled in developing dynamic, responsive web applications using
            modern frameworks, with a strong focus on performance, scalability,
            and user experience.
          </h1>
        </div>
        <div className="container mx-auto px-6 py-12 space-y-8">
          {categories.map((category) => (
            <SkillCard key={category} category={category} skills={skills} />
          ))}
        </div>
      </section>
      {/* Contact Form */}
      <section id="contact"></section>
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
