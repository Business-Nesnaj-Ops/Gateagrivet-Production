import { useState } from 'react';
import { Product } from '../../types/product';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-1">{product.description}</p>
          
          <button
            onClick={openModal}
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
          >
            More Info
          </button>
        </div>
      </div>
      
      {isModalOpen && (
        <ProductModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductCard;