import { supabase } from "lib/supabase";

export default async function handler(req: any, res: any) {
  if (req.method === 'PUT') {
    try {
      const { productId, productPrice, productTitle, productImagesUrl, productShortDescription, productLongDescription } = req.body;

      //OBS: kolla skillnader innan submit!
      if (!productId || !productPrice) {
        return res.status(400).json({ error: 'productId and productPrice are required' });
      }

      const { data, error } = await supabase
        .from('Product')
        .update({ productPrice, productTitle, productImagesUrl, productLongDescription, productShortDescription, updated_at: 'now()' })
        .eq('productId', productId)
        .select('*');

      if (error) {
        throw error;
      }

      res.status(200).json({ updatedProduct: data[0] });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Error updating product' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
