import { MasonryGallery } from './MasonryGallery';
import artwork1 from 'figma:asset/c00e4a5eb0a33bb1e6ad4b7ec3910c16ba75d5cb.png';
import artwork2 from 'figma:asset/0e340163d930663367a2823a579ddd20d93cd433.png';
import artwork3 from 'figma:asset/300d796150e03bba26ad94b17a701b92dd0793a0.png';

interface VariousArtProps {
  onBack: () => void;
}

export function VariousArt({ onBack }: VariousArtProps) {
  const artworks = [
    {
      id: 'various1',
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
      imageUrl: artwork1,
      title: 'Geometric Study 03',
      description: 'Minimal geometric composition.',
      isImported: true,
    },
    {
      id: 'various4',
      imageUrl: artwork2,
      title: 'Digital Sketch 04',
      description: 'Experimental digital artwork.',
      isImported: true,
    },
    {
      id: 'various5',
      imageUrl: artwork1,
      title: 'Abstract Form 05',
      description: 'Study in balance and contrast.',
      isImported: true,
    },
    {
      id: 'various6',
      imageUrl: artwork3,
      title: 'Colorful Abstraction 06',
      description: 'Vibrant digital art piece.',
      isImported: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <button
        onClick={onBack}
        className="mb-12 tracking-wider hover:opacity-50 transition-opacity"
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