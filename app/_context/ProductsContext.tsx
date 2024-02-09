"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabaseAuthClient } from "../../lib/supabaseAuthClient";
import { IProduct } from "../_models/IProduct";
import React from "react";
import { getProductsService } from "app/_services/getProductsService";
import { updateProductState } from "app/_utilities/updateProductState";

interface ProductContextType {
  products: IProduct[] | null;
  isLoading: boolean;
  isError: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsService();
        setProducts(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const subscription = supabaseAuthClient
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Product",
        },
        async (payload) => {
          setProducts((prevProducts: IProduct[] | null) =>
            updateProductState(prevProducts, payload)
          );
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [setProducts]);

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};
