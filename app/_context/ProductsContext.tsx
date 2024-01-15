"use client";
import { IProduct } from "@/app/_models/IProduct";
import { createContext, useContext, useEffect, useState } from "react";

interface ProductContextType {
  products: IProduct[] | null;
  isLoading: boolean;
  isError: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handlers?entity=Product");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};
