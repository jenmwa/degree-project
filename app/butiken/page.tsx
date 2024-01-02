"use client";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const Butiken = () => {
  useEffect(() => {
    const fetchData = async () => {
      const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
      const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

      if (!supabaseUrl || !supabaseKey) {
        console.error("Supabase URL or key is missing.");
      } else {
        const supabase = createClient(supabaseUrl, supabaseKey);
        try {
          const { data: products, error } = await supabase
            .from("Product")
            .select("*");

          if (error) {
            console.error("Error fetching data:", error);
          } else {
            console.log("Products:", products);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      <br></br>
      <br></br>
      <br></br>Butiken
    </>
  );
};

export default Butiken;
