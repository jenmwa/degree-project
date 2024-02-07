import { IProduct } from "app/_models/IProduct";
import { supabaseAuthClient } from "lib/supabaseAuthClient";

export async function imageUploadService(fileImage: File, selectedProduct: IProduct) {
  try {
    if (!fileImage) {
      console.error("No file selected.");
      return;
    }

    const fileNameParts = fileImage.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

    if (!['jpeg', 'jpg', 'png'].includes(fileExtension)) {
      throw new Error("Invalid file type. Please upload a JPEG, JPG, or PNG file.");
    }

    const uuid = self.crypto.randomUUID();
    const { data, error } = await supabaseAuthClient.storage
      .from("productImages")
      .upload(`/${selectedProduct.productId}/${uuid}`, fileImage);

    if (error) {
      console.error("Error uploading image:", error.message);
      throw error;
    }

    if (data) {
      console.log("Image uploaded successfully, DATA:", data, data.path);
      return uuid;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
};
