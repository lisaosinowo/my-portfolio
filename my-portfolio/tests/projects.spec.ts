import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToProjectsSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

test.describe('Projects section visibility', () => {
   test('text visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]');
      });

   test('div visability', async({ portfolio }) => {
      // GitHub profile
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div');

      // Projects
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]');
   });
})
test.describe('Projects section texts', () => {
   test('correct header and paragraph text', async({ portfolio }) => {
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1', 'My Projects 👾');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]', 'Click below to view my Github Profile:');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]', 'Here are some of my favourite projects! Click on one to view on Github:');
   });

   test('correct github profile and project names', async({ portfolio }) => {
      // GitHub profile
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div/p', 'GitHub Profile');

      // Projects
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/p', 'Inventory Management');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/p', 'Roleplay Game');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/p', 'Snake Game');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/p', 'Turtle Race Game');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]/p', 'Quiz Game');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]/p', 'BlackJack Game');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]/p', 'Hangman Game');
   });   
});

test.describe('Project links',  () => {
   test('links go to correct url', async({ portfolio }) => {
      // GitHub profile
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div', 'https://github.com/lisaosinowo');

      // Projects
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]', 'https://github.com/lisaosinowo/inventory-management');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]', 'https://github.com/lisaosinowo/Roleplay-Game');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]', 'https://github.com/lisaosinowo/Snake-game');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]', 'https://github.com/lisaosinowo/Turtle-race');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]', 'https://github.com/lisaosinowo/Quiz-game');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]', 'https://github.com/lisaosinowo/BlackJack-game');
      await portfolio.goToNewPageAndVerifyUrl('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]', 'https://github.com/lisaosinowo/Hangman');
   });
});

// Note to self: create tests for the hover effect