import { Gallery } from './Gallery';

interface ShelterProps {
  onBack: () => void;
}

export function Shelter({ onBack }: ShelterProps) {
  const artworks = [
    {
      id: 'shelter1',
      imageUrl: 'minimal-architecture',
      title: 'Artwork Title 1',
      description: 'Description of the artwork from Shelter exhibition.',
    },
    {
      id: 'shelter2',
      imageUrl: 'minimal-interior',
      title: 'Artwork Title 2',
      description: 'Description of the artwork from Shelter exhibition.',
    },
    {
      id: 'shelter3',
      imageUrl: 'geometric-abstract',
      title: 'Artwork Title 3',
      description: 'Description of the artwork from Shelter exhibition.',
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
        <h1 className="mb-4 tracking-wider">SHELTER</h1>
        <p className="mb-2 opacity-60">2024 — Israel</p>
        <p className="max-w-2xl mt-6">
          A group exhibition exploring themes of safety, refuge, and belonging through minimalist visual language.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
