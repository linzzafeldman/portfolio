import { ImageWithFallback } from './figma/ImageWithFallback';

interface Artwork {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  isImported?: boolean;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-16">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="space-y-6">
          <div className="aspect-[4/3] bg-black/5 border border-black overflow-hidden">
            {artwork.isImported ? (
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageWithFallback
                src={`https://source.unsplash.com/1200x900/?${artwork.imageUrl}`}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="max-w-2xl">
            <h3 className="mb-2 tracking-wider">{artwork.title}</h3>
            <p className="opacity-60">{artwork.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}