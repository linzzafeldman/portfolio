import { useState } from 'react';
import { OneOfAKind } from './OneOfAKind';
import { Women } from './Women';
import { Twisters } from './Twisters';
import { AnAtomy } from './AnAtomy';
import { Frequencies } from './Frequencies';
import { VariousArt } from './VariousArt';

interface Project {
  id: string;
  title: string;
  year: string;
  medium: string;
  description: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'one-of-a-kind',
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
      description: 'An exploration of organic and geometric forms in digital space, examining the tension between order and chaos through parametric design and computational aesthetics.',
    },
    {
      id: 'twisters',
      title: 'TWISTERS',
      year: '2017-2021',
      medium: 'Mixed Media, Video Art',
      description: 'A meditation on duality, examining how shadows define form and light creates meaning in our visual experience.',
    },
    {
      id: 'frequencies',
      title: 'FREQUENCIES',
      year: '∞',
      medium: 'Canvas, Acrylic',
      description: 'A series of paintings and graphic arts.',
    },
    {
      id: 'an-atomy',
      title: 'AN ATOMY',
      year: '2011',
      medium: 'Digital Art, Vector Art',
      description: 'Personal and collective memories explored through fragmented imagery and layered compositions, questioning the reliability and construction of remembrance.',
    },
    {
      id: 'various-art',
      title: 'VARIOUS ART',
      year: '∞',
      medium: 'Digital Art, Vector Art, 3D Art, Video Art',
      description: '.',
    },
  ];

  const handleBack = () => setSelectedProject(null);

  // Render selected project component
  if (selectedProject === 'one-of-a-kind') {
    return <OneOfAKind onBack={handleBack} />;
  }
  if (selectedProject === 'women') {
    return <Women onBack={handleBack} />;
  }
  if (selectedProject === 'twisters') {
    return <Twisters onBack={handleBack} />;
  }
  if (selectedProject === 'frequencies') {
    return <Frequencies onBack={handleBack} />;
  }
  if (selectedProject === 'an-atomy') {
    return <AnAtomy onBack={handleBack} />;
  }
  if (selectedProject === 'various-art') {
    return <VariousArt onBack={handleBack} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="mb-12 tracking-wider">PROJECTS</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project.id)}
            className="block w-full text-left border-b border-black pb-8 hover:opacity-50 transition-opacity"
          >
            <h2 className="mb-4 tracking-wider">{project.title}</h2>
            <p className="opacity-60 mb-4">{project.year} — {project.medium}</p>
            <p className="max-w-2xl">{project.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}