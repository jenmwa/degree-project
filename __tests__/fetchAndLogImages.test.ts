/**
 * @jest-environment jsdom
 */

import { fetchAndLogImages } from "../app/_services/fetchAndLogImages";

jest.mock('lib/supabaseAuthClient.ts', () => ({
  supabaseAuthClient: {
    storage: {
      from: jest.fn(() => ({
        list: jest.fn().mockResolvedValue({ data: [{ image1: 'url1' }, { image2: 'url2' }] }),
      })),
    },
  },
}));

describe('fetchAndLogImages', () => {
  it('fetches images and console.log them', async () => {

    const originalLog = console.log;
    console.log = jest.fn();


    await fetchAndLogImages();


    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('List of images:', [{ image1: 'url1' }, { image2: 'url2' }]);

    console.log = originalLog;
  });

});


