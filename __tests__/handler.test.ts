/**
 * @jest-environment jsdom
 */

import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/contactEmail';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

describe('Contact Email API', () => {
  it('should send an email and return success message', async () => {

    const sendMailMock = jest.fn().mockImplementation((mailData, callback) => {
      callback(null, { accepted: [mailData.to] });
    });

    // @ts-ignore
    nodemailer.createTransport.mockReturnValueOnce({ sendMail: sendMailMock });

    const req = {
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
      },
    } as NextApiRequest;

    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Message sent!' });
  });
});
