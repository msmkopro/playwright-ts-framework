import { test, expect } from '@playwright/test';

test('Playwright homepage has correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation', exact:true })).toBeVisible();
});

test('page contains Playwright text', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByText('Playwright', { exact: true}).first()).toBeVisible();
});
  


