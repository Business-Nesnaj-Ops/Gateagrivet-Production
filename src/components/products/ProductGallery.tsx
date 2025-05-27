import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImage {
  id: number;
  url: string;
  alt: string;
  view: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  title: string;
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(new Array(images.length).fill(true));
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    setIsLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    setSelectedImage((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="w-full">
      {/* Main Image Display */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img
          ref={(el) => (imageRefs.current[selectedImage] = el)}
          data-src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading[selectedImage] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => handleImageLoad(selectedImage)}
        />
        
        {isLoading[selectedImage] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={() => navigateImage('prev')}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigateImage('next')}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* View Label */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {images[selectedImage].view}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-lg overflow-hidden relative ${
              selectedImage === index ? 'ring-2 ring-sky-600' : 'hover:opacity-80'
            }`}
          >
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              data-src={image.url}
              alt={image.alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isLoading[index] ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => handleImageLoad(index)}
            />
            {isLoading[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-6 h-6 border-2 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;