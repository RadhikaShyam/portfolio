import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, repo }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={repo} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default ProjectCard;
