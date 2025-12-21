import { Gallery } from './Gallery';

import image1 from '../images/exhibitions/grieving/parting_poster.jpg';


export function Parting() {
  const artworks = [
    {
      id: 'parting1',
      imageUrl: image1, 
      title: '"Parting" exhibition poster.',
      //description: 'Description of the artwork from Grieving exhibition.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
<button
          onClick={() => window.location.hash = 'exhibitions'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO EXHIBITIONS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">PARTING: stories of grief and letting go</h1>
        <p className="mb-2 opacity-60">2024 | Israel</p>
        <p className="max-w-2xl mt-6">
          A powerful group exhibition examining loss, memory, and the process of letting go through stark black and white imagery.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
