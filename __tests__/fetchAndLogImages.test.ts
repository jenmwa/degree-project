

import { supabaseAuthClient } from "/Users/jennywaller/Documents/degree-project/lib/supabaseAuthClient";
import { fetchAndLogImages } from "/Users/jennywaller/Documents/degree-project/app/_services/fetchAndLogImages";

jest.mock('/Users/jennywaller/Documents/degree-project/lib/supabaseAuthClient', () => ({
  supabaseAuthClient: {
    storage: {
      from: () => ({
        list: async () => ({
          data: [
            { id: '1', name: 'image1' },
            { id: '2', name: 'image2' }
          ],
          error: null
        })
      })
    }
  }
}));

test("should get data correctly", async () => {
  const result = await fetchAndLogImages();
  expect(result.data).toEqual([
    { id: '1', name: 'image1', size: 0, type: 'image/png' },
    { id: '2', name: 'image2', size: 0, type: 'image/png' }
  ]);
});

test("should get error getting data", async () => {
  const result = await fetchAndLogImages();
  expect(result.error).toBeUndefined();
});

test("should return error when fetching images fails", async () => {
  const mockFrom = jest.spyOn(supabaseAuthClient.storage, "from").mockImplementation(() => {
    throw new Error("Failed to fetch images");
  });

  const result = await fetchAndLogImages();
  expect(result.error).toBe("Failed to fetch images");

  mockFrom.mockRestore();
});

test("should return data of the correct type and format", async () => {
  const result = await fetchAndLogImages();

  expect(result).toHaveProperty("data");

  expect(Array.isArray(result.data)).toBe(true);

  result.data.forEach((item) => {
    expect(item).toHaveProperty("id");
    expect(item).toHaveProperty("name");
    expect(typeof item.id).toBe("string");
    expect(typeof item.name).toBe("string");
  });
});
