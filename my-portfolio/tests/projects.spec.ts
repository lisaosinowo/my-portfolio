import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToProjectsSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

const headerAndParagraphCases = [
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1',
      expected: "My Projects 👾",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]',
      expected: "Click below to view my Github Profile:",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]',
      expected:
         "Here are some of my favourite projects! Click on one to view on Github:",
   },
];

const projectCases = [
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div',
      name: "GitHub Profile",
      url: "https://github.com/lisaosinowo",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]',
      name: "Inventory Management",
      url: "https://github.com/lisaosinowo/inventory-management",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]',
      name: "Roleplay Game",
      url: "https://github.com/lisaosinowo/Roleplay-Game",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]',
      name: "Snake Game",
      url: "https://github.com/lisaosinowo/Snake-game",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]',
      name: "Turtle Race Game",
      url: "https://github.com/lisaosinowo/Turtle-race",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[5]',
      name: "Quiz Game",
      url: "https://github.com/lisaosinowo/Quiz-game",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[6]',
      name: "BlackJack Game",
      url: "https://github.com/lisaosinowo/BlackJack-game",
   },
   {
      locator:
         '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[7]',
      name: "Hangman Game",
      url: "https://github.com/lisaosinowo/Hangman",
   },
];

test.describe("Projects section visibility", () => {
   headerAndParagraphCases.forEach(({ input }, index) => {
      test(`text visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(input);
      });
   });

   projectCases.forEach(({ locator }, index) => {
      test(`div visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(locator);
      });
   });
});

test.describe("Projects section texts", () => {
   headerAndParagraphCases.forEach(({ input, expected }, index) => {
      test(`correct header and paragraph text - case ${index + 1}`, async ({
         portfolio,
      }) => {
         await portfolio.hasText(input, expected);
      });
   });

   projectCases.forEach(({ locator, name }, index) => {
      test(`correct github profile and project name - case ${index + 1}`, async ({
         portfolio,
      }) => {
         await portfolio.hasText(`${locator}/p`, name);
      });
   });
});

test.describe("Project links", () => {
   projectCases.forEach(({ locator, url }, index) => {
      test(`links go to correct url - case ${index + 1}`, async ({
         portfolio,
      }) => {
         await portfolio.goToNewPageAndVerifyUrl(locator, url);
      });
   });
});

// Note to self: create tests for the hover effect
