import { Gallery } from './Gallery';

interface AnAtomyProps {
  onBack: () => void;
}

export function AnAtomy({ onBack }: AnAtomyProps) {
  const artworks = [
    {
      id: 'art7',
      imageUrl: 'abstract-texture',
      title: 'Fading',
      description: 'The gradual dissolution of memory over time, represented through deteriorating forms.',
    },
    {
      id: 'art8',
      imageUrl: 'blurred-scene',
      title: 'Recall',
      description: 'The imperfect nature of remembering, captured in soft focus and ambiguous spaces.',
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
        <h1 className="mb-4 tracking-wider">AN ATOMY</h1>
        <p className="mb-2 opacity-60">2022 — Photography, Digital Collage</p>
        <p className="max-w-2xl mt-6">
          Personal and collective memories explored through fragmented imagery and layered 
          compositions, questioning the reliability and construction of remembrance.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
