import { useState, useEffect } from 'react';

interface Artwork {
  id: string;
  title: string;
  description: string;
  images?: string[];
  imageUrl?: string;
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="block w-full">
      {artworks.map((artwork) => {
        const allImages = artwork.images && artwork.images.length > 0 
          ? artwork.images 
          : [artwork.imageUrl].filter(Boolean) as string[];

        const isGrid = allImages.length > 1;

        return (
          <div key={artwork.id} className="block w-full mb-32 border-t border-black/10 pt-16">
            <div className="w-full">
              {!isGrid ? (
                /* ОДИНОЧНАЯ КАРТИНКА: УМЕНЬШЕННЫЙ КОНТЕЙНЕР */
                <div 
                  // max-w-4xl ограничивает ширину только картинки
                  // mx-auto центрирует этот уменьшенный контейнер
                  className="w-full max-w-2xl mx-auto aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in"
                  onClick={() => setSelectedImage(allImages[0])}
                >
                  <img 
                    src={allImages[0]} 
                    className="w-full h-full object-cover" 
                    alt={artwork.title} 
                  />
                </div>
              ) : (
                /* МИНИ-ГАЛЕРЕЯ: ОСТАЕТСЯ НА ПОЛНУЮ ШИРИНУ */
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div 
                    className="w-full aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in group"
                    onClick={() => setSelectedImage(allImages[0])}
                  >
                    <img 
                      src={allImages[0]} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 w-full">
                    {[1, 2, 3, 4].map((idx) => {
                      const currentImg = allImages[idx];
                      return (
                        <div 
                          key={idx}
                          className="relative w-full aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in group"
                          onClick={() => currentImg && setSelectedImage(currentImg)}
                        >
                          {currentImg ? (
                            <img 
                              src={currentImg} 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 will-change-transform" 
                            />
                          ) : (
                            <div className="absolute inset-0 w-full h-full bg-neutral-50" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ТЕКСТ: Остается привязанным к левому краю общего потока */}
            <div className="block mt-8 max-w-2xl text-left">
              <h3 className="text-lg uppercase tracking-widest font-medium text-black">
                {artwork.title}
              </h3>
              <div 
                className="text-sm opacity-60 mt-3 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            </div>
          </div>
        );
      })}

      {/* МОДАЛЬНОЕ ОКНО (Без изменений) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-3xl font-light z-[1010] p-4 hover:scale-110 transition-transform"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full view"
            className="fixed shadow-2xl bg-white"
            style={{ 
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: '80vh',
              maxWidth: '90vw',
              height: '80vh',
              width: 'auto',
              objectFit: 'contain',
              zIndex: 1005
            }}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}