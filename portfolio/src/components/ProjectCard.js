import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, isTutorial = false, extraClass = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Description limit for truncation
  const charLimit = 100;

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded);
  };

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
        <p className="card-description">
          {isExpanded || project.description.length <= charLimit
            ? project.description
            : `${project.description.slice(0, charLimit)}... `}
          {project.description.length > charLimit && (
            <span
              className="read-more"
              onClick={handleReadMoreToggle}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </span>
          )}
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
