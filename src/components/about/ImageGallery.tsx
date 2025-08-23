import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: '/img/2025 LTO BAI IMPORTER.GATEAGRIVET INC. (1)_page-0001.jpg',
    alt: '2025_LTO_BAI_IMPORTER_GATEAGRIVET_INC..png',
  },
  {
    id: 2,
     src: '/img/2025 LTO BAI INDENTOR.GATEGRIVET INC_page-0001.jpg',
    alt: '2025_LTO_BAI_IMPORTER_GATEAGRIVET_INC..png',
  },
  {
    id: 3,
     src: '/img/2025 LTO BAI SUPPLIER.GATEAGRIVET INC_page-0001.jpg',
    alt: '2025_LTO_BAI_IMPORTER_GATEAGRIVET_INC..png',
  },
  /*
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaboration',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Product showcase',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team meeting',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Design team at work',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Product testing',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Company culture',
  },
  */
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setSelectedImage(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage !== null) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60]"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <div 
            className="flex items-center justify-center w-full h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors text-5xl font-thin h-full top-0 w-1/6 flex items-center justify-start pl-4 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors text-5xl font-thin h-full top-0 w-1/6 flex items-center justify-end pr-4 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p>{galleryImages[selectedImage].alt}</p>
            <p className="text-sm text-gray-400 mt-1">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;