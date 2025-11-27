import { Gallery } from './Gallery';

interface TwistersProps {
  onBack: () => void;
}

export function Twisters({ onBack }: TwistersProps) {
  const artworks = [
    {
      id: 'art4',
      imageUrl: 'shadow-photography',
      title: 'Cast',
      description: 'Shadows as subjects rather than absence, exploring their form and movement.',
    },
    {
      id: 'art5',
      imageUrl: 'light-study',
      title: 'Illumination',
      description: 'Natural light filtering through architectural spaces, creating ephemeral drawings.',
    },
    {
      id: 'art6',
      imageUrl: 'contrast-abstract',
      title: 'Balance',
      description: 'The interplay between darkness and brightness as a metaphor for equilibrium.',
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
        <h1 className="mb-4 tracking-wider">TWISTERS</h1>
        <p className="mb-2 opacity-60">2023 — Mixed Media</p>
        <p className="max-w-2xl mt-6">
          A meditation on duality, examining how shadows define form and light creates meaning 
          in our visual experience.
        </p>
      </div>
      <Gallery artworks={artworks} />
    </div>
  );
}
