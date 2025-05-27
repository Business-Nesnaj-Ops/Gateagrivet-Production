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
              Founded in 2010, our company has been dedicated to providing high-quality products and exceptional service to our customers. 
              We believe in sustainable practices and maintaining strong relationships with our partners and clients.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment to excellence drives us to carefully select each product in our catalog, ensuring it meets our rigorous quality standards. 
              We work directly with manufacturers and trusted suppliers to bring you the best products at competitive prices.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experts works tirelessly to ensure that we deliver only the best products to meet the diverse needs of our customers. 
              We take pride in our attention to detail and commitment to excellence.
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