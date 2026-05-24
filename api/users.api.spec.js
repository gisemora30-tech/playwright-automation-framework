const { test, expect } = require('@playwright/test');

/**
 * API Automation tests using Playwright APIRequestContext.
 * These tests demonstrate REST API testing without a UI layer.
 * API endpoint: https://reqres.in/api/users
 * 
 * Note: API tests do not use the baseURL from playwright.config.js
 * and instead use complete URLs to avoid routing conflicts.
 */
test.describe('ReqRes API Tests', () => {
  const BASE_URL = 'https://reqres.in/api';

  test('GET - Should retrieve a list of users', async ({ request }) => {
    // Send a GET request to the users endpoint
    const response = await request.get(`${BASE_URL}/users?page=1`);

    // Validate HTTP status code
    expect(response.status()).toBe(200);

    // Parse and validate JSON response
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('data');
    expect(responseBody).toHaveProperty('page', 1);
    expect(Array.isArray(responseBody.data)).toBeTruthy();
    expect(responseBody.data.length).toBeGreaterThan(0);

    // Validate first user object structure
    const firstUser = responseBody.data[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');
    expect(firstUser).toHaveProperty('avatar');
  });

  test('GET - Should retrieve a single user by ID', async ({ request }) => {
    // Send a GET request for a specific user
    const response = await request.get(`${BASE_URL}/users/1`);

    // Validate HTTP status code
    expect(response.status()).toBe(200);

    // Parse and validate JSON response
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('data');

    // Validate user details
    const user = responseBody.data;
    expect(user.id).toBe(1);
    expect(user).toHaveProperty('email');
    expect(user.email).toContain('@');
  });

  test('POST - Should create a new user', async ({ request }) => {
    // Define the payload for creating a new user
    const newUser = {
      name: 'John Doe',
      job: 'QA Automation Engineer',
    };

    // Send a POST request to create a user
    const response = await request.post(`${BASE_URL}/users`, {
      data: newUser,
    });

    // Validate HTTP status code (ReqRes returns 201 for created)
    expect(response.status()).toBe(201);

    // Parse and validate JSON response
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
    expect(responseBody.name).toBe(newUser.name);
    expect(responseBody.job).toBe(newUser.job);

    // Validate the ID is a number
    expect(typeof responseBody.id).toBe('number');
  });

  test('POST - Should validate required fields in response', async ({
    request,
  }) => {
    // Create a user with minimal data
    const newUser = {
      name: 'Jane Smith',
      job: 'Test Automation',
    };

    const response = await request.post(`${BASE_URL}/users`, {
      data: newUser,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // Verify all required fields are present
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('job');
    expect(responseBody).toHaveProperty('createdAt');

    // Verify data integrity
    expect(responseBody.name).toEqual(newUser.name);
    expect(responseBody.job).toEqual(newUser.job);
  });

  test('GET - Should handle 404 for non-existent user', async ({
    request,
  }) => {
    // Send a GET request for a user that doesn't exist
    const response = await request.get(`${BASE_URL}/users/999999`);

    // Validate HTTP status code for not found
    expect(response.status()).toBe(404);
  });
});
