import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  isMainGallery?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isMainGallery = false }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);


  const ThumbnailLayout = isMainGallery ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {images.map((src, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(src)}
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
            onClick={() => setSelectedImage(src)}
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-300 transition-colors z-50"
            aria-label="Close image viewer"
          >
            &times;
          </button>
          <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view of Burmese amber specimen"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
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