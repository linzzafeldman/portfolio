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
      images: [image1],
      title: 'Fading',
      description: 'The gradual dissolution of memory over time, represented through deteriorating forms.',
    },
    {
      id: 'art8',
      images: [image2], 
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
        images: [image3], 
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
        images: [image4], 
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
       images: [image5], 
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
    },
    {
      id: 'art8',
       images: [image6], 
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
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
        <h1 className="mb-4 tracking-wider">AN ATOMY</h1>
        <p className="mb-2 opacity-60">2022 | Photography, Digital Artwork</p>
        <p className="max-w-2xl mt-6">
          Personal and collective memories explored through fragmented imagery and layered 
          compositions, questioning the reliability and construction of remembrance.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
