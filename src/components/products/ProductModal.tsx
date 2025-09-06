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
  const [currentImage, setCurrentImage] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(true);
  
  const images = [
    product.image,
    product.previewImage1,
    product.previewImage2,
    product.previewImage3,
    product.previewImage4,
  ].filter(Boolean);
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(false);
    setPdfLoading(false);
  }

  function onDocumentLoadError() {
    setPdfError(true);
    setPdfLoading(false);
  }

  const renderPdfSection = () => {
    if (!product.pdfSpec) {
      return (
        <div className="p-4 text-center bg-gray-50 text-gray-600">
           <p>No PDF specification available for this product.</p>
          <p className="text-sm mt-1">Please contact support for detailed specifications.</p>
        </div>
      );
    }

    return (
      <>
        {pdfLoading && !pdfError && (
          <div className="flex items-center justify-center h-[400px] bg-gray-50">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
          </div>
        )}
        
        {!pdfError ? (
          <Document
            file={product.pdfSpec}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center h-[400px] bg-gray-50">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
              </div>
            }
          >
            <Page 
              pageNumber={currentPage} 
              width={400}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={
                <div className="flex items-center justify-center h-[400px] bg-gray-50">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-sky-600 rounded-full animate-spin" />
                </div>
              }
            />
            
            {numPages && (
              <div className="flex items-center justify-between bg-gray-100 p-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage <= 1}
                  className="px-3 py-1 bg-white rounded border enabled:hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                
                <p className="text-sm">
                  Page {currentPage} of {numPages}
                </p>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}
                  disabled={currentPage >= (numPages || 1)}
                  className="px-3 py-1 bg-white rounded border enabled:hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </Document>
        ) : (
          <div className="p-4 text-center bg-red-50 text-red-700">
            <p>Failed to load PDF preview.</p>
            <p className="text-sm mt-1">Please try downloading the specification sheet instead.</p>
          </div>
        )}

        {product.pdfSpec && !pdfError && (
          <a 
            href={product.pdfSpec}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sky-600 hover:text-sky-700 font-medium"
          >
            Download Full Specification (PDF)
          </a>
        )}
      </>
    );
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
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
        
        <div className="overflow-y-auto p-6 flex-1">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                <img 
                  src={images[currentImage]} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors text-2xl"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    
                    <button
                      onClick={() => navigateImage('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors text-2xl"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        currentImage === index ? 'border-sky-600' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
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
                        <p className="text-gray-700">No specifications available for this product.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="mt-8">
                 <h4 className="text-lg font-medium mb-4">For Product COA</h4>
                <div className="border rounded-lg overflow-hidden">
                  {renderPdfSection()}
                </div>
              </div>
            </div>
          </div>
        </div>
        
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