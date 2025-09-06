export type ProductCategory = 'electronics' | 'clothing' | 'home' | 'beauty' | 'sports';

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  Crude Protein Content?: string;
  category: ProductCategory;
  image: string;
  previewImage1: string;
  previewImage2: string;
  previewImage3: string;
  previewImage4: string;
  previewImage5: string;
  specifications?: ProductSpecifications;
  pdfSpec?: string;
}