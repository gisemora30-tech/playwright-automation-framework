const BasePage = require('./basePage');

/**
 * InventoryPage is a page object for the Sauce Demo products inventory page.
 * It handles interactions with the product list and cart operations.
 */
class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryContainer = page.locator('.inventory_list');
    this.productName = page.locator('.inventory_item_name');
    this.addToCartButtons = page.locator('[data-test*="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productIndex = 0) {
    const buttons = await this.addToCartButtons.all();
    if (buttons.length > productIndex) {
      await buttons[productIndex].click();
    }
  }

  async goToCart() {
    await this.click(this.cartLink);
  }

  async getCartBadgeCount() {
    return this.getText(this.cartBadge);
  }
}

module.exports = InventoryPage;
