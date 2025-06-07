import { useEffect } from 'react';
import ImageGallery from '../components/about/ImageGallery';
import TeamMembers from '../components/about/TeamMembers';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Gateagrivet - About Us';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h1>
            <h1 class="hidden">Gateagrivet</h1>
            <p className="text-lg text-gray-600">
              Learn about our mission, vision, and the team behind our products.
            </p>
          </div>
          
          {/* Company story */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 2010, Gateagrivet has grown from a small startup to a leading provider of high-quality products. 
                Our journey began with a simple mission: to create innovative solutions that improve people's lives.
              </p>
              <p>
                Over the years, we've expanded our product line and reach, but our commitment to quality and customer 
                satisfaction has remained unwavering. We believe in sustainable practices and building long-lasting 
                relationships with our clients and partners.
              </p>
              <p>
                Today, we continue to innovate and push boundaries, staying true to our core values while adapting to 
                the evolving needs of our customers.
              </p>
            </div>
          </div>
          
          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To provide innovative, high-quality products that enhance our customers' lives while maintaining 
                sustainable practices and fostering a culture of excellence and integrity.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be recognized globally as a leader in our industry, setting the standard for product quality, 
                innovation, and customer service, while positively impacting communities around the world.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Quality',
                  description: 'We are committed to excellence in everything we do, from product design to customer service.'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously seek new ways to improve our products and processes to better serve our customers.'
                },
                {
                  title: 'Integrity',
                  description: 'We conduct our business with honesty, transparency, and ethical standards.'
                },
                {
                  title: 'Sustainability',
                  description: 'We strive to minimize our environmental impact and promote responsible practices.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Workspace</h2>
            <ImageGallery />
          </div>
          
          {/* Team Members */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <TeamMembers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;