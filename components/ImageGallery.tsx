import React, { useState, useEffect, useCallback } from 'react';

interface ImageGalleryProps {
  images: string[];
  isMainGallery?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isMainGallery = false }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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


  const ThumbnailLayout = isMainGallery ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-300 transition-colors z-50"
            aria-label="Close image viewer"
          >
            &times;
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

          <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImageIndex]}
              alt={`Enlarged view of Burmese amber specimen ${selectedImageIndex + 1}`}
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ImageGallery;