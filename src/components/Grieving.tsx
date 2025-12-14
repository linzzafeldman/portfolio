import { Gallery } from './Gallery';

interface GrievingProps {
  onBack: () => void;
}

export function Grieving({ onBack }: GrievingProps) {
  const artworks = [
    {
      id: 'grieving1',
      imageUrl: 'black-white-portrait',
      title: 'Artwork Title 1',
      description: 'Description of the artwork from Grieving exhibition.',
    },
    {
      id: 'grieving2',
      imageUrl: 'abstract-shapes',
      title: 'Artwork Title 2',
      description: 'Description of the artwork from Grieving exhibition.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      <button
        onClick={onBack}
        className="mb-12 tracking-wider hover:opacity-50 transition-opacity"
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
