import { Gallery } from './Gallery';

import image1 from '../images/projects/an-atomy/01_AnAtomyFull_2022.jpg';


export function Frequencies() {
  const artworks = [
    {
      id: "freq1",
      imageUrl: image1, 
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
