import { supabaseAuthClient } from "lib/supabaseAuthClient";

interface FileObject {
  id: string;
  name: string;
}

interface StorageFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

export async function fetchAndLogImages() {
  try {
    const { data, error } = await supabaseAuthClient.storage
      .from('images')
      .list();

    if (error) {
      console.error('Error fetching images:', error.message);
      return { error: 'Failed to fetch images', data: [] };
    }

    if (data) {
      const transformedData = data.map((file: FileObject) => ({
        ...file,
        size: 0,
        type: 'image/png',
      })) as StorageFile[];
      console.log('List of images:', transformedData);
      return { data: transformedData };
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return { error: 'Failed to fetch images', data: [] };
  }

  return { error: 'Failed to fetch images', data: [] };
}
