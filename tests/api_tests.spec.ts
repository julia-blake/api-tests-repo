import { test, expect } from "@playwright/test";

const updateURL = "https://reqres.in/api/users/2";

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breeds/image/random");

  expect(response.status()).toBe(200);
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "dog",
      job: "be happy",
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("dog");
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put(updateURL, {
    data: {
      name: "dog",
      job: "be happy",
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("dog");
});

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete(updateURL);

  expect(response.status()).toBe(204);
});
