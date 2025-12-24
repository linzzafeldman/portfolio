import { MasonryGallery } from './MasonryGallery';
import artwork1 from '../images/projects/various-art/OlgaFeldman_ClonikI.png';
import artwork2 from '../images/projects/various-art/OlgaFeldman_Armour.jpg';
import artwork3 from '../images/projects/various-art/OlgaFeldman_Vangogh_color.jpg';
import artwork4 from '../images/projects/various-art/OlgaFeldman_Josephine.jpg';
import artwork5 from '../images/projects/various-art/OlgaFeldman_Bowie2_red.jpg';
import artwork6 from '../images/projects/various-art/OlgaFeldman_ClonikII.jpg';
import artwork7 from '../images/projects/various-art/OlgaFeldman_Desease.png';







export function VariousArt() {
  const artworks = [
    {
      id: "various1",
      imageUrl: artwork1, 
      title: 'Clonic I',
      description: 'Digital exploration of form and symmetry.',
      isImported: true,
    },
    {
      id: 'various2',
      imageUrl: artwork2, 
      title: 'Armour',
      description: 'Vector art exploring natural patterns.',
      isImported: true,
    },
    {
      id: 'various3',
      imageUrl: artwork3, 
      title: 'Vangogh Generative',
      description: 'Minimal geometric composition.',
      isImported: true,
    },
    {
      id: 'various4',
      imageUrl: artwork4, 
      title: 'Josephine',
      description: "Kafka's Josephine",
      isImported: true,
    },
    {
      id: 'various5',
      imageUrl: artwork5, 
      title: 'Red Bowie',
      description: 'Minimal geometric composition.',
      isImported: true,
    },{
      id: 'various6',
      imageUrl: artwork6, 
      title: 'Clonik II',
      description: 'Minimal geometric composition.',
      isImported: true,
    },
    {
      id: 'various7',
      imageUrl: artwork7, 
      title: 'Desease',
      description: 'Minimal geometric composition.',
      isImported: true,
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
        <h1 className="mb-4 tracking-wider">VARIOUS ART</h1>
        <p className="mb-2 opacity-60">∞ | Digital Art, Vector Art, 3D Art, Video Art</p>
        <p className="max-w-2xl mt-6">
          A collection of various artworks exploring different techniques, mediums, and conceptual approaches. This diverse body of work represents experimental pieces, commissioned projects, and explorations outside of the main series.
        </p>
      </div>
      <MasonryGallery artworks={artworks} />
    </div>
  );
}