import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Dove Music", description: "A better Music , Video and Exploration App", link: "https://github.com/yashan0202/Lyrics" },
  { title: "Movie-management-System", description: "Rent a movie or Keep track of your Wishlist", link: "https://github.com/yashan0202/Movie-management-System" },
  { title: "Automated Ticket Booking System - BookMyTrip", description: "This project is an automated ticket booking system built for the BookMyTrip website using SELENIUM and Java", link: "https://github.com/yashan0202/Frugal-Testing-s-SDE" },
  { title: "Python Tutorials", description: "All you need to know about Python from beginning to advance", link: "https://github.com/yashan0202/Python" },
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
