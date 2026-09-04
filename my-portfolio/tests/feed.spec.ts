import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:5173/");
});

test.describe('Feed section visibility', () => {
   test('text visability', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[1]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[2]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[3]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[2]/p')).toBeVisible();
   });

   test('image visibility', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[1]/div/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[1]/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/img')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[3]/img')).toBeVisible();
   });
})
test.describe('Feed section texts', () => {
   test('correct text', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/p')).toHaveText('Pinned');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/p')).toHaveText('Lisa');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[1]')).toHaveText('@lisaosinowo');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[2]')).toHaveText('·');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[3]')).toHaveText('20/07/2026');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[2]/p')).toHaveText("Welcome to my Portfolio 🤗 I had a lot of fun developing this site and I will be improving it when new ideas spawn. That's the life of a developer! 🫡 Use the four headers above this pinned post to explore!");
   });
});

test.describe('Feed span element',  () => {
   test('correct feed section shown', async({ page }) => {
      const feedSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span');
      await feedSpan.click();
      const lisaImage = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[3]/img');
      await expect(lisaImage).toBeVisible();
   });
});