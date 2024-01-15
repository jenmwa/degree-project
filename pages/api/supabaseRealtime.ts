// import { supabase } from "@/lib/supabase";
// import { useEffect } from "react";

// interface RealTimeProps {
//   onUpdate: () => void;
// }

// const setupRealTime = ({ onUpdate }: RealTimeProps) => {
//   const channel = supabase
//     .channel("schema-db-changes")
//     .on(
//       "postgres_changes",
//       {
//         event: "UPDATE",
//         schema: "public",
//         table: "Product",
//       },
//       async (payload) => {
//         // Trigger the provided callback function on update
//         onUpdate();
//       }
//     )
//     .subscribe();

//   return channel;
// };

// export default setupRealTime;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("/api/handlers?entity=Product");
//       const data = await response.json();
//       setProducts(data.data);
//     } catch (error) {
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchData();
// }, []);

// useEffect(() => {
//   const subscription = supabase
//   .channel("schema-db-changes")
//   .on(
//     "postgres_changes",
//     {
//       event: "UPDATE",
//       schema: "public",
//       table: "Product",
//     },
//     async (payload) => {
//     // Update products when there is a change
//     setProducts(payload.new);
//   })
//   .subscribe();
  
//   // Unsubscribe when the component unmounts
//   return () => {
//   subscription.unsubscribe();
//   };
//   }, [setProducts]);
// })
