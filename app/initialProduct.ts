import { IProduct } from "./_models/IProduct";

export const initialProduct: IProduct = {
  productId: "",
  productTitle: "",
  productLongDescription: "",
  productShortDescription: "",
  productImagesUrl: [""],
  productPrice: 0,
  created_at: new Date(),
  updated_at: null,
};
