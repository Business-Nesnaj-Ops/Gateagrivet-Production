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
              GateAgrivet is a Philippine-based company, established by Doctors of Veterinary Medicine and an Animal Nutritionist, specializing in the importation and distribution of high-quality animal feeds, feed ingredients, veterinary products, and biologics. With offices and warehouses in Sta. Rosa, Laguna, and Naga City, Camarines Sur, we serve the livestock and aquaculture industries nationwide.

We are the exclusive importer and distributor of Empyreal® 75 (Corn Protein Concentrate) from Cargill USA and supply premium protein meals, enzymes, and feed additives. Our services include farm consultation and animal nutrition expertise.

Licensed by BOC and BAI, we operate with full compliance as a trusted partner in the animal industry.
            </p>
          </div>
          
          {/* Company story */}
          {/*<div className="mb-16">
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
          </div>*/}
          
          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To provide farmers and feed manufacturers with high-quality products and expert solutions that enhance animal health, nutrition, and productivity, while maintaining the highest standards of service and compliance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading and most trusted importer and distributor of animal feed ingredients and veterinary products in the Philippines, empowering the livestock and aquaculture sectors toward sustainable growth.
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
                  description: 'We deliver only the highest standard of products and services to our clients.'
                },
                {
                  title: 'Expertise',
                  description: 'We apply veterinary and nutritional knowledge to provide effective, science-based solutions.'
                },
                {
                  title: 'Integrity',
                  description: 'We uphold honesty, transparency, and ethical practices in every transaction.'
                },
                {
                  title: 'Customer Commitment',
                  description: 'We build lasting relationships by understanding and supporting our clients’ needs.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and solutions to improve animal health and productivity.'
                },
                {
                  title: 'Sustainability',
                  description: 'We promote responsible practices that support the long-term health of the agriculture and aquaculture industries.'
                },
                {
                  title: 'Collaboration',
                  description: 'We work hand-in-hand with farmers, feed manufacturers, and industry partners for shared success.'
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">LICENSES TO OPERATE</h2>
            <ImageGallery />
          </div>
          
          {/* Team Members */}
         {/*  <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <TeamMembers />
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;