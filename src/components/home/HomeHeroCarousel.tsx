import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const carouselData = [
  {
    id: 1,
    title: 'Premium Quality Products',
    description: 'Discover our extensive collection of high-quality products carefully curated to meet your needs., we offer only the finest selection.',
    buttonText: 'Shop Now',
    buttonLink: '/products',
    image: '/homepage/Animal Protein.jpg',
  },
  {
    id: 2,
    title: 'New Arrivals Weekly',
    description: 'Stay ahead of the curve with our weekly product updates. Experience the latest innovations and trending items before anyone else.',
    buttonText: 'View Collection',
    buttonLink: '/products',
    image: '/homepage/Marine Protein.jpg',
  },
  {
    id: 3,
    title: 'Premium Customer Service',
    description: 'Experience exceptional customer service with our dedicated team of experts. We\'re here to help you find the perfect products and answer all your questions.',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
    image: '/homepage/Plant Protein.jpg',
  }
];

const HomeHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  useEffect(() => {
    let interval: number | undefined;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block bg-[#00754a] hover:bg-[#1e3932] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/40 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/40 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHeroCarousel;