import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Artwork {
  id: string;
  // Теперь здесь массив строк (путей к картинкам)
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
          
          <div className="bg-black/5 overflow-hidden">
            {/* Если картинок больше одной — рендерим слайдер */}
            {artwork.images.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full custom-swiper"
              >
                {artwork.images.map((imgUrl, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imgUrl}
                      alt={`${artwork.title} - ${index + 1}`}
                      className="w-full h-auto block" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // Если картинка одна — просто выводим её как раньше
              <img
                src={artwork.images[0]}
                alt={artwork.title}
                className="w-full h-auto block" 
              />
            )}
          </div>
          
          <div className="max-w-2xl">
            <h3 className="mb-2 tracking-wider">{artwork.title}</h3>
            <p className="opacity-60">{artwork.description}</p>
          </div>
        </div>
      ))}

      {/* Небольшой стиль, чтобы подогнать кнопки Swiper под твой минимализм */}
      <style>{`
        .custom-swiper {
          --swiper-navigation-color: #000;
          --swiper-pagination-color: #000;
          --swiper-navigation-size: 24px;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}