import { supabase } from "@/lib/supabase";


async function fetchAndLogImages() {
  try {
    const { data, error } = await supabase.storage.from('images').list();

    if (error) {
      console.error('Error fetching images:', error.message);
      return;
    }

    if (data) {
      console.log('List of images:', data);
      // Process the list of images as needed
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

fetchAndLogImages();
