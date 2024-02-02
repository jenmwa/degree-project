export interface IProduct {
  productId: string;
  productTitle: string;
  productLongDescription: string;
  productShortDescription: string;
  // productImage: string[];
  product_images: IProduct_images[];
  productImagesUrl: string[];
  productPrice: number;
  created_at: Date;
  updated_at: Date | null;
}

export interface IProduct_images {
  id: string,
  name: string
  // product_id: string
}
