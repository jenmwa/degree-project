// import { NextApiRequest, NextApiResponse } from 'next';// Import v4 from the 'uuid' package

// import { randomUUID } from 'crypto';




// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { productId } = req.body;
//       const fileBuffer = req.body.file.buffer; // Use buffer instead of file directly
//       const { data, error } = await supabaseServer.storage
//         .from('images')
//         .upload(`/${productId}/${randomUUID()}`, fileBuffer); // Use fileBuffer here

//       if (error) {
//         console.error('Error uploading image:', error.message);
//         return res.status(500).json({ error: 'Error uploading image' });
//       }

//       if (data) {
//         console.log('Image uploaded successfully:', data);
//         return res.status(200).json({ success: true, data });
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       return res.status(500).json({ error: 'Unexpected error' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }
// pages/api/uploadImage.js

// import formidable from 'formidable';
// import fs from 'fs';
// import { NextApiRequest, NextApiResponse } from 'next';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handlerUploadImg(req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     const form = new formidable.IncomingForm();
//     form.uploadDir = './public/uploads'; // Directory to save uploads

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         return res.status(500).json({ error: 'Something went wrong' });
//       }

//       const { file } = files;

//       // Check if file exists
//       if (!file || !file.name) {
//         return res.status(400).json({ error: 'No file uploaded' });
//       }

//       // Get the MIME type
//       const mimeType = file.type;

//       // Determine the file extension based on MIME type
//       let ext = '';
//       switch (mimeType) {
//         case 'image/jpeg':
//           ext = '.jpg';
//           break;
//         case 'image/png':
//           ext = '.png';
//           break;
//         default:
//           return res.status(400).json({ error: 'Invalid file type. Only JPG and PNG are allowed.' });
//       }

//       // Move the file to the desired location with correct extension
//       const oldPath = file.path;
//       const newPath = `./public/uploads/${file.name}${ext}`;
//       fs.renameSync(oldPath, newPath);

//       return res.status(200).json({ message: 'File uploaded successfully' });
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };
