import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export const Images = () => {
  const [file, setFile] = useState<File | null>(null);
  const productID = "d4cc967a-1f74-4036-b977-efa7b890a348";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const id = uuidv4();
    if (!file) {
      console.error("No file selected.");
      return;
    }
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(`/${productID}/${id}`, file);

      if (error) {
        console.error("Error uploading image:", error.message);
        return;
      }

      if (data) {
        console.log("Image uploaded successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  async function fetchAndLogImages() {
    try {
      const { data, error } = await supabase.storage.from("images").list();

      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      if (data) {
        console.log("List of images:", data);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }

  fetchAndLogImages();
  return (
    <>
      <p>hello from images</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </>
  );
};
