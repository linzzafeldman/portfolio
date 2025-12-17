import { Gallery } from './Gallery';



export function Frequencies() {
  const artworks = [
    {
      id: 'freq1',
      imageUrl: 'wave-patterns',
      title: 'Resonance I',
      description: 'Visualizing sound waves as tangible forms, exploring the physicality of invisible frequencies.',
    },
    {
      id: 'freq2',
      imageUrl: 'abstract-waves',
      title: 'Harmonic Series',
      description: 'Mathematical beauty in oscillation patterns, translating audio frequencies into visual rhythms.',
    },
    {
      id: 'freq3',
      imageUrl: 'sound-visualization',
      title: 'Amplitude',
      description: 'The rise and fall of sonic energy captured in stark monochromatic compositions.',
    },
    {
      id: 'freq4',
      imageUrl: 'frequency-abstract',
      title: 'Interference',
      description: 'Overlapping waveforms creating unexpected patterns, a study in sonic collision and harmony.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
       <button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO PROJECTS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">FREQUENCIES</h1>
        <p className="mb-2 opacity-60">2023 — Sound Visualization, Digital Print</p>
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
