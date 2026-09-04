import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

test.describe('Home page visability', () => {
   test('text visability', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/h1');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[1]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[3]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/p');
   });

   test('image visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[1]/div[1]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/img');
   });

   test('span element visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span');
   });

   test('follow button visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/button');
   });

   test('main content container visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div');
   });
});

test.describe('Home page texts', () => {
   test('correct text', async({ portfolio }) => {
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/h1', 'Lisa Osinowo');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[1]', '@lisaosinowo');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]', '"Predict your future by creating it."');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[3]', 'Fullstack Developer. Certified Tester.');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/p', 'Available');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/p', 'Links');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/p', 'Joined 07/26');
   });

   test('correct span element text', async({ portfolio }) => {
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span', 'Feed');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span', 'About');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span', 'Languages');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span', 'Projects');
   });

   test('correct follow button text', async({ portfolio }) => {
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[1]/div[2]/button', 'Follow');
   });
});