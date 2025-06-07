import { useEffect } from 'react';
import HomeHeroCarousel from '../components/home/HomeHeroCarousel';
import PartnerLogos from '../components/home/PartnerLogos';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Gateagrivet - Premium Quality Products & Services';
  }, []);

  return (
    <div>
      <h1 class="hidden">Gateagrivet</h1>
      <h1 className="sr-only">Welcome to Gateagrivet - Your Premium Product Destination</h1>
      <HomeHeroCarousel />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Trusted by Leading Brands</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We partner with the world's most respected brands to bring you premium quality products and exceptional service. Our commitment to excellence has made us a trusted name in the industry.
          </p>
          <PartnerLogos />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium products, each chosen for its exceptional quality and value. From cutting-edge electronics to refreshing beverages, we offer only the best for our discerning customers.
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>
      <AboutSection />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Gateagrivet?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">We carefully select each product to ensure it meets our high standards for quality and performance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600">Our knowledgeable team is always ready to help you find the perfect product for your needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We stand behind every product we sell with our satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
};

export default HomePage;