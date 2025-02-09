import { test, expect } from "@playwright/test";

const bearerToken =
  "9632462165da10defca07b2be1f2df49b613284a980ed8ab69c89623f0094f2d";
const baseURL = "https://gorest.co.in/public/v2/users";
const userURL = "https://gorest.co.in/public/v2/users/7631468";

test("API GET Request", async ({ request }) => {
  const response = await request.get(baseURL);

  expect(response.status()).toBe(200);
});

test("API POST Request", async ({ request }) => {
  const response = await request.post(baseURL, {
    data: {
      name: "Luna Skavuluna",
      email: "skaavulunaaaaa+2@gmail.com",
      gender: "female",
      status: "active",
    },
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(201);
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put(userURL, {
    data: {
      name: "Luna Skavuluna edited",
      email: "skavulunaaaa@gmail.com",
      gender: "female",
      status: "active",
    },
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);
});

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete(userURL, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(204);
});
