"use client";

import React from "react";
import { ProjectCard } from "../../_components/ProjectCard";

export default function MyProjectsPage() {
  // projects.ts
const projects = [
  {
    title: "Awesome Project 1",
    description: "A description of the project showcasing the power of React and Next.js.",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/yourusername/awesome-project-1",
    liveUrl: "https://yourprojectdemo1.com",
  },
  {
    title: "Awesome Project 2",
    description: "A full-stack application built with React and Node.js.",
    imageUrl: "https://images.unsplash.com/photo-1484215149000-017b0139b4f3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/yourusername/awesome-project-2",
    liveUrl: "https://yourprojectdemo2.com",
  },
  {
    title: "Awesome Project 3",
    description: "A creative project demonstrating Tailwind CSS with Next.js.",
    imageUrl: "https://images.unsplash.com/photo-1502746870074-f9f6a79a9a4d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/yourusername/awesome-project-3",
    liveUrl: "https://yourprojectdemo3.com",
  },
];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
}
