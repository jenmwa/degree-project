/**
 * @jest-environment jsdom
 */

import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/updateProduct';
import { createMocks } from 'node-mocks-http';

describe('PUT /api/updateProduct', () => {
  it('should update a product and return updated product data', async () => {

    const requestBody = {
      productId: 'e882cbce-fa72-43c9-af7d-dc631c927278',
      productPrice: 99.99,
      productTitle: 'Updated Product Title',
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'PUT',
      body: requestBody,
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);


    const responseBody = JSON.parse(res._getData());
    expect(responseBody).toHaveProperty('updatedProduct');
    expect(responseBody.updatedProduct).toHaveProperty('productId', 'e882cbce-fa72-43c9-af7d-dc631c927278');
    expect(responseBody.updatedProduct.productPrice).toBe(99.99);
  });

});
