export type ProductCategory = 'electronics' | 'clothing' | 'home' | 'beauty' | 'sports';

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  category: ProductCategory;
  image: string;
  specifications?: ProductSpecifications;
  pdfSpec?: string;
}