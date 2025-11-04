import React, { useState, useEffect, useCallback, useRef } from 'react';

interface ImageGalleryProps {
  images: string[];
  isMainGallery?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isMainGallery = false }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const touchStartX = useRef<number>(0);

  const showNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  const showPrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! - 1 + images.length) % images.length);
    }
  }, [selectedImageIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      } else if (event.key === 'ArrowLeft') {
        showPrevImage();
      }
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImageIndex, showNextImage, showPrevImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === 0) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const swipeThreshold = 50; // Minimum distance for a swipe

    if (deltaX > swipeThreshold) {
      showPrevImage();
    } else if (deltaX < -swipeThreshold) {
      showNextImage();
    }

    touchStartX.current = 0; // Reset for the next touch
  };

  const ThumbnailLayout = isMainGallery ? (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4">
      {images.map((src, index) => (
        <button
          key={index}
          onClick={() => setSelectedImageIndex(index)}
          className="aspect-square w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label={`View image ${index + 1} in full screen`}
        >
          <img
            src={src}
            alt={`Burmese amber specimen ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  ) : (
    <div className="container mx-auto px-4 print:hidden">
      <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap bg-white/70 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-amber-200/50 -mt-4 md:-mt-6 mb-8 md:mb-12">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={`View image ${index + 1} in full screen`}
          >
            <img
              src={src}
              alt={`Burmese amber specimen ${index + 1}`}
              className="w-20 h-20 md:w-24 md:h-24 object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );


  return (
    <>
      {ThumbnailLayout}

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out animate-fadeInAndZoom"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-colors"
            aria-label="Close image viewer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-colors"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative p-2 sm:p-4 cursor-default" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex]}
              alt={`Enlarged view of Burmese amber specimen ${selectedImageIndex + 1}`}
              className="max-w-[98vw] max-h-[98vh] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNextImage(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/70 transition-colors"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      <style>{`
        @keyframes fadeInAndZoom {
          from { 
            opacity: 0; 
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInAndZoom {
          animation: fadeInAndZoom 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ImageGallery;