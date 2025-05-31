import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/productData';

const FeaturedProducts = () => {
  // Get only first 6 products for featured section
  const featuredProducts = products.slice(0, 6);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-block bg-[#00754a] hover:bg-[#1e3932] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;