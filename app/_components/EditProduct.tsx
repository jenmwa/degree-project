"use client";
import Image from "next/image";

import { IProduct } from "../_models/IProduct";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { supabaseAuthClient } from "lib/supabaseAuthClient";

interface IEditProductProps {
  selectedProduct: IProduct;
  handleFormData: (formData: IProduct) => void;
}

export default function EditProduct({
  selectedProduct,
  handleFormData,
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

  console.log("selected product:", selectedProduct);
  console.log("formData:", formData);

  useEffect(() => {
    updateFormData(selectedProduct);
  }, [selectedProduct]);

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

  //LADDA UPP BILD
  const handleFileImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileImage(event.target.files[0]);
      //funtion som previewar bild?
    }
  };
  console.log(fileImage);

  const removeSelectedImage = () => {
    setFileImage(null);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const uuid = self.crypto.randomUUID();
      const imageUrl = `https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/productImages/${selectedProduct.productId}/${selectedProduct.productTitle}`;

      await handleImageUpload(uuid);
      console.log("imageUrl", imageUrl);

      const updatedFormData = {
        ...formData,
        productImagesUrl: formData.productImagesUrl
          ? [...formData.productImagesUrl, imageUrl]
          : [imageUrl],
      };

      handleFormData(updatedFormData);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleImageUpload = async (uuid: string) => {
    try {
      if (!fileImage) {
        console.error("No file selected.");
        return;
      }

      const { data, error } = await supabaseAuthClient.storage
        .from("productImages")
        .upload(
          `/${selectedProduct.productId}/${selectedProduct.productTitle}${uuid}`,
          fileImage
        );

      if (error) {
        console.error("Error uploading image:", error.message);
        throw error;
      }

      if (data) {
        console.log("Image uploaded successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      throw error;
    }
  };

  console.log(formData);

  const handleDiscardEdit = () => {
    console.log("close this modal");
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <form
            key={selectedProduct.productId}
            id="changeProductForm"
            className="py-16"
            onSubmit={handleFormSubmit}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Ändra Produkt
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Genom att ändra information här så ändrar du direkt på
                  hemsidan.
                </p>

                <div className="w-full mt-10 grid grid-cols-1  gap-y-8 ">
                  <div className="w-full block">
                    <label
                      htmlFor="productId"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ProduktId
                    </label>
                    <div className="mt-2">
                      <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rust-500">
                        <input
                          type="text"
                          name="productId"
                          id="productId"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          readOnly={true}
                          defaultValue={selectedProduct.productId}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="productTitle"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Titel
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="productTitle"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
                        defaultValue={selectedProduct.productTitle}
                        onChange={handleOnChange}
                        name="productTitle"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="productPrice"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Pris
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        id="productPrice"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
                        defaultValue={selectedProduct.productPrice}
                        onChange={handleOnChange}
                        name="productPrice"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span">
                    <label
                      htmlFor="productShortDescription"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kort produktbeskrivning
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="productShortDescription"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
                        defaultValue={selectedProduct.productShortDescription}
                        name="productShortDescription"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="productLongDescription"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Lång produktbeskrivning
                    </label>
                    <div className="mt-2">
                      <textarea
                        form="changeProductForm"
                        id="productLongDescription"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
                        defaultValue={selectedProduct.productLongDescription}
                        name="productLongDescription"
                        onChange={handleTextareaChange}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Lång produktbeskrivning. Skriv allt du vill.
                    </p>
                  </div>
                  {/* 
                  <div className="col-span-full">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ladda upp bild
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <PhotoIcon
                        className="h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <button
                        type="button"
                        className=" bg-rust-300 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
                      >
                        Välj bild...
                      </button>
                    </div>
                  </div> */}

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ladda upp bild
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        name="fileUpload"
                        id="fileUpload"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rust-500 sm:text-sm sm:leading-6"
                        onChange={handleFileImageChange}
                      />
                    </div>
                  </div>
                  {fileImage && (
                    <div>
                      <p>Preview av vald bild:</p>
                      <Image
                        src={URL.createObjectURL(fileImage)}
                        alt="Thumb"
                        width={200}
                        height={100}
                      />
                      <button onClick={removeSelectedImage}>
                        Ta bort denna bild.
                      </button>
                    </div>
                  )}

                  {/* <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ladda upp bild
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-rust-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-rust-400 focus-within:ring-offset-2 hover:text-rust-500"
                          >
                             npm install react-dropzone 
                            <span>Ladda upp en bild</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">eller drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF upp till 10MB
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handleDiscardEdit}
              >
                Avbryt
              </button>
              <button
                type="submit"
                className=" bg-rust-300 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rust-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
              >
                Uppdatera produkt
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
