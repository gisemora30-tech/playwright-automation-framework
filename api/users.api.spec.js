const { test, expect } = require('@playwright/test');

test.describe('JSONPlaceholder API Tests', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('GET - Should retrieve a list of users', async ({ request }) => {

    const response = await request.get(`${baseUrl}/users`);

    expect(response.status()).toBe(200);

    const users = await response.json();

    expect(Array.isArray(users)).toBeTruthy();

    expect(users.length).toBeGreaterThan(0);

  });

  test('GET - Should retrieve a single user by ID', async ({ request }) => {

    const response = await request.get(`${baseUrl}/users/1`);

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user).toHaveProperty('id', 1);

    expect(user).toHaveProperty('email');

  });

  test('POST - Should create a new post', async ({ request }) => {

    const response = await request.post(`${baseUrl}/posts`, {

      data: {

        title: 'QA Automation Test',

        body: 'Created with Playwright',

        userId: 1

      }

    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe('QA Automation Test');

  });

  test('POST - Should validate required fields structure', async ({ request }) => {

    const response = await request.post(`${baseUrl}/posts`, {

      data: {

        title: 'Missing body field'

      }

    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty('title');

  });

  test('GET - Should handle non-existing resource', async ({ request }) => {

    const response = await request.get(`${baseUrl}/posts/999999`);

    expect(response.status()).toBe(404);

  });

});