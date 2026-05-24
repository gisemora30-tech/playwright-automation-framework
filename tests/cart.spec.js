const { test, expect } = require('../fixtures/testFixtures');

/**
 * Cart tests cover the shopping functionality on Sauce Demo.
 * These tests verify adding products to cart and viewing cart contents.
 */
test.describe('Cart operations', () => {
  test.beforeEach(async ({ loginPage, testData }) => {
    // Login before each test to access the inventory page
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('Valid user should add a product to the cart', async ({ inventoryPage }) => {
    await inventoryPage.addProductToCart(0);
    const cartCount = await inventoryPage.getCartBadgeCount();
    await expect(cartCount).toBe('1');
  });

  test('Cart should display the added product', async ({ inventoryPage, cartPage }) => {
    await inventoryPage.addProductToCart(0);
    await inventoryPage.goToCart();
    const itemCount = await cartPage.getCartItemCount();
    await expect(itemCount).toBe(1);
  });
});
