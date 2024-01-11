"use client";
import { useEffect, useState } from "react";

interface IProducts {
  productId: string;
  productTitle: String;
  productLongDescription: string;
  productShortDescription: string;
  productImage: string[];
  productPrice: number;
  created_at: Date;
  updated_at: string | null;
}

const Butiken = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handlers?entity=Product");
        const data = await response.json();
        console.log("Products:", data);
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h1 className="mt-24 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Butiken
        </span>{" "}
        produkter
      </h1>
      <ul>
        {products?.map((booking) => (
          <li key={booking.productId}>
            Title:
            {booking.productTitle}
            <br></br>Price:
            {booking.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Butiken;
