import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, isTutorial = false, extraClass = "" }) => {
  return (
    <div className={`card ${isTutorial ? "tutorial-card" : ""} ${extraClass}`}>
      {project.logo && (
        <img
          src={project.logo}
          alt={`${project.title} Logo`}
          className={`card-logo ${isTutorial ? "tutorial-logo" : ""}`}
        />
      )}
      <h3 className={isTutorial ? "tutorial-title" : ""}>{project.title}</h3>
      {project.description && (
        <p className={isTutorial ? "tutorial-description" : "card-description"}>
          {project.description}
        </p>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`button ${isTutorial ? "tutorial-button" : ""}`}
      >
        {isTutorial ? "View Tutorial" : "View Project"}
      </a>
    </div>
  );
};

export default ProjectCard;
