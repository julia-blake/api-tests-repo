import { test, expect } from "@playwright/test";

const bearerToken =
  "9632462165da10defca07b2be1f2df49b613284a980ed8ab69c89623f0094f2d";

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://gorest.co.in/public/v2/users");

  expect(response.status()).toBe(200);

  console.log(await response.json());
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://gorest.co.in/public/v2/users", {
    data: {
      name: "Luna Skavuluna",
      email: "skavulunaaaaa@gmail.com",
      gender: "female",
      status: "active",
    },
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(201);

  console.log(await response.json());
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put(
    "https://gorest.co.in/public/v2/users/7631468",
    {
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
    }
  );

  expect(response.status()).toBe(200);

  console.log(await response.json());
});

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete(
    "https://gorest.co.in/public/v2/users/7631477",
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  expect(response.status()).toBe(204);

  console.log("User deleted successfully.");
});
