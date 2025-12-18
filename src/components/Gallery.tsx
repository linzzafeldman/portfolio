interface Artwork {
  id: string;
  imageUrl: string; // Возвращаем одиночную строку вместо массива
  title: string;
  description: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-16"> 
      {artworks.map((artwork) => (
        <div key={artwork.id} className="space-y-6">
          <div className="bg-black/5 overflow-hidden">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              loading="lazy"
              className="w-full h-auto block" 
            />
          </div>
          
          <div className="max-w-2xl">
            <h3 className="mb-2 tracking-wider text-lg uppercase">{artwork.title}</h3>
            <p className="opacity-60 text-sm leading-relaxed">{artwork.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}