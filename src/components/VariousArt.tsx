import { MasonryGallery } from './MasonryGallery';
import artwork1 from '../images/projects/various-art/artwork-01.png';
import artwork2 from '../images/projects/various-art/artwork-02.png';
import artwork3 from '../images/projects/various-art/artwork-03.png';


export function VariousArt() {
  const artworks = [
    {
      id: "various1",
      imageUrl: artwork1, 
      title: 'Abstract Composition 01',
      description: 'Digital exploration of form and symmetry.',
      isImported: true,
    },
    {
      id: 'various2',
      imageUrl: artwork2, 
      title: 'Organic Forms 02',
      description: 'Vector art exploring natural patterns.',
      isImported: true,
    },
    {
      id: 'various3',
      imageUrl: artwork3, 
      title: 'Geometric Study 03',
      description: 'Minimal geometric composition.',
      isImported: true,
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
        <h1 className="mb-4 tracking-wider">VARIOUS ART</h1>
        <p className="mb-2 opacity-60">∞ — Digital Art, Vector Art, 3D Art, Video Art</p>
        <p className="max-w-2xl mt-6">
          A collection of various artworks exploring different techniques, mediums, and conceptual approaches. This diverse body of work represents experimental pieces, commissioned projects, and explorations outside of the main series.
        </p>
      </div>
      <MasonryGallery artworks={artworks} />
    </div>
  );
}