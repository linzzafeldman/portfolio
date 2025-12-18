import { Gallery } from './Gallery';

import image1 from '../images/projects/an-atomy/01_AnAtomyFull_2022.jpg';


export function Hikli() {
  const artworks = [
    {
      id: "hikli1",
      imageUrl: image1, 
      title: 'Artwork Title 1',
      description: 'Description of the artwork from Hikli exhibition.',
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
        <h1 className="mb-4 tracking-wider">HIKLI</h1>
        <p className="mb-2 opacity-60">2012 | Russia</p>
        <p className="max-w-2xl mt-6">
          A group exhibition examining transitional spaces and moments of transformation through minimalist photography and installation.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
