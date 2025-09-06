import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Product } from '../../types/product';

// Set worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specification'>('description');
  const [pdfError, setPdfError] = useState(false);
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError() {
    setPdfError(true);
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Body */}
        <div className="overflow-y-auto p-6 flex-1">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product image */}
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            
            {/* Product info */}
            <div className="md:w-1/2">
              <div className="border-b mb-4">
                <div className="flex mb-2">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'description'
                        ? 'text-sky-600 border-b-2 border-sky-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('specification')}
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'specification'
                        ? 'text-sky-600 border-b-2 border-sky-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Specification
                  </button>
                </div>
              </div>
              
              {activeTab === 'description' ? (
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.fullDescription || product.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    
                  </p>
                </div>
              ) : (
                <div className="border rounded-lg p-4">
                  <h4 className="text-lg font-medium mb-4">Technical Specifications</h4>
                  
                  <div className="space-y-2">
                    {product.specifications ? (
                      Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-2 gap-2 border-b py-2">
                          <span className="text-gray-600 font-medium">{key}:</span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))
                    ) : (
                      <div className="py-2">
                        <p className="text-gray-700">Download the PDF specification sheet below for detailed product specifications.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* PDF viewer section */}
              <div className="mt-8">
                 {/* <h4 className="text-lg font-medium mb-4">Product Specification Sheet</h4>*/}
                
                {pdfError ? (
                  <div className="border rounded-lg p-4 text-center">
                    <p className="text-gray-600">PDF specification sheet is currently unavailable.</p>
                    <p className="text-sm text-gray-500 mt-2">Please contact support for detailed specifications.</p>
                  </div>
                ) : (
                  <div className="border rounded-lg overflow-hidden">
                    <Document
                      file={product.pdfSpec || '/pdfs/default-spec.pdf'}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      className="flex justify-center"
                    >
                      <Page 
                        pageNumber={currentPage} 
                        width={300}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                    
                    {numPages && (
                      <div className="flex items-center justify-between bg-gray-100 p-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage <= 1}
                          className="px-2 py-1 bg-white rounded border enabled:hover:bg-gray-50 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        
                        <p className="text-sm">
                          Page {currentPage} of {numPages}
                        </p>
                        
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages || 1))}
                          disabled={currentPage >= (numPages || 1)}
                          className="px-2 py-1 bg-white rounded border enabled:hover:bg-gray-50 disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                {!pdfError && (
                  <a 
                    href={product.pdfSpec || '/pdfs/default-spec.pdf'}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sky-600 hover:text-sky-700 font-medium"
                  >
                    Download Full Specification (PDF)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;