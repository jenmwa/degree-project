"use client";
import React from "react";
import { useProductContext } from "../../_context/ProductsContext";
import { useRouter } from "next/navigation";

export const Dashboard = () => {
  console.log("hello admin");
  const { products, isLoading, isError } = useProductContext();
  console.log(products);
  const router = useRouter();

  const signoutAdmin = async () => {
    console.log("sign out please");
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
      });
      if (response.ok) {
        console.log("Sign-out successful");
        router.push("/admin");
      } else {
        // Handle sign-out error
        console.error("Sign-out failed");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <>
      {" "}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <button onClick={signoutAdmin}>LOGGA UT</button>
        <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello
          </span>{" "}
          Admin aka
        </h1>
        {isLoading ? (
          <p>Laddar...</p>
        ) : (
          <div>
            <p>Orders:</p>

            <ul>
              {products?.map((product) => (
                <li key={product.productId}>
                  Id:
                  {product.productShortDescription}
                  {product.productTitle}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Dashboard;
