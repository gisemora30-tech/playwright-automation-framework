# Playwright QA Automation Framework

A beginner-friendly Playwright automation framework built in JavaScript for QA portfolio purposes.

## Project Structure

- `pages/` - Page Object Model classes with reusable locators and actions.
  - `basePage.js` - Base class with common page actions
  - `loginPage.js` - Login page object with authentication
  - `inventoryPage.js` - Products inventory page object
  - `cartPage.js` - Shopping cart page object
  - `checkoutPage.js` - Checkout flow page object
- `tests/` - Example test files using the POM and fixtures.
  - `login.spec.js` - Login scenario tests
  - `cart.spec.js` - Shopping cart tests
  - `checkout.spec.js` - Complete checkout flow test
- `fixtures/` - Custom Playwright fixtures for shared objects and test data.
- `utils/` - Helper utilities for reusable locators and browser helpers.
- `data/` - Static test data for credentials and checkout info.
- `playwright.config.js` - Playwright configuration with HTML reporting, screenshots, and video recording.

## Features

- Page Object Model for maintainable QA automation
- Reusable locators and helper utilities
- HTML report generation
- Screenshots on failure
- Video recording on failure
- Beginner-friendly structure for portfolio presentation

## Install

```bash
npm install
npx playwright install
```

## Run tests

```bash
npm test
```

## View report

```bash
npm run test:report
```

## Test Coverage

### Login Tests (`tests/login.spec.js`)
- Valid user login and authentication
- Locked out user error handling
- Invalid credentials validation

### Cart Operations (`tests/cart.spec.js`)
- Add product to cart
- Display and count items in cart

### Complete Checkout Flow (`tests/checkout.spec.js`)
- End-to-end purchase scenario
- User login and inventory navigation
- Product selection and cart management
- Checkout information entry
- Order confirmation and success message validation

This flow demonstrates how Page Object Model keeps tests clean and readable while covering a complex business scenario.

## Notes for portfolio

- Use `playwright-report/index.html` to show results.
- Include `tests/login.spec.js` and `pages/loginPage.js` in your GitHub repository.
- Keep the structure clear so hiring managers can review the framework easily.
