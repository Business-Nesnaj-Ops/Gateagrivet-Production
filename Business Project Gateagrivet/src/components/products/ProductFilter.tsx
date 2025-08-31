import { Search } from 'lucide-react';
import { ProductCategory } from '../../types/product';

interface ProductFilterProps {
  selectedCategory: ProductCategory | 'all';
  setSelectedCategory: (category: ProductCategory | 'all') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ProductFilter = ({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm
}: ProductFilterProps) => {
  const categories: { value: ProductCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Categories' },
    { value: 'Animal Protein', label: 'Animal Protein' },
    { value: 'Marine Protein', label: 'Marine Protein' },
    { value: 'Plant Protein', label: 'Plant Protein' },
    { value: 'Other Products', label: 'Other Products' },
    //{ value: 'sports', label: 'Sports & Outdoors' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category filter */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'all')}
            className="w-full rounded-md border-sky-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 py-2 px-3 border"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search by name or description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;