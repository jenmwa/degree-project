import { IProduct } from 'app/_models/IProduct';
import { useState } from 'react';

export function useProductFormData(selectedProduct: IProduct): [IProduct, React.Dispatch<React.SetStateAction<IProduct>>] {
  const [formData, setFormData] = useState<IProduct>({
    productId: selectedProduct.productId,
    productTitle: selectedProduct.productTitle,
    productLongDescription: selectedProduct.productLongDescription,
    productShortDescription: selectedProduct.productShortDescription,
    productImagesUrl: selectedProduct.productImagesUrl || [],
    productPrice: selectedProduct.productPrice,
    created_at: selectedProduct.created_at,
    updated_at: null,
  });

  return [formData, setFormData];
}
