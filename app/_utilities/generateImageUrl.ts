


export const generateImageUrl = (uuid: string, productId: string) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_IMG}/${productId}/${uuid}`;
};
