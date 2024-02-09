import { IProduct } from "app/_models/IProduct";

export function updateProductState(prevProducts: IProduct[] | null, payload: any): IProduct[] | null {
  if (!prevProducts) {
    return prevProducts;
  }

  const updatedProduct = payload.new as IProduct;
  const updatedIndex = prevProducts.findIndex(
    (product) => product.productId === updatedProduct.productId
  );

  if (updatedIndex !== -1) {
    const newProducts = [...prevProducts];
    newProducts[updatedIndex] = updatedProduct;
    return newProducts;
  } else {
    return [...prevProducts, updatedProduct];
  }
}
