export interface IProduct {
  productId: string;
  productTitle: string;
  productLongDescription: string;
  productShortDescription: string;
  // productImage: string[];
  product_images: IProduct_images[];
  productPrice: number;
  created_at: Date;
  updated_at: Date | null;
}

export interface IProduct_images {
  id: string,
  created_at: Date;
  image_id: string,
  images: string[],
  alt_text: string,
  isDeleted: boolean,
  // product_id: string
}
