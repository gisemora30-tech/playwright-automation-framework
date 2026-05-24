const BasePage = require('./basePage');

/**
 * LoginPage is a page object for the Sauce Demo login screen.
 * It stores reusable locators and login actions for the example test.
 */
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.productTitle = page.locator('.title');
  }

  async goto() {
    await this.navigate('/');
  }

  async login(username, password) {
    await this.fill(this.emailInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}

module.exports = LoginPage;
