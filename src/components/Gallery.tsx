import { useState } from 'react';

interface Artwork {
  id: string;
  title: string;
  description: string;
  images?: string[];   // Массив для нескольких ракурсов
  imageUrl?: string;  // Строка для одиночных изображений
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
        // Усиленная логика выбора: сначала ищем массив, потом строку
        const displayImages = (artwork.images && artwork.images.length > 0)
          ? artwork.images
          : (artwork.imageUrl ? [artwork.imageUrl] : []);

        // Если данных совсем нет, пропускаем этот элемент
        if (displayImages.length === 0) return null;

        return (
          <div key={artwork.id} className="group">
            {/* СЕТКА: Главное изображение + опциональная сетка справа */}
            <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[600px]">
              
              {/* Главное изображение (слева) */}
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

              {/* Сетка дополнительных картинок (справа, только если их > 1) */}
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
              <p 
                className="text-sm opacity-50 mt-3 leading-relaxed font-light"
                // Позволяет использовать &nbsp; и другие HTML-теги в описании
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            </div>
          </div>
        );
      })}

      {/* МОДАЛЬНОЕ ОКНО (LIGHTBOX) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)} // Закрытие при клике на фон
        >
          {/* Кнопка закрытия */}
          <button 
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            className="absolute top-8 right-10 text-3xl font-light hover:rotate-90 transition-transform duration-300 z-[110]"
          >
            ✕
          </button>

          {/* Основное фото */}
          <div 
            className="flex-1 flex items-center justify-center w-full max-h-[75vh]"
            onClick={(e) => e.stopPropagation()} // Чтобы клик по самой картинке не закрывал окно
          >
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain shadow-sm" 
              alt="Detailed view"
            />
          </div>

          {/* Превью снизу */}
          {currentArtworkImages.length > 1 && (
            <div 
              className="mt-10 flex gap-4 overflow-x-auto py-4 max-w-full no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
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
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CSS для скрытия скроллбара в превью */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}