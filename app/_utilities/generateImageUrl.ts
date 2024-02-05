
export const SUPABASE_STORAGE_IMG =
  "https://itbhssqwjunahaltkmza.supabase.co/storage/v1/object/public/productImages/";


export const generateImageUrl = (uuid: string, productId: string) => {
  return `${SUPABASE_STORAGE_IMG}/${productId}/${uuid}`;
};
