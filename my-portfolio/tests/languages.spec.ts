import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:5173/");
   const languagesSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span');
   await languagesSpan.click();
   test.setTimeout(10000);
});

test.afterEach(async ({ page }) => {
   await page.close();
});

test.describe('Languages section visibility', () => {
   test('text visability', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[3]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[4]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[5]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/p')).toBeVisible();
   });

   test('image visibility', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/div/img')).toBeVisible();
   });
})
test.describe('Languages section texts', () => {
   test('correct text', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]')).toHaveText('Frontend Languages');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/p')).toHaveText('JavaScript');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/p')).toHaveText('TypeScript');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/p')).toHaveText('HTML');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/p')).toHaveText('CSS');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]')).toHaveText('Frontend Frameworks and Libraries');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/p')).toHaveText('React');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/p')).toHaveText('TailwindCSS');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/p')).toHaveText('Bootstrap');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/p')).toHaveText('Sass');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[3]')).toHaveText('Backend Languages');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/p')).toHaveText('Python');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/p')).toHaveText('C#');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/p')).toHaveText('Java');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/p')).toHaveText('Node.js');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[4]')).toHaveText('Backend Frameworks and Libraries');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/p')).toHaveText('Express.js');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/p')).toHaveText('Mongoose');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[5]')).toHaveText('Databases');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/p')).toHaveText('MySQL');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/p')).toHaveText('MongoDB');
   });
});