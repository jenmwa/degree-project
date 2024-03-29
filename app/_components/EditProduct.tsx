"use client";

import { IProduct } from "../_models/IProduct";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import React from "react";
import { imageUploadService } from "app/_services/imageUploadService";
import { generateImageUrl } from "app/_utilities/generateImageUrl";
import { updateFormDataWithImageUrl } from "app/_utilities/updateFormDataWithImageUrl";
import DialogComponent from "./DialogComponent";
import { initialDialog } from "app/_helpers/initialDialog";
import { IDialog } from "app/_models/IDialog";
import EditProductForm from "./EditProductForm";
import { PRODUCTUPDATE_IMGSRC_DIALOG } from "./DialogMessage";

interface IEditProductProps {
  selectedProduct: IProduct;
  handleFormData: (formData: IProduct) => void;
  close: () => void;
}

export default function EditProduct({
  selectedProduct,
  handleFormData,
  close,
}: IEditProductProps) {
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
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialog, setDialog] = useState<IDialog>(initialDialog);

  useEffect(() => {
    updateFormData(selectedProduct);
  }, [selectedProduct]);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const updateFormData = (updatedValues: Partial<IProduct>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updatedValues,
    }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const removeSelectedImage = () => {
    setFileImage(null);
    const fileInput = document.getElementById("fileUpload") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const toggleImage = (img: string) => {
    if (selectedImages.includes(img)) {
      setSelectedImages(selectedImages.filter((image) => image !== img));
    } else {
      setSelectedImages([...selectedImages, img]);
    }
  };

  const handleFileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileImage(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (fileImage) {
        const uuid = await imageUploadService(fileImage, selectedProduct);
        if (uuid) {
          imageUrl = generateImageUrl(uuid, selectedProduct.productId);
        } else {
          console.error("Image upload service returned undefined UUID");
          return;
        }
      }
      const updatedFormData = updateFormDataWithImageUrl(formData, imageUrl);

      updatedFormData.productImagesUrl.forEach((imageUrl, index) => {
        if (selectedImages.includes(imageUrl)) {
          updatedFormData.productImagesUrl.splice(index, 1);
        }
      });
      handleFormData(updatedFormData);
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error instanceof Error) {
        if (
          error.message === "No file selected." ||
          error.message ===
            "Invalid file type. Please upload a JPEG, JPG, or PNG file."
        ) {
          setDialog(PRODUCTUPDATE_IMGSRC_DIALOG);
          setShowDialog(true);
        }
      }
    }
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <EditProductForm
            handleFormSubmit={handleFormSubmit}
            selectedProduct={selectedProduct}
            handleOnChange={handleOnChange}
            handleTextareaChange={handleTextareaChange}
            fileImage={fileImage}
            handleFileImageChange={handleFileImageChange}
            removeSelectedImage={removeSelectedImage}
            close={close}
            toggleImage={toggleImage}
            selectedImages={selectedImages}
          ></EditProductForm>
        </div>
        <DialogComponent
          dialog={dialog}
          closeDialog={closeDialog}
          showDialog={showDialog}
        ></DialogComponent>
      </section>
    </>
  );
}
