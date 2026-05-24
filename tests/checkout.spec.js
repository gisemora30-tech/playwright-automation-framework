const { test, expect } = require('../fixtures/testFixtures');

/**
 * Checkout tests cover the complete purchase flow on Sauce Demo.
 * This demonstrates an end-to-end scenario from login to order completion.
 */
test.describe('Complete checkout flow', () => {
  test('User should successfully complete checkout', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    testData,
  }) => {
    // Step 1: Login with valid credentials
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(loginPage.productTitle).toHaveText('Products');

    // Step 2: Add a product to cart
    await inventoryPage.addProductToCart(0);
    const cartCount = await inventoryPage.getCartBadgeCount();
    await expect(cartCount).toBe('1');

    // Step 3: Navigate to cart
    await inventoryPage.goToCart();
    const itemCount = await cartPage.getCartItemCount();
    await expect(itemCount).toBe(1);

    // Step 4: Start checkout
    await cartPage.clickCheckout();

    // Step 5: Fill checkout information
    const { firstName, lastName, postalCode } = testData.checkoutInfo;
    await checkoutPage.fillCheckoutInfo(firstName, lastName, postalCode);

    // Step 6: Continue to overview page
    await checkoutPage.clickContinue();

    // Step 7: Finish checkout
    await checkoutPage.clickFinish();

    // Step 8: Validate success message
    await expect(checkoutPage.successMessage).toBeVisible();
    await expect(checkoutPage.successMessage).toContainText('Thank you');
  });
});
