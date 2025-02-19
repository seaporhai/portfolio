"use client";
import { SkillCard } from "@/components";
import { Navigation } from "@/components/navbarr";
import { Skill } from "@/components/type";
import AboutMe from "@/components/personal";
import TimelineSection from "../components/education/page";
import React from "react";
import { ExperienceCard } from "@/components/education/expert";
import ContactForm from "@/components/personal/contactMe";
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
    description: "Developed full-stack applications using React, Node.js, and MongoDB. Integrated APIs, optimized performance, and deployed with Docker & AWS.",

    technologies: ["React", "Tailwind CSS", "Next.js", "Node.js", "Express", "MongoDB", "JWT", "AWS", "Docker"]
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

      </section>
      {/* Skill Cards */}

      <section id="skills" className="container mx-auto px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10"> Skills</h1>
        {categories.map((category) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </section>
      {/* Contact Form */}
      <section id="contact">
        <ContactForm />
      </section>
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white pt-5">
        <div

          className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sea Porhai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
