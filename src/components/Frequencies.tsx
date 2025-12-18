import { Gallery } from './Gallery';

import artwork1 from '../images/projects/frequencies/004_OlgaFeldman_AsAboveSoBelow.jpg';
import artwork2 from '../images/projects/frequencies/007_OlgaFeldman_007_Seconds-Time.jpg';
import artwork3 from '../images/projects/frequencies/008_OlgaFeldman_MountFuji.jpg';
import artwork4 from '../images/projects/frequencies/009_OlgaFeldman_DistantShores.jpg';
import artwork5 from '../images/projects/frequencies/010_OlgaFeldman_Direction.jpg';
import artwork6 from '../images/projects/frequencies/013_OlgaFeldman_Balance.jpg';
import artwork7 from '../images/projects/frequencies/014_OlgaFeldman_Fault.jpg';
import artwork8 from '../images/projects/frequencies/015_OlgaFeldman_Waterfalls.jpg';
import artwork9 from '../images/projects/frequencies/016_OlgaFeldman_Libertad.jpg';
import artwork10 from '../images/projects/frequencies/018_OlgaFeldman_CLIFF-I.jpg';
import artwork11 from '../images/projects/frequencies/019_OlgaFeldman_CLIFF-II.jpg';
import artwork12 from '../images/projects/frequencies/024_OlgaFeldman_KusamaTribute.jpg';
import artwork13 from '../images/projects/frequencies/025_OlgaFeldman_InTheBeginning.jpg';
import artwork14 from '../images/projects/frequencies/026_OlgaFeldman_EmotionalLandscapes.jpg';


export function Frequencies() {
  const artworks = [
    {
      id: "freq1",
      imageUrl: artwork1, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
    {
      id: "freq1",
      imageUrl: artwork2, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork3, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork4, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },  {
      id: "freq1",
      imageUrl: artwork5, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork6, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork7, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork8, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork9, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork10, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork11, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork12, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    }, {
      id: "freq1",
      imageUrl: artwork13, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
    {
      id: "freq1",
      imageUrl: artwork14, 
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
       <button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO PROJECTS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">FREQUENCIES</h1>
        <p className="mb-2 opacity-60">2023 | Sound Visualization, Digital Print</p>
        <p className="max-w-2xl mt-6">
          A series exploring the invisible world of sound through visual translation. By capturing 
          and transforming audio frequencies into graphic representations, this project bridges the 
          gap between auditory and visual perception, revealing the hidden patterns in sonic landscapes.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
