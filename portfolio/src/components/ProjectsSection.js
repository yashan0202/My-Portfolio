import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Project 1", description: "Description 1", link: "#" },
  { title: "Project 2", description: "Description 2", link: "#" },
  { title: "Project 3", description: "Description 3", link: "#" },
  { title: "Project 4", description: "Description 4", link: "#" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
