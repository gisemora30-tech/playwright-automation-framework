const base = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const testData = require('../data/users.json');

/**
 * Custom fixtures allow reusable setup for all tests.
 * The loginPage fixture creates the page object once per test.
 */
const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  testData: async ({}, use) => {
    await use(testData);
  },
});

module.exports = { test, expect: base.expect };
