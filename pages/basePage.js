/**
 * BasePage contains reusable helper actions that any page object can use.
 * This keeps tests readable and centralizes common browser interactions.
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }

  async getText(locator) {
    return locator.textContent();
  }

  async isVisible(locator) {
    return locator.isVisible();
  }
}

module.exports = BasePage;
