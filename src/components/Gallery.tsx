import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, FreeMode } from 'swiper/modules';

// Импорт стилей Swiper
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
          
          <div className="bg-black/5 overflow-hidden relative">
            {artwork.images.length > 1 ? (
              <Swiper
                // Подключаем модули, включая Mousewheel для удобства
                modules={[Navigation, Pagination, Mousewheel]}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={{ forceToAxis: true }} // Позволяет листать слайдер колесиком, не мешая скроллу страницы
                spaceBetween={0}
                slidesPerView={1}
                className="w-full custom-swiper"
              >
                {artwork.images.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imgUrl}
                      alt={`${artwork.title} - ${index + 1}`}
                      // Ленивая загрузка средствами браузера
                      loading="lazy" 
                      className="w-full h-auto block" 
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

      {/* Стили для кнопок и точек */}
      <style>{`
        .custom-swiper {
          --swiper-navigation-color: #fff;
          --swiper-pagination-color: #fff;
          --swiper-navigation-size: 18px;
        }

        /* Кнопки Вперед/Назад */
        .swiper-button-next, .swiper-button-prev {
          background-color: rgba(0, 0, 0, 0.4); /* Полупрозрачный фон */
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          backdrop-filter: blur(4px); /* Эффект матового стекла */
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }

        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: bold;
        }

        /* Точки (Pagination) */
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.4;
          box-shadow: 0 0 2px rgba(0,0,0,0.8); /* Тень, чтобы видеть на белом */
          width: 6px;
          height: 6px;
          transition: opacity 0.3s;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        /* Скрываем кнопки на мобильных устройствах, если нужно (опционально) */
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important; /* На мобилках лучше свайпать пальцем */
          }
        }
      `}</style>
    </div>
  );
}