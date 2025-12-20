import { Gallery } from './Gallery';

import image1 from '../images/exhibitions/hikli/hikli_poster.jpg';
import image2 from '../images/exhibitions/hikli/hikli04.jpg';
import image3 from '../images/exhibitions/hikli/hikli03.jpg';
import image4 from '../images/exhibitions/hikli/hikli02.jpg';
import image5 from '../images/exhibitions/hikli/hikli05.jpg';
import image6 from '../images/exhibitions/hikli/hikli06.jpg';
import image7 from '../images/exhibitions/hikli/hikli07.jpg';
import image8 from '../images/exhibitions/hikli/hikli08.jpg';
import image9 from '../images/exhibitions/hikli/hikli09.jpg';



export function Hikli() {
  const artworks = [
    {
      id: "hikli1",
      imageUrl: image1, 
    //  title: "The exhibition's poster",
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli2",
      imageUrl: image2, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli3",
      imageUrl: image3, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image4, 
     // title: 'Artwork Title 1',
      //description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image5, 
     //title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image6, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image7, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image8, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
    },
    {
      id: "hikli1",
      imageUrl: image9, 
     // title: 'Artwork Title 1',
     // description: 'Description of the artwork from Hikli exhibition.',
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
