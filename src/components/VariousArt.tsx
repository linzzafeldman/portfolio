import { MasonryGallery } from './MasonryGallery';
import artwork1 from '../images/projects/various-art/artwork-01.png';
import artwork2 from '../images/projects/various-art/artwork-02.png';
import artwork3 from '../images/projects/various-art/artwork-03.png';


export function VariousArt() {
  const artworks = [
    {
      id: "various1",
      images: [artwork1],
      title: 'Abstract Composition 01',
      description: 'Digital exploration of form and symmetry.',
      isImported: true,
    },
    {
      id: 'various2',
      images: [artwork2],
      title: 'Organic Forms 02',
      description: 'Vector art exploring natural patterns.',
      isImported: true,
    },
    {
      id: 'various3',
      images: [artwork3],
      title: 'Geometric Study 03',
      description: 'Minimal geometric composition.',
      isImported: true,
    },
    {
      id: 'various4',
      images: [artwork3],
      title: 'Digital Sketch 04',
      description: 'Experimental digital artwork.',
      isImported: true,
    },
    {
      id: 'various5',
      images: [artwork3],
      title: 'Abstract Form 05',
      description: 'Study in balance and contrast.',
      isImported: true,
    },
    {
      id: 'various6',
      images: [artwork3],
      title: 'Colorful Abstraction 06',
      description: 'Vibrant digital art piece.',
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