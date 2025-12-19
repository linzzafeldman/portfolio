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
  const [currentArtworkImages, setCurrentArtworkImages] = useState<string[]>([]);

  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = currentArtworkImages.indexOf(selectedImage || '');
    if (currentIndex === -1) return;
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= currentArtworkImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = currentArtworkImages.length - 1;
    setSelectedImage(currentArtworkImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentArtworkImages]);

  return (
    <div className="flex flex-col gap-40"> {/* Большой отступ между блоками проектов */}
      {artworks.map((artwork) => {
        const displayImages = (artwork.images && artwork.images.length > 0)
          ? artwork.images
          : (artwork.imageUrl ? [artwork.imageUrl] : []);

        return (
          <div key={artwork.id} className="w-full">
            {/* СЕТКА (КВАДРАТЫ) */}
            <div className="flex flex-col md:flex-row gap-2 w-full">
              
              {/* Главная картинка (50% ширины, Квадрат) */}
              <div 
                className="md:w-1/2 aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in relative group"
                onClick={() => {
                  setSelectedImage(displayImages[0]);
                  setCurrentArtworkImages(displayImages);
                }}
              >
                <img
                  src={displayImages[0]}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Правая часть (сетка маленьких квадратов) */}
              {displayImages.length > 1 && (
                <div className="md:w-1/2 grid grid-cols-2 gap-2">
                  {displayImages.slice(1, 5).map((img, idx) => (
                    <div 
                      key={idx} 
                      className="aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in group"
                      onClick={() => {
                        setSelectedImage(img);
                        setCurrentArtworkImages(displayImages);
                      }}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                  
                  {/* Заполнители для сохранения формы квадрата */}
                  {displayImages.length < 5 && Array.from({ length: 5 - displayImages.length }).map((_, i) => (
                    <div key={`filler-${i}`} className="aspect-square bg-neutral-50/30" />
                  ))}
                </div>
              )}
            </div>

            {/* ТЕКСТ СНИЗУ (с отступом сверху) */}
            <div className="mt-10">
              <h3 className="text-lg uppercase tracking-widest font-medium text-black">
                {artwork.title}
              </h3>
              <p 
                className="text-sm opacity-60 mt-3 leading-relaxed max-w-2xl font-light"
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            </div>
          </div>
        );
      })}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/98 backdrop-blur-xl p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-2xl font-light">✕</button>
          <div className="flex-1 flex items-center justify-center w-full max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} className="max-w-full max-h-full object-contain" alt="zoom" />
          </div>
          {currentArtworkImages.length > 1 && (
            <div className="mt-12 flex gap-4 overflow-x-auto no-scrollbar" onClick={(e) => e.stopPropagation()}>
              {currentArtworkImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 flex-shrink-0 cursor-pointer transition-all ${
                    selectedImage === img ? 'ring-1 ring-black scale-105' : 'opacity-20 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="thumb" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}