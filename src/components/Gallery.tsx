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

  const checkVideo = (url: string) => url?.toLowerCase().endsWith('.mp4');

  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play().catch(err => console.log("Playback blocked", err));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0; 
  };

  return (
    <div className="block w-full">
      {artworks.map((artwork) => {
        const allImages = artwork.images && artwork.images.length > 0 
          ? artwork.images 
          : [artwork.imageUrl].filter(Boolean) as string[];

        const isGrid = allImages.length > 1;

        return (
          <div key={artwork.id} className="block w-full mb-32">
            <div className="w-full pt-16">
              {!isGrid ? (
                <div 
                  className="w-full max-w-3xl mx-auto aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in"
                  onClick={() => setSelectedImage(allImages[0])}
                >
                  {checkVideo(allImages[0]) ? (
                    <video 
                      src={allImages[0]} 
                      className="w-full h-full object-cover" 
                      muted loop playsInline 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ) : (
                    <img src={allImages[0]} className="w-full h-full object-cover" alt={artwork.title} />
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-1 w-full"> 
                  <div 
                    className="w-full aspect-square overflow-hidden bg-neutral-100 cursor-zoom-in group"
                    onClick={() => setSelectedImage(allImages[0])}
                  >
                    {checkVideo(allImages[0]) ? (
                      <video 
                        src={allImages[0]} 
                        className="w-full h-full object-cover" 
                        muted loop playsInline 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      />
                    ) : (
                      <img 
                        src={allImages[0]} 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                      />
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 w-full">
                    {[1, 2, 3, 4].map((idx) => {
                      const currentMedia = allImages[idx];
                      if (!currentMedia) return <div key={idx} className="aspect-square bg-neutral-50" />;
                      
                      return (
                        <div 
                          key={idx}
                          className="relative aspect-square overflow-hidden bg-neutral-50 cursor-zoom-in group"
                          onClick={() => setSelectedImage(currentMedia)}
                        >
                          {checkVideo(currentMedia) ? (
                            <video 
                              src={currentMedia} 
                              className="w-full h-full object-cover" 
                              muted loop playsInline 
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            />
                          ) : (
                            <img 
                              src={currentMedia} 
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

            <div className="artwork-info-container block max-w-2xl text-left">
              <h3 className="artwork-title text-lg uppercase tracking-widest font-bold text-black">
                {artwork.title}
              </h3>
              <div 
                className="artwork-description text-sm opacity-60 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: artwork.description }}
              />
            </div>
          </div>
        );
      })}

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[999] backdrop-blur-xl flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button className="fixed top-8 right-8 text-3xl font-light z-[1010] p-1">✕</button>
          
          {checkVideo(selectedImage) ? (
            <video 
              src={selectedImage} 
              controls autoPlay loop
              className="max-h-[85vh] max-w-[90vw] shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          ) : (
            <img 
              src={selectedImage} 
              className="shadow-2xl bg-white object-contain"
              style={{ maxHeight: '85vh', maxWidth: '90vw' }}
              onClick={(e) => e.stopPropagation()} 
            />
          )}
        </div>
      )}
    </div>
  );}