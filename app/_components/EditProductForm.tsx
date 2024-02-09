import { IProduct } from "app/_models/IProduct";
import { ChangeEvent, FormEvent } from "react";
import Image from "next/image";

interface IEditProductsFormProps {
  selectedProduct: IProduct;
  handleFormSubmit: (e: FormEvent) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleFileImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fileImage: File | null;
  removeSelectedImage: () => void;
  close: () => void;
  toggleImage: (img: string) => void;
  selectedImages: string[];
}

export default function EditProductForm({
  selectedProduct,
  handleFormSubmit,
  handleOnChange,
  handleTextareaChange,
  fileImage,
  handleFileImageChange,
  removeSelectedImage,
  close,
  toggleImage,
  selectedImages,
}: IEditProductsFormProps) {
  return (
    <>
      <form
        key={selectedProduct.productId}
        id="changeProductForm"
        className="py-16"
        onSubmit={handleFormSubmit}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Ändra Produkt</h2>
            <p className="mt-1 leading-6">
              Genom att ändra information här så ändrar du direkt på hemsidan.
            </p>

            <div className="w-full mt-10 grid grid-cols-1 gap-y-8">
              <div className="w-full block">
                <label
                  htmlFor="productId"
                  className="block font-medium leading-6 "
                >
                  ProduktId
                </label>
                <div className="mt-2">
                  <div className="flex w-full shadow-sm ring-1 ring-inset  ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-rust-500">
                    <input
                      disabled
                      type="text"
                      name="productId"
                      id="productId"
                      className="block pl-4 bg-rust-500 text-white flex-1 border-0 py-1.5 focus:ring-0 sm:leading-6"
                      readOnly={true}
                      defaultValue={selectedProduct.productId}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="productTitle"
                  className="block font-medium leading-6"
                >
                  Titel
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="productTitle"
                    className="block w-full input-base"
                    defaultValue={selectedProduct.productTitle}
                    onChange={handleOnChange}
                    name="productTitle"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="productPrice"
                  className="block font-medium leading-6 "
                >
                  Pris
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="productPrice"
                    className="block w-full  input-base"
                    defaultValue={selectedProduct.productPrice}
                    onChange={handleOnChange}
                    name="productPrice"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="productShortDescription"
                  className="block font-medium leading-6 "
                >
                  Kort produktbeskrivning
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="productShortDescription"
                    className="block w-full input-base"
                    defaultValue={selectedProduct.productShortDescription}
                    name="productShortDescription"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3 col-span-full">
                <label
                  htmlFor="productLongDescription"
                  className="block font-medium leading-6 "
                >
                  Lång produktbeskrivning
                </label>
                <div className="mt-2">
                  <textarea
                    form="changeProductForm"
                    id="productLongDescription"
                    rows={3}
                    className="block w-full input-base"
                    defaultValue={selectedProduct.productLongDescription}
                    name="productLongDescription"
                    onChange={handleTextareaChange}
                  />
                </div>
                <p className="mt-3 leading-6 sm:text-sm italic text-gray-600">
                  Skriv allt du vill.
                </p>
              </div>

              <div className="sm:col-span-3 col-span-full">
                <div>
                  <p className="leading-6 mb-2">
                    Bilder som hör till produkten.<br></br>
                    <small> klicka för att ta bort.</small>
                  </p>
                </div>

                <div className="md:flex">
                  <div className="flex gap-4">
                    {selectedProduct.productImagesUrl.map((img, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => toggleImage(img)}
                      >
                        <Image
                          src={img}
                          alt={selectedProduct.productShortDescription}
                          width={100}
                          height={100}
                        />
                        {selectedImages.includes(img) && (
                          <div className="absolute inset-0 bg-black opacity-50"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="file"
                  className="block font-medium leading-6 text-gray-900"
                >
                  Ladda upp bild
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    className="block w-full  input-base"
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
                    width={100}
                    height={100}
                  />
                  <button onClick={removeSelectedImage}>
                    Ta bort denna bild.
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className=" font-semibold leading-6 text-gray-900"
            onClick={() => close()}
          >
            Avbryt
          </button>
          <button type="submit" className=" primary-button">
            Uppdatera produkt
          </button>
        </div>
      </form>
    </>
  );
}
