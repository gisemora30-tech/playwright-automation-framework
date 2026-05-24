# Playwright QA Automation Framework

A beginner-friendly Playwright automation framework built in JavaScript for QA portfolio purposes.

## Project Structure

- `pages/` - Page Object Model classes with reusable locators and actions.
- `tests/` - Example test files using the POM and fixtures.
- `fixtures/` - Custom Playwright fixtures for shared objects and test data.
- `utils/` - Helper utilities for reusable locators and browser helpers.
- `data/` - Static test data for example login credentials.
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

## Example login test

The suite uses `pages/loginPage.js` and `fixtures/testFixtures.js` to run a login scenario against Sauce Demo.

## Notes for portfolio

- Use `playwright-report/index.html` to show results.
- Include `tests/login.spec.js` and `pages/loginPage.js` in your GitHub repository.
- Keep the structure clear so hiring managers can review the framework easily.
