import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { Link } from 'react-router-dom';
import projectData from "../data/projects.json";




/* const projectData = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Framer Motion.",
    link: "https://yourportfolio.com",
  },
  {
    slug: "ecommerce-store",
    title: "E-commerce Store",
    description: "Full-stack e-commerce with Stripe and Firebase.",
    link: "https://yourstore.com",
  },
]; */

const Projects = () => (
  <section className="container">
    <h2>Projects</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {projectData.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
          <Link to={`/projects/${project.slug}`} color="#1f1f1f">Read more →</Link>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
