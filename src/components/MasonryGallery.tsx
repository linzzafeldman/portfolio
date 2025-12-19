import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Artwork {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  isImported?: boolean;
}

interface MasonryGalleryProps {
  artworks: Artwork[];
}

export function MasonryGallery({ artworks }: MasonryGalleryProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="cursor-pointer group overflow-hidden bg-neutral-100 rounded-lg"
            onClick={() => setSelectedArtwork(artwork)}
          >
            {artwork.isImported ? (
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <ImageWithFallback
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-8 right-8 hover:opacity-50 transition-opacity"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div
            className="relative max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedArtwork.isImported ? (
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="max-w-full max-h-[85vh] w-auto h-auto mx-auto"
              />
            ) : (
              <ImageWithFallback
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="max-w-full max-h-[85vh] w-auto h-auto mx-auto"
              />
            )}
            <div className="mt-6 text-left">
              <h3 className="tracking-wider mb-2">{selectedArtwork.title}</h3>
              <p className="opacity-60">{selectedArtwork.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}