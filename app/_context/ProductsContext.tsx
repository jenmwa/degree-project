"use client";
import { IProduct } from "@/app/_models/IProduct";
import { supabase } from "@/lib/supabase";
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

  useEffect(() => {
    const subscription = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "Product",
        },
        async (payload) => {
          setProducts((prevProducts: IProduct[] | null) => {
            if (prevProducts) {
              const updatedProduct = payload.new as IProduct;
              const updatedIndex = prevProducts.findIndex(
                (product) => product.productId === updatedProduct.productId
              );

              if (updatedIndex !== -1) {
                const newProducts = [...prevProducts];
                newProducts[updatedIndex] = updatedProduct;
                console.log("Updated Products:", newProducts);
                return newProducts;
              } else {
                return [...prevProducts, updatedProduct];
              }
            } else {
              console.log("No Previous Products");
              return prevProducts;
            }
          });
        }
      )
      .subscribe();

    // Unsubscribe when the component unmounts
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

// import { useEffect, useState } from "react";
// import { useSupabase } from "use-supabase";

// const ProductList = () => {
//   const { supabase } = useSupabase();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const subscription = supabase
//       .from("products")
//       .on("INSERT", (payload) => {
//         setProducts((prevProducts) => [...prevProducts, payload.new]);
//       })
//       .on("UPDATE", (payload) => {
//         setProducts((prevProducts) =>
//           prevProducts.map((product) =>
//             product.id === payload.new.id ? payload.new : product
//           )
//         );
//       })
//       .on("DELETE", (payload) => {
//         setProducts((prevProducts) =>
//           prevProducts.filter((product) => product.id !== payload.old.id)
//         );
//       })
//       .subscribe();

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [supabase]);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>{product.name}</div>
//       ))}
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import { useSupabase } from "use-supabase";

// const ProductList = () => {
//   const { supabase } = useSupabase();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await supabase.from("products").select("*");
//       setProducts(data);
//     };

//     fetchData();

//     const subscription = supabase
//       .from("products")
//       .on("INSERT", (payload) => {
//         setProducts((prevProducts) => [...prevProducts, payload.new]);
//       })
//       .on("UPDATE", (payload) => {
//         setProducts((prevProducts) =>
//           prevProducts.map((product) =>
//             product.id === payload.new.id ? payload.new : product
//           )
//         );
//       })
//       .on("DELETE", (payload) => {
//         setProducts((prevProducts) =>
//           prevProducts.filter((product) => product.id !== payload.old.id)
//         );
//       })
//       .subscribe();

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [supabase]);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>{product.name}</div>
//       ))}
//     </div>
//   );
// };
// const subscription = supabase.channel('custom-all-changes'.on('postgres_changes', {event: '*', schema: 'public', table: 'Product'}, (payload: { new: any; }) => {products.value.push(payload.new)}).subscribe();
