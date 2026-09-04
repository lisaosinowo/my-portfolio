import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:5173/");
});

test.afterEach(async ({ page }) => {
   await page.close();
});

test.describe('Home page visability', () => {
   test('text visability', async({ page }) => {
      await expect(page.getByRole('heading', { name: 'Lisa Osinowo' })).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[1]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[3]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/p')).toBeVisible();
   });

   test('image visibility', async({ page }) => {
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/img')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/img')).toBeVisible();
      });

   test('span element visibility', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span')).toBeVisible();
   });

   test('follow button visibility', async({ page }) => {
      await expect(page.getByRole('button', { name: 'Follow' })).toBeVisible();
   });

   test('main content container visibility', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div')).toBeVisible();
   });
});

test.describe('Home page texts', () => {
   test('correct text', async({ page }) => {
      await expect(page.getByRole('heading', { name: 'Lisa Osinowo' })).toHaveText('Lisa Osinowo');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[1]')).toHaveText('@lisaosinowo');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]')).toHaveText('"Predict your future by creating it."');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[3]')).toHaveText('Fullstack Developer. Certified Tester.');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/p')).toHaveText('Available');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/p')).toHaveText('Links');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/p')).toHaveText('Joined 07/26');
   });

   test('correct span element text', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span')).toHaveText('Feed');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span')).toHaveText('About');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span')).toHaveText('Languages');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span')).toHaveText('Projects');
   });

   test('correct follow button text', async({ page }) => {
      await expect(page.getByRole('button', { name: 'Follow' })).toHaveText('Follow');
   });
});