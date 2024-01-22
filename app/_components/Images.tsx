import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";

interface StorageFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

export function Images() {
  const [file, setFile] = useState<File | null>(null);
  const productID = "d4cc967a-1f74-4036-b977-efa7b890a348";
  const [imageArray, setImageArray] = useState<StorageFile[]>([]);

  useEffect(() => {
    fetchAndLogImages();
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        .from("productImages")
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

  console.log(
    '"https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/d4cc967a-1f74-4036-b977-efa7b890a348'
  );
  const filepath =
    "https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/";
  //
  // "https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/purple.png";
  ("https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/d4cc967a-1f74-4036-b977-efa7b890a348/8f56e6c4-0ebb-466b-bd37-f26f1de80076");

  async function fetchAndLogImages() {
    try {
      const { data, error } = await supabase.storage.from("images").list();
      console.log(data);
      if (error) {
        console.error("Error fetching images:", error.message);
        return;
      }

      if (data) {
        console.log("List of images:", data);
        setImageArray(data as unknown as StorageFile[]);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }
  console.log(imageArray);

  return (
    <>
      <p>hello from images</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <div>
        {imageArray.map((img) => (
          <>
            <Image
              key={img.id}
              alt={img.name}
              src={filepath + `${img.name}`}
              width={200}
              height={200}
            ></Image>
            <p>{img.name}</p>
          </>
        ))}
        {/* <Image src={filepath} alt="" width={200} height={200} />) */}
      </div>
    </>
  );
}
