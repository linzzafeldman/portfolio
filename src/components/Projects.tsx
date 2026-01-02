import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  year: string;
  medium: string;
  description: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 'oneofakind', 
      title: 'ONE OF A KIND',
      year: '2025',
      medium: 'Digital Art, AI, Vector Art',
      description: 'The series presents abstract, living shapes that hover between randomness and recognition, as if each were a fleeting signal, a momentary birth of a familiar form emerging from a repetitive pattern of radio waves.',
    },
    {
      id: 'women',
      title: 'WOMEN',
      year: '2010-2014',
      medium: 'Digital Art, Vector Art',
      description: 'Fragile research on emotional instability, loss and growth.',
    },
    {
      id: 'twisters',
      title: 'TWISTERS',
      year: '2017-2021',
      medium: '3D, Video Art, Digital Art',
      description: 'A meditation on duality, examining how shadows define form and light creates meaning in our visual experience.',
    },
    {
      id: 'frequencies',
      title: 'FREQUENCIES',
      year: '∞',
      medium: 'Canvas, Acrylic',
      description: 'A series of paintings and graphic arts exploring wave theory through surface.',
    },
    {
      id: 'anatomy', 
      title: 'AN ATOMY',
      year: '2011',
      medium: 'Digital Art, Vector Art',
      description: '"an_atomy" explores the possibility of conveying subtle human emotions through digital vector graphics, using hand gestures as its primary subject.',
    },
    {
      id: 'variousart', 
      title: 'VARIOUS ART',
      year: '∞',
      medium: 'Digital Art, Vector Art, 3D Art, Video Art',
      description: '.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="mb-12 tracking-wider text-xl">PROJECTS</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="block w-full text-left border-b border-black pb-8 hover:opacity-50 transition-opacity no-underline text-black"
          >
            <h2 className="mb-4 tracking-wider text-lg">{project.title}</h2>
            <p className="opacity-60 mb-4">{project.year} | {project.medium}</p>
            <p className="max-w-2xl">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}