import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20">
      <hr></hr>
      <h1></h1>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Contact our team today to learn more about our products and how we can help meet your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/products"
            className="inline-block bg-blue hover:bg-sky-600 text-black-600 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-transparent hover:bg-sky-600 text-gray border-2 border-sky font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;