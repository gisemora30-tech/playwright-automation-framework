/**
 * Reusable locator helpers for the framework.
 * These helpers make selectors easier to read and maintain.
 */
function byDataTestId(page, id) {
  return page.locator(`[data-test="${id}"]`);
}

function byRole(page, role, options = {}) {
  return page.getByRole(role, options);
}

module.exports = { byDataTestId, byRole };
