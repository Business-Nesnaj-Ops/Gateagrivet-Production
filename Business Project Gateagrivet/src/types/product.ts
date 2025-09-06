export type ProductCategory = 'Plant Protein' | 'Animal Protein' | 'Marine Protein' | 'Other Products';

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  content?: string;
  category: ProductCategory;
  image: string;
  specifications?: ProductSpecifications;
  pdfSpec?: string;
}