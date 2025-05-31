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
            className="btn-primary"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="btn-outline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;