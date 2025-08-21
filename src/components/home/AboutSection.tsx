import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="About our company" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Company</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
GateAgrivet is a Philippine-based company, established by Doctors of Veterinary Medicine and an Animal Nutritionist, specializing in the importation and distribution of high-quality animal feeds, feed ingredients, veterinary products, and biologics. With offices and warehouses in Sta. Rosa, Laguna, and Naga City, Camarines Sur, we serve the livestock and aquaculture industries nationwide.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are the exclusive importer and distributor of Empyreal® 75 (Corn Protein Concentrate) from Cargill USA and supply premium protein meals, enzymes, and feed additives. Our services include farm consultation and animal nutrition expertise.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Licensed by BOC and BAI, we operate with full compliance as a trusted partner in the animal industry.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;