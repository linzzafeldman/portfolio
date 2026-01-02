import { useState } from 'react';

interface Exhibition {
  id: string;
  title: string;
  year: string;
  location: string;
  description: string;
}

export function Exhibitions() {
  const exhibitions: Exhibition[] = [
    {
      id: 'shelter',
      title: 'SHELTER',
      year: '2024',
      location: 'Israel',
      description: 'A group exhibition exploring themes of safety, refuge, and belonging during challenging times.',
    },
    {
      id: 'parting',
      title: 'PARTING: stories of grief and letting go',
      year: '2024',
      location: 'Israel',
      description: 'A powerful group exhibition examining loss, memory, and the process of letting go.',
    },
    {
      id: 'hikli',
      title: 'HIKLI',
      year: '2012',
      location: 'Russia',
      description: 'A group exhibition examining transitional spaces and moments of transformation.',
    },
  ];


  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="mb-12 tracking-wider text-xl">EXHIBITIONS</h1>
      <div className="space-y-12">
        {exhibitions.map((exhibition) => (
          // Теперь это ссылка <a>, которая меняет адрес страницы
          <a
            key={exhibition.id}
            href={`#${exhibition.id}`}
            className="block w-full text-left border-b border-black pb-8 hover:opacity-50 transition-opacity no-underline text-black"
          >
            <h2 className="mb-4 tracking-wider text-lg">{exhibition.title}</h2>
            <p className="opacity-60 mb-4">{exhibition.year} | {exhibition.location}</p>
            <p className="max-w-2xl">{exhibition.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}