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
          <div key={artwork.id} className="block w-full">
            <div className="w-full pt-16">
              {!isGrid ? (
                /* ОДИНОЧНАЯ КАРТИНКА */
                <div 
                  className="w-full max-w-3xl mx-auto aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in"
                  onClick={() => setSelectedImage(allImages[0])}
                >
                  <img src={allImages[0]} className="w-full h-full object-cover" alt={artwork.title} />
                </div>
              ) : (
                /* МИНИ-ГАЛЕРЕЯ */
                <div className="grid grid-cols-2 gap-1 w-full bg-white"> 
                  {/* gap-1 и bg-white создают белую линию */}
                  
                  <div 
                    className="w-full aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in group"
                    onClick={() => setSelectedImage(allImages[0])}
                  >
                    <img 
                      src={allImages[0]} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 bg-white w-full">
                    {[1, 2, 3, 4].map((idx) => {
                      const currentImg = allImages[idx];
                      return (
                        <div 
                          key={idx}
                          className="relative aspect-square overflow-hidden bg-neutral-50 cursor-zoom-in group"
                          onClick={() => currentImg && setSelectedImage(currentImg)}
                        >
                          {currentImg && (
                            <img 
                              src={currentImg} 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className=" block max-w-2xl text-left">
              <h3 className="text-lg uppercase tracking-widest font-bold text-black">{artwork.title}</h3>
              <div 
                className="text-sm opacity-60 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            </div>
          </div>
        );
      })}

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute  right-8 text-3xl font-light z-[1010] p-1">✕</button>
          <img 
            src={selectedImage} 
            className="fixed shadow-2xl bg-white"
            style={{ 
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              maxHeight: '80vh', maxWidth: '90vw', height: '80vh', width: 'auto',
              objectFit: 'contain', zIndex: 1005
            }}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}