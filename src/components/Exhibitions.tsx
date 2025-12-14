import { useState } from 'react';
import { Shelter } from './Shelter';
import { Grieving } from './Grieving';
import { Hikli } from './Hikli';

interface Exhibition {
  id: string;
  title: string;
  year: string;
  location: string;
  description: string;
}

export function Exhibitions() {
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);

  const exhibitions: Exhibition[] = [
    {
      id: 'shelter',
      title: 'SHELTER',
      year: '2024',
      location: 'Israel',
      description: 'A group exhibition exploring themes of safety, refuge, and belonging during challenging times.',
    },
    {
      id: 'grieving',
      title: 'GRIEVING',
      year: '2024',
      location: 'Israel',
      description: 'A powerful group exhibition examining loss, memory, and the process of letting go through stark black and white imagery.',
    },
    {
      id: 'hikli',
      title: 'HIKLI',
      year: '2012',
      location: 'Russia',
      description: 'A group exhibition examining transitional spaces and moments of transformation through minimalist photography and installation.',
    },
  ];

  const handleBack = () => setSelectedExhibition(null);

  // Render selected exhibition component
  if (selectedExhibition === 'shelter') {
    return <Shelter onBack={handleBack} />;
  }
  if (selectedExhibition === 'grieving') {
    return <Grieving onBack={handleBack} />;
  }
  if (selectedExhibition === 'hikli') {
    return <Hikli onBack={handleBack} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="mb-12 tracking-wider">EXHIBITIONS</h1>
      <div className="space-y-12">
        {exhibitions.map((exhibition) => (
          <button
            key={exhibition.id}
            onClick={() => setSelectedExhibition(exhibition.id)}
            className="block w-full text-left border-b border-black pb-8 hover:opacity-50 transition-opacity"
          >
            <h2 className="mb-4 tracking-wider">{exhibition.title}</h2>
            <p className="opacity-60 mb-4">{exhibition.year} | {exhibition.location}</p>
            <p className="max-w-2xl">{exhibition.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}