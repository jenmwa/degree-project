export interface IProduct {
  productId: string;
  productTitle: String;
  productLongDescription: string;
  productShortDescription: string;
  productImage: string[];
  productPrice: number;
  created_at: Date;
  updated_at: string | null;
}
