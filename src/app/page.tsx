"use client"
import { SkillCard } from "@/components";
import { Navigation } from "@/components/navbarr";
import { Skill } from "@/components/type";
import React from "react";

const skills: Skill[] = [
  { name: "TypeScript", level: 4, category: "Frontend" },
  { name: "React/Next.js", level: 4, category: "Frontend" },
  { name: "Tailwind CSS", level: 4, category: "Frontend" },
  { name: "Node.js", level: 4.5, category: "Backend" },
  { name: "ExpressJs", level: 4, category: "Backend" },
  { name: "AWS", level: 2, category: "Cloud" },
  { name: "Docker", level: 3,category: "Tools" },
  { name: "Git", level: 4.5, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Cloud", "Tools"];

const Page = (text: string) => {
  return (
    <div>
      {/* Navigation */}
      <Navigation activeSection={""} CV_URL={""} />

      {/* Skill Cards */}
      <div className="container mx-auto px-6 py-12 space-y-8">
        {categories.map((category) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
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
