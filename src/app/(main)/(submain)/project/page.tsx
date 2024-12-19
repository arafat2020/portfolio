"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { ProjectCard } from "../../_components/ProjectCard";
import { SparkleHeading } from "../../_components/Sparklejeading";

export default function MyProjectsPage() {
  const projects = [
    {
      name: "Awesome Project 1",
      description: "A description of the project showcasing the power of React and Next.js.",
      tags: [
        { name: "React", color: "text-blue-500" },
        { name: "Next.js", color: "text-gray-500" },
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_code_link: "https://github.com/yourusername/awesome-project-1",
    },
    {
      name: "Awesome Project 2",
      description: "A full-stack application built with React and Node.js.",
      tags: [
        { name: "Full-stack", color: "text-green-500" },
        { name: "Node.js", color: "text-yellow-500" },
      ],
      image: "https://images.unsplash.com/photo-1484215149000-017b0139b4f3?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_code_link: "https://github.com/yourusername/awesome-project-2",
    },
    {
      name: "Awesome Project 3",
      description: "A creative project demonstrating Tailwind CSS with Next.js.",
      tags: [
        { name: "Tailwind CSS", color: "text-indigo-500" },
        { name: "Next.js", color: "text-gray-500" },
      ],
      image: "https://images.unsplash.com/photo-1502746870074-f9f6a79a9a4d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source_code_link: "https://github.com/yourusername/awesome-project-3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SparkleHeading title="My Projects"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
          />
        ))}
      </div>
    </div>
  );
}
