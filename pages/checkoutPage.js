const BasePage = require('./basePage');

/**
 * CheckoutPage is a page object for the Sauce Demo checkout process.
 * It handles all steps of the checkout flow including user info, overview, and completion.
 */
class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    // Checkout info step locators
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    
    // Checkout overview step locators
    this.finishButton = page.locator('[data-test="finish"]');
    this.checkoutOverviewTitle = page.locator('.title');
    
    // Success message locator
    this.successMessage = page.locator('.complete-header');
    this.completeContainer = page.locator('.checkout_complete_container');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.fill(this.firstNameInput, firstName);
    await this.fill(this.lastNameInput, lastName);
    await this.fill(this.postalCodeInput, postalCode);
  }

  async clickContinue() {
    await this.click(this.continueButton);
  }

  async clickFinish() {
    await this.click(this.finishButton);
  }

  async getSuccessMessage() {
    return this.getText(this.successMessage);
  }

  async isSuccessMessageVisible() {
    return this.isVisible(this.successMessage);
  }
}

module.exports = CheckoutPage;
