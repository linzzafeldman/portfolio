import { Gallery } from './Gallery';

import image1 from '../images/projects/an-atomy/01_AnAtomyFull_2022.jpg';
import image2 from '../images/projects/an-atomy/01_AnAtomyFull_2022.jpg';


export function Grieving() {
  const artworks = [
    {
      id: 'grieving1',
      imageUrl: image1, 
      title: 'Artwork Title 1',
      description: 'Description of the artwork from Grieving exhibition.',
    },
    {
      id: 'grieving2',
      imageUrl: image2, 
      title: 'Artwork Title 2',
      description: 'Description of the artwork from Grieving exhibition.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
<button
          // Теперь при клике мы просто меняем адрес на #projects
          onClick={() => window.location.hash = 'exhibitions'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO EXHIBITIONS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">GRIEVING</h1>
        <p className="mb-2 opacity-60">2024 | Israel</p>
        <p className="max-w-2xl mt-6">
          A powerful group exhibition examining loss, memory, and the process of letting go through stark black and white imagery.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
