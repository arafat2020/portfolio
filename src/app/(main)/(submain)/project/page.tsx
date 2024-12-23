"use client";

import React from "react";
import { ProjectCard } from "../../_components/ProjectCard";
import { SparkleHeading } from "../../_components/Sparklejeading";
import { Vortex } from "@/components/ui/vortex";

export default function MyProjectsPage() {
  const projects = [
    {
      name: "AnhaBd",
      description: "A Next js website with headless CMS",
      tags: [
        { name: "React", color: "text-blue-500" },
        { name: "Next.js", color: "text-gray-500" },
        { name: "TRPS", color: "text-sky-500" },
      ],
      image: "./project/anahbd.png",
      source_code_link: "https://github.com/arafat2020/org",
    },
    {
      name: "Dev Motion",
      description: "A Next js web app using convex as a backend",
      tags: [
        { name: "Full-stack", color: "text-green-500" },
        { name: "Convex", color: "text-yellow-500" },
      ],
      image: "./project/dev-motion.png",
      source_code_link: "https://github.com/arafat2020/dev_motion",
    },
    {
      name: "Hacker net",
      description: "A SPA (Single Page App) using Spotify API",
      tags: [
        { name: "APi", color: "text-indigo-500" },
        { name: "SPA", color: "text-cyan-500" },
      ],
      image: "./project/hacker-tune.png",
      source_code_link: "https://github.com/arafat2020/spotify_clone",
    },
  ];

  return (
    <Vortex className="container mx-auto px-4 py-12 h-full overflow-y-scroll scrollbar-hide">
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
    </Vortex>
  );
}
