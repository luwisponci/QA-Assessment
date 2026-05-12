const { test, expect } = require('@playwright/test');

test('User can complete checkout process', async ({ page }) => {

  // To Open website
  await page.goto('https://www.saucedemo.com/');

  //  For Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // To Verify inventory page
  await expect(page).toHaveURL(/inventory/);

  // Add product to cart
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Open cart
  await page.click('.shopping_cart_link');

  // Verify product exists in cart
  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');

  // For Checkout
  await page.click('#checkout');

  // Fill checkout info
  await page.fill('#first-name', 'Luis');
  await page.fill('#last-name', 'Dela Cruz');
  await page.fill('#postal-code', '1000');

  // Continue checkout
  await page.click('#continue');

  // Finish order
  await page.click('#finish');

  // Verify successful checkout
  await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
});