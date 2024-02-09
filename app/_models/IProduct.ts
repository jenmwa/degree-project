export interface IProduct {
  productId: string;
  productTitle: string;
  productLongDescription: string;
  productShortDescription: string;
  productImagesUrl: string[];
  productPrice: number;
  created_at: Date;
  updated_at: Date | null;
}

