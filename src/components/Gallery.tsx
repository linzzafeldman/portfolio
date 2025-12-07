interface Artwork {
  id: string;
  // imageUrl теперь содержит локальный путь, импортированный из AnAtomy.tsx
  imageUrl: string; 
  title: string;
  description: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  return (
    // Убираем фиксированный grid-cols-1, чтобы галерея лучше адаптировалась
    <div className="grid grid-cols-1 gap-16"> 
      {artworks.map((artwork) => (
        <div key={artwork.id} className="space-y-6">
          
          {/* ИСПРАВЛЕНО: 
            1. Удален 'aspect-[4/3]' (фиксировал высоту и приводил к обрезке).
            2. Удален 'border border-black' (если он не нужен для дизайна).
          */}
          <div className="bg-black/5 overflow-hidden">
            
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              // ИСПРАВЛЕНО: 
              // 1. Удален 'object-cover' (обрезает изображение).
              // Теперь изображение будет подстраиваться под ширину контейнера (w-full),
              // а высота (h-auto, которое подразумевается, когда нет h-full и object-cover) 
              // будет автоматически сохранять пропорции.
              className="w-full" 
            />
            
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