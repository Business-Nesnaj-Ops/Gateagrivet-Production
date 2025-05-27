import { useEffect } from 'react';
import HomeHeroCarousel from '../components/home/HomeHeroCarousel';
import PartnerLogos from '../components/home/PartnerLogos';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Gateagrivet - Home';
  }, []);

  return (
    <div>
      <HomeHeroCarousel />
      <PartnerLogos />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our selection of high-quality products designed to meet your needs.
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </div>
      <AboutSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;