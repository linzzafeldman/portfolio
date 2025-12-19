import { useState } from 'react';

interface Artwork {
  id: string;
  title: string;
  description: string;
  // Поддерживаем оба формата данных для плавного перехода
  images?: string[]; 
  imageUrl?: string; 
}

interface GalleryProps {
  artworks: Artwork[];
}

export function Gallery({ artworks }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentArtworkImages, setCurrentArtworkImages] = useState<string[]>([]);

  const openLightbox = (image: string, allImages: string[]) => {
    setSelectedImage(image);
    setCurrentArtworkImages(allImages);
  };

  return (
    <div className="grid grid-cols-1 gap-24">
      {artworks.map((artwork) => {
        // Определяем массив изображений: приоритет у массива images, иначе берем одиночный imageUrl
        const displayImages = artwork.images || (artwork.imageUrl ? [artwork.imageUrl] : []);
        
        if (displayImages.length === 0) return null;

        return (
          <div key={artwork.id} className="group">
            {/* СЕТКА: 1 большая картинка или 1 большая + сетка справа */}
            <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[600px]">
              
              {/* Главное изображение */}
              <div 
                className="flex-[2] overflow-hidden bg-gray-50 cursor-zoom-in relative"
                onClick={() => openLightbox(displayImages[0], displayImages)}
              >
                <img
                  src={displayImages[0]}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Сетка дополнительных картинок (только если их > 1) */}
              {displayImages.length > 1 && (
                <div className="flex-1 grid grid-cols-2 gap-2">
                  {displayImages.slice(1, 5).map((img, idx) => (
                    <div 
                      key={idx} 
                      className="overflow-hidden bg-gray-50 cursor-zoom-in"
                      onClick={() => openLightbox(img, displayImages)}
                    >
                      <img
                        src={img}
                        alt={`${artwork.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Описание под изображением */}
            <div className="mt-8 max-w-2xl">
              <h3 className="text-lg uppercase tracking-[0.2em] font-medium text-black">
                {artwork.title}
              </h3>
              <p className="text-sm opacity-50 mt-3 leading-relaxed font-light">
                {artwork.description}
              </p>
            </div>
          </div>
        );
      })}

      {/* МОДАЛЬНОЕ ОКНО (LIGHTBOX) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-300">
          
          {/* Кнопка закрытия */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-10 text-3xl font-light hover:rotate-90 transition-transform duration-300 z-[110]"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Основное увеличенное фото */}
          <div className="flex-1 flex items-center justify-center w-full max-h-[75vh]">
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain shadow-sm" 
              alt="Full view"
            />
          </div>

          {/* Сетка превью снизу для переключения */}
          {currentArtworkImages.length > 1 && (
            <div className="mt-10 flex gap-4 overflow-x-auto py-4 max-w-full no-scrollbar">
              {currentArtworkImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 flex-shrink-0 cursor-pointer transition-all duration-300 p-0.5 ${
                    selectedImage === img 
                      ? 'ring-1 ring-black scale-105' 
                      : 'opacity-30 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}