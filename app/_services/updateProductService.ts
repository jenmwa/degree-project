import { IProduct } from "app/_models/IProduct";

export async function updateProductService(formData: IProduct) {
  try {
    const response = await fetch("/api/updateProduct", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: formData.productId,
        productPrice: formData.productPrice,
        productTitle: formData.productTitle,
        productLongDescription: formData.productLongDescription,
        productShortDescription: formData.productShortDescription,
        productImagesUrl: formData.productImagesUrl,
        created_at: formData.created_at,
        updated_at: formData.created_at,
      }),
    });
    if (response.ok) {
      console.log("Product updated successfully");
    } else {
      console.error("Failed to update product");
    }
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
