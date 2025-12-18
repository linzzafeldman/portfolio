import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

// Импорт стилей
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Artwork {
  id: string;
  images: string[]; 
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
          
          <div className="bg-black/5 overflow-hidden relative min-h-[300px] transition-all duration-500">
            
            {artwork.images && artwork.images.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination, Mousewheel]}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={{ forceToAxis: true }}
                
                // --- ОПТИМИЗАЦИЯ СКОРОСТИ ---
                preloadImages={false} 
                updateOnImagesReady={true}
                observer={true}
                observeParents={true}
                // ----------------------------

                spaceBetween={0}
                slidesPerView={1}
                className="w-full custom-swiper"
              >
                {artwork.images.map((imgUrl, index) => (
                  <SwiperSlide key={`${artwork.id}-img-${index}`}>
                    <img
                      src={imgUrl}
                      alt={`${artwork.title} - ${index + 1}`}
                      loading="lazy" 
                      className="w-full h-auto block transition-opacity duration-700 ease-in-out"
                      // Картинка скрыта, пока не загрузится, чтобы не тормозить отрисовку
                      style={{ opacity: 0 }}
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={artwork.images[0]}
                alt={artwork.title}
                loading="lazy"
                className="w-full h-auto block" 
              />
            )}
          </div>
          
          <div className="max-w-2xl">
            <h3 className="mb-2 tracking-wider text-lg uppercase">{artwork.title}</h3>
            <p className="opacity-60 text-sm leading-relaxed">{artwork.description}</p>
          </div>
        </div>
      ))}

      <style>{`
        .custom-swiper {
          --swiper-navigation-color: #fff;
          --swiper-pagination-color: #fff;
          --swiper-navigation-size: 18px;
        }

        .swiper-button-next, .swiper-button-prev {
          background-color: rgba(0, 0, 0, 0.4);
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 10;
        }

        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.4;
          box-shadow: 0 0 2px rgba(0,0,0,0.8);
        }

        /* Ускорение рендеринга через видеокарту */
        .swiper-slide img {
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}