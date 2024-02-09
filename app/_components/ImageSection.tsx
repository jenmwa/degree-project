import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchAndLogImages } from "app/_services/fetchAndLogImages";

export default function ImgSection() {
  const [imageArray, setImageArray] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAndLogImages();
      if (result && "data" in result) {
        setImageArray(result.data);
      } else if (result && "error" in result) {
      }
    };

    fetchData();
  }, []);

  const URL =
    "https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/images/";
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Urval av buketter</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {imageArray.slice(1).map((img) => (
            <div key={img.id} className="group relative">
              <div className="flex justify-center items-center mx-auto shadow-xl ring-1 ring-gray-400/10 ">
                <div className="max-w-full w-full">
                  <Image
                    key={img.name}
                    src={`${URL}${img.name}`}
                    alt={`Björby blomster ${img.name}`}
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
