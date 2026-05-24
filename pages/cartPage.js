const BasePage = require('./basePage');

/**
 * CartPage is a page object for the Sauce Demo shopping cart page.
 * It handles interactions with cart items and checkout process.
 */
class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = page.locator('.cart_item');
    this.cartItemNames = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getCartItemCount() {
    const items = await this.cartItems.all();
    return items.length;
  }

  async getCartItemName(itemIndex = 0) {
    const names = await this.cartItemNames.all();
    if (names.length > itemIndex) {
      return this.getText(names[itemIndex]);
    }
    return null;
  }

  async clickCheckout() {
    await this.click(this.checkoutButton);
  }
}

module.exports = CartPage;
