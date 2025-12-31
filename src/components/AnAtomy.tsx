import { Gallery } from './Gallery';

import image1 from '../images/projects/an-atomy/01_AnAtomyFull_2022.jpg';
import image2 from '../images/projects/an-atomy/02_AnAtomyFull_2022.jpg';
import image3 from '../images/projects/an-atomy/03_AnAtomyFull_2022.jpg';
import image4 from '../images/projects/an-atomy/04_AnAtomyFull_2022.jpg';
import image5 from '../images/projects/an-atomy/05_AnAtomyFull_2022.jpg';
import image6 from '../images/projects/an-atomy/06_AnAtomyFull_2022.jpg';



export function AnAtomy() {
  const artworks = [
    {
      id: 'art7',
      imageUrl: image1, 
      title: '01. Gift',
      //description: 'The gradual dissolution of memory over time, represented through deteriorating forms.',
    },
    {
      id: 'art8',
      imageUrl: image2, 
      title: '02. You',
      //description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
      imageUrl: image3, 
      title: '03. Love',
     // description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
      imageUrl: image4, 
      title: '04. Mom',
      //description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
      imageUrl: image5, 
      title: '05. Stop',
     // description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
      imageUrl: image6, 
      title: '06. Dying',
     // description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-8">
       <button
          onClick={() => window.location.hash = 'projects'}
          className="mb-12 tracking-wider hover:opacity-50 transition-opacity text-black"
        >
          ← BACK TO PROJECTS
        </button>
      <div className="mb-12">
        <h1 className="mb-4 tracking-wider">AN ATOMY</h1>
        <p className="mb-2 opacity-60">2022 | Photography, Digital Art, Vector Art</p>
        <p className="max-w-2xl mt-6">
          An_atomy explores the possibility of conveying subtle human emotions through digital vector graphics, using hand gestures as its primary subject. 
          Reduced to minimal line structures, the hands become a language of tension, vulnerability, and silent communication, where meaning emerges through precision, restraint, and rhythm rather than expression. 
          All the series based on photos made by the artist.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
