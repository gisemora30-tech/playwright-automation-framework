# Contributing

Thank you for your interest in this QA Automation framework! Contributions are welcome and appreciated.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/playwright-qa-automation.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Commit with clear messages: `git commit -m 'Add amazing feature'`
6. Push to your fork: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Development Setup

```bash
npm install
npx playwright install
```

## Running Tests Locally

```bash
# Run all tests
npm test

# Run in headed mode
npm run test:headed

# Run specific test file
npx playwright test tests/login.spec.js

# Debug mode
npm run test:debug
```

## Code Style Guidelines

- Use meaningful variable and function names
- Add comments explaining complex logic
- Follow existing code patterns
- Use ES6+ features

## Adding New Tests

1. Create test file in appropriate folder (`tests/` for UI, `api/` for API)
2. Use descriptive test names that explain what's being tested
3. Follow the existing POM pattern for UI tests
4. Add comments explaining test steps
5. Update README with new test coverage

## Example: Adding a New Page Object

```javascript
const BasePage = require('./basePage');

/**
 * ProductPage handles interactions with the product details page.
 */
class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.productTitle = page.locator('.product-title');
    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
  }

  async addToCart() {
    await this.click(this.addToCartBtn);
  }
}

module.exports = ProductPage;
```

## Pull Request Process

1. Ensure tests pass: `npm test`
2. Update README if adding new features
3. Write clear PR description
4. Link related issues
5. Wait for review and CI/CD to pass

## Reporting Issues

- Use GitHub Issues to report bugs
- Provide clear description and steps to reproduce
- Include error logs and screenshots
- Mention your environment (Node version, OS)

## Questions?

Feel free to open an issue or discussion for questions about the project.

---

**Happy Testing! 🎭**
