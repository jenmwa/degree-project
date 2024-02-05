import { IProduct } from "app/_models/IProduct";

export const updateFormDataWithImageUrl = (
  formData: IProduct,
  imageUrl: string
): IProduct => {

  const updatedProductImagesUrl = formData.productImagesUrl
    ? formData.productImagesUrl.filter((url) => typeof url === "string" && url.trim() !== "")
    : [];

  if (imageUrl.trim() !== "") {
    updatedProductImagesUrl.push(imageUrl);
  }

  return {
    ...formData,
    productImagesUrl: updatedProductImagesUrl,
  };
};
