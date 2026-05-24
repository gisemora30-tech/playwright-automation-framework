# 🎭 Playwright QA Automation Framework

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![HTML Reports](https://img.shields.io/badge/HTML%20Reports-E34C26?style=for-the-badge&logo=html5&logoColor=white)

**A professional, production-ready QA automation framework demonstrating both UI and API testing expertise.**

</div>

---

## 📋 Overview

This portfolio-ready Playwright automation framework showcases modern QA automation practices using JavaScript. It demonstrates:

- ✅ **Page Object Model (POM)** architecture for maintainable UI test automation
- ✅ **REST API testing** with end-to-end validation
- ✅ **CI/CD integration** with GitHub Actions
- ✅ **Comprehensive reporting** with HTML reports, screenshots, and video recordings
- ✅ **Cross-browser testing** across Chromium, Firefox, and WebKit
- ✅ **Clean, beginner-friendly code** with detailed comments

Perfect for QA automation engineers looking to build a professional GitHub portfolio.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Playwright** | ^1.60.0 | Cross-browser automation framework |
| **JavaScript** | ES6+ | Test scripting language |
| **Node.js** | 18+ | JavaScript runtime |
| **npm** | Latest | Package management |
| **GitHub Actions** | Latest | CI/CD pipeline |

---

## 📁 Project Structure

```
proyecto-1/
├── pages/                    # Page Object Model layer
│   ├── basePage.js          # Base class with common browser actions
│   ├── loginPage.js         # Login page with reusable locators
│   ├── inventoryPage.js     # Product inventory page object
│   ├── cartPage.js          # Shopping cart page object
│   └── checkoutPage.js      # Checkout flow page object
│
├── tests/                    # UI test suites
│   ├── login.spec.js        # Authentication tests (3 scenarios)
│   ├── cart.spec.js         # Cart operations tests (2 scenarios)
│   └── checkout.spec.js     # End-to-end checkout flow
│
├── api/                      # API test suites
│   └── users.api.spec.js    # REST API tests (5 scenarios)
│
├── fixtures/                 # Playwright custom fixtures
│   └── testFixtures.js      # Reusable test setup and page objects
│
├── data/                     # Test data management
│   └── users.json           # User credentials and checkout data
│
├── utils/                    # Helper utilities
│   └── locatorUtils.js      # Reusable locator helpers
│
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm 8+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/playwright-qa-automation.git
cd playwright-qa-automation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## 🧪 Test Execution

### Run All Tests
```bash
npm test
```

### Run UI Tests Only
```bash
# Run all UI tests across all browsers
npx playwright test tests/

# Run specific test file
npx playwright test tests/login.spec.js

# Run tests in headed mode (see browser)
npm run test:headed

# Run in debug mode with inspector
npm run test:debug
```

### Run API Tests Only
```bash
# Run all API tests
npx playwright test api/

# Run specific API test
npx playwright test api/users.api.spec.js
```

### Advanced Test Execution
```bash
# Run tests for specific browser
npx playwright test --project=chromium

# Run tests with specific tag
npx playwright test --grep @smoke

# Run tests in serial mode (one at a time)
npx playwright test --workers=1

# Run with timeout override
npx playwright test --timeout=60000
```

---

## 📊 Test Reports

### View HTML Report
```bash
npm run test:report
```

The HTML report displays:
- ✅ Test results with execution time
- 📸 Screenshots of failed tests
- 🎬 Video recordings of failures
- 🔍 Trace files for debugging

### Test Coverage

#### UI Tests (11 tests)
| Suite | Tests | Coverage |
|-------|-------|----------|
| **Login** | 3 | Valid login, locked user, invalid credentials |
| **Cart** | 2 | Add to cart, display cart items |
| **Checkout** | 1 | Complete end-to-end purchase flow |

#### API Tests (5 tests)
| Test | Method | Endpoint | Validation |
|------|--------|----------|-----------|
| Get Users List | GET | `/users?page=1` | Status 200, data structure |
| Get Single User | GET | `/users/1` | Status 200, user fields |
| Create User | POST | `/users` | Status 201, response data |
| Validate Fields | POST | `/users` | Status 201, data integrity |
| Handle 404 | GET | `/users/999999` | Status 404 |

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/tests.yml`:

```yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  schedule:
    - cron: '0 9 * * 1-5'  # Run weekdays at 9 AM

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright
        run: npx playwright install --with-deps
      
      - name: Run tests
        run: npm test
        continue-on-error: true
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report-${{ matrix.node-version }}
          path: playwright-report/
          retention-days: 30
      
      - name: Publish test report
        if: always()
        uses: daun/playwright-report-action@v3
        with:
          report-path: playwright-report
```

---

## 📝 Sample Commands & Examples

### Running Specific Scenarios

```bash
# Run only login tests
npx playwright test tests/login.spec.js --grep "Valid user"

# Run checkout flow in debug mode
npx playwright test tests/checkout.spec.js --debug

# Run API tests with Firefox browser
npx playwright test api/ --project=firefox

# Generate test report in JSON format
npx playwright test --reporter=json > test-results.json
```

### Test Data

Edit `data/users.json` to customize test credentials:

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  },
  "checkoutInfo": {
    "firstName": "John",
    "lastName": "Doe",
    "postalCode": "12345"
  }
}
```

---

## 🏗️ Architecture Highlights

### Page Object Model (POM)
Every page is represented as a class with:
- **Locators**: Centralized element selectors
- **Actions**: Reusable user interaction methods
- **Assertions**: Common validation helpers

**Benefits:**
- Maintainable: Changes to UI reflected in one location
- Readable: Test steps mirror user behavior
- Scalable: Easy to add new page objects

### Fixtures
Custom Playwright fixtures provide:
- Page object instances per test
- Test data injection
- Automatic cleanup

### Base Page Pattern
Common actions (`click`, `fill`, `getText`, `isVisible`) inherited by all page objects reduce code duplication.

---

## 🎯 Key Features

| Feature | Implementation |
|---------|-----------------|
| Cross-browser testing | Chromium, Firefox, WebKit |
| Failed test artifacts | Screenshots & video on failure |
| Parallel execution | Multi-worker test runs |
| Detailed reporting | HTML report with trace files |
| Data management | Centralized JSON test data |
| Code organization | Clean POM structure |
| Beginner-friendly | Extensive code comments |

---

## 📚 Best Practices Implemented

✅ **Separation of Concerns** - Page logic separate from test logic
✅ **DRY Principle** - Reusable locators and actions
✅ **Meaningful Test Names** - Clear intent and coverage
✅ **Proper Waits** - Built-in Playwright waits (no sleeps)
✅ **Test Independence** - Each test can run standalone
✅ **Error Handling** - Graceful failure scenarios
✅ **Documentation** - Comments explaining complex logic

---

## 🔧 Troubleshooting

### Tests timeout
```bash
# Increase timeout for slow environments
npx playwright test --timeout=60000
```

### Browser not found
```bash
# Reinstall browser binaries
npx playwright install --with-deps
```

### Port conflicts with baseURL
```bash
# Update playwright.config.js baseURL setting
# or use environment variable:
BASE_URL=http://localhost:3000 npm test
```

---

## 👨‍💻 About Me

Hi! I'm a QA Automation Engineer passionate about building scalable, maintainable test frameworks. This project showcases my expertise in:

- **Test Automation**: Playwright, JavaScript, cross-browser testing
- **Framework Design**: Page Object Model, custom fixtures, test organization
- **API Testing**: REST API validation, status codes, response assertions
- **CI/CD**: GitHub Actions, automated testing pipelines
- **Best Practices**: Clean code, documentation, scalability

### Skills Demonstrated
- Playwright & JavaScript mastery
- Page Object Model architecture
- UI & API automation
- HTML reporting and test artifacts
- Version control and GitHub workflows
- QA automation best practices

### Connect With Me
- 💼 **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- 📧 **Email**: your.email@example.com
- 🌐 **Portfolio**: [your-portfolio.com](https://your-portfolio.com)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

## 📞 Support

For questions or issues:
1. Check existing GitHub Issues
2. Review test logs in `playwright-report/`
3. Enable debug mode: `npx playwright test --debug`

---

**⭐ If this project helped you, please give it a star on GitHub!**

Last Updated: May 2026
