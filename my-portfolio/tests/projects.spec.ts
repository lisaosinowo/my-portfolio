import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:5173/");
   const projectsSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span');
   await projectsSpan.click();
   test.setTimeout(10000);
});

test.afterEach(async ({ page }) => {
   await page.close();
});

test.describe('Projects section visibility', () => {
   test('text visibility', async({ page }) => {
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]')).toBeVisible();
         await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]')).toBeVisible();
      });

   test('div visability', async({ page }) => {
      // GitHub profile
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div')).toBeVisible();

      // Projects
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]')).toBeVisible();
   });
})
test.describe('Projects section texts', () => {
   test('correct header and paragraph text', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1')).toHaveText('My Projects 👾');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]')).toHaveText('Click below to view my Github Profile:');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]')).toHaveText('Here are some of my favourite projects! Click on one to view on Github:');
   });

   test('correct github profile and project names', async({ page }) => {
      // GitHub profile
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div/p')).toHaveText('GitHub Profile');

      // Projects
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/p')).toHaveText('Inventory Management');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/p')).toHaveText('Roleplay Game');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/p')).toHaveText('Snake Game');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/p')).toHaveText('Turtle Race Game');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]/p')).toHaveText('Quiz Game');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]/p')).toHaveText('BlackJack Game');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]/p')).toHaveText('Hangman Game');
   });   
});

test.describe('Project links',  () => {
   test('links go to correct url', async({ page, context }) => {
      // GitHub profile
      const pagePromise = context.waitForEvent('page'); // Wait for the new page (tab) to open
      await page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div').click();
      const newPage = await pagePromise;
      await newPage.waitForLoadState(); // Wait for the new tab to finish loading
      await expect(newPage).toHaveURL('https://github.com/lisaosinowo');
      await expect(page).toHaveURL('http://localhost:5173/');
      await newPage.close();

      // Projects
      // Create a page object model
   });

});