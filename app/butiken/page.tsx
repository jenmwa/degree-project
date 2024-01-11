"use client";
import { useEffect } from "react";

const Butiken = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/handlers?entity=Product");
        const data = await response.json();

        console.log("Products:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Bookings</h1>
    </div>
  );
};

export default Butiken;
