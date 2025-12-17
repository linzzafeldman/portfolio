import { Gallery } from './Gallery';
import artwork1 from '../images/projects/women/artwork-01.png';
import artwork2 from '../images/projects/women/artwork-02.png';



export function Women() {
  const artworks = [
    {
      id: 'art1',
      imageUrl: artwork1,
      title: 'Symmetry Study I',
      description: 'Layered abstract forms creating a symmetrical composition that explores mirroring and balance in digital space.',
      isImported: true,
    },
    {
      id: 'art2',
      imageUrl: artwork2,
      title: 'Emergence',
      description: 'Flowing organic shapes contrasted against a dark void, representing the emergence of form from emptiness.',
      isImported: true,
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
        <h1 className="mb-4 tracking-wider">WOMEN</h1>
        <p className="mb-2 opacity-60">2024 | 3D Digital Art, Generative Design</p>
        <p className="max-w-2xl mt-6">
          An exploration of organic and geometric forms in digital space, examining the tension 
          between order and chaos through parametric design and computational aesthetics.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}