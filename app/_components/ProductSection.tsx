"use client";
import { useProductContext } from "../_context/ProductsContext";
import { IProduct } from "../_models/IProduct";
import ImageCarousel from "./ImageCarousel";

interface IProductsSectionProps {
  showProduct: (product: IProduct) => void;
}

export default function ProductSection({ showProduct }: IProductsSectionProps) {
  const { products, isLoading, isError } = useProductContext();

  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            {isLoading ? (
              <p>Laddar...</p>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900">Buketter</h2>
                <p>Lorem ipsum dolar</p>
                <p>Klicka för att läsa mer.</p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0 cursor-pointer">
                  {products?.map((foundProduct) => (
                    <div
                      key={foundProduct.productId}
                      className="group relative"
                      onClick={() => showProduct(foundProduct)}
                    >
                      <div className="relative h-80 w-full overflow-hidden bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-96">
                        <ImageCarousel foundProduct={foundProduct} />
                      </div>
                      <div className="bg-gray-200 w-4/5 mx-auto relative p-10 z-10 text-center -mt-16 lg:-mt-12 sm:-mt-16">
                        <h3 className="mt-6 text-sm text-gray-500">
                          <span className="absolute inset-0" />
                          {foundProduct.productTitle}
                        </h3>
                        <p className="text-base font-semibold">
                          {foundProduct.productShortDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
