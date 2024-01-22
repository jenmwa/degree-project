// import handler from '@/pages/api/handlers';
// import { supabaseServer } from '@lib/supabaseServer';
// import supertest from 'supertest';

// // jest.mock('@lib/supabaseServer', () => ({
// //   supabaseServer: {
// //     from: jest.fn(),
// //   },
// // }));

// describe('Your API Route', () => {
//   it('should fetch data successfully', async () => {
//     // Mock the Supabase query result
//     const mockData = [{ id: 1, name: 'Product 1' }];
//     (supabaseServer.from as jest.Mock).mockReturnValue({
//       select: jest.fn().mockResolvedValue({ data: mockData }),
//     });

//     // Simulate a GET request to your API endpoint
//     const response = await supertest(handler)
//       .get('/api/handlers?entity=Product')
//       .query({ entity: 'Product' });

//     // Assertions
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('data', mockData);
//     // Add more assertions based on your expected response structure

//     // Verify that the Supabase query was called with the correct parameters
//     expect(supabaseServer.from).toHaveBeenCalledWith('Product');
//     expect(supabaseServer.from('Product').select).toHaveBeenCalledWith('*');
//   });

//   // Add more test cases as needed
// });
