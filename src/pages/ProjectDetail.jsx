import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/projects.json';
import Reveal from '../components/Reveal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = data.find(p => p.slug === slug);
  if (!project) return <p>Project not found</p>;
  return (
    <Reveal>
      <section className="container">
        <h2>{project.title}</h2>
        <p>{project.fullDescription}</p>
        {project.screenshots.map((src, i) => (
          <img key={i} src={src} alt="" style={{ maxWidth: '100%', marginBottom: '1rem' }}/>
        ))}
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
        <a href={project.repo} target="_blank">View Source</a>
      </section>
    </Reveal>
  );
}
