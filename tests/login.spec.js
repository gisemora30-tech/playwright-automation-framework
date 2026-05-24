const { test, expect } = require('../fixtures/testFixtures');

/**
 * Example login test using the Page Object Model and reusable fixtures.
 */
test.describe('Login tests', () => {
  test('Valid user should log in successfully', async ({ loginPage, testData }) => {
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(loginPage.productTitle).toHaveText('Products');
  });

  test('Locked out user should see an error message', async ({ loginPage, testData }) => {
    await loginPage.goto();
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });

  test('Invalid login with empty credentials should show an error message', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
