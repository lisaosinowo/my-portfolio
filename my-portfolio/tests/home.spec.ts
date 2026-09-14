import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

const textCases = [
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/h1',
      expected: "Lisa Osinowo",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[1]',
      expected: "@lisaosinowo",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]',
      expected: '"Predict your future by creating it."',
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[3]',
      expected: "Fullstack Developer. Certified Tester.",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/p',
      expected: "Available",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/p',
      expected: "Links",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/p',
      expected: "Joined 07/26",
   },
];

const imageLocators = [
   '//*[@id="root"]/div/div[2]/div/div[1]/div[1]/img',
   '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[1]/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/p[2]/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[2]/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div[3]/img',
];

const spanCases = [
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span',
      expected: "Feed",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span',
      expected: "About",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span',
      expected: "Languages",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span',
      expected: "Projects",
   },
];

const followButtonLocator =
   '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/button';
const mainContentLocator = '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div';

test.describe("Home page visibility", () => {
   textCases.forEach(({ input }, index) => {
      test(`text visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(input);
      });
   });

   imageLocators.forEach((locator, index) => {
      test(`image visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(locator);
      });
   });

   spanCases.forEach(({ input }, index) => {
      test(`span element visibility - case ${index + 1}`, async ({
         portfolio,
      }) => {
         await portfolio.isVisible(input);
      });
   });

   test("main content container visibility", async ({ portfolio }) => {
      await portfolio.isVisible(mainContentLocator);
   });
});

test.describe("Home page texts", () => {
   textCases.forEach(({ input, expected }, index) => {
      test(`correct text - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.hasText(input, expected);
      });
   });

   spanCases.forEach(({ input, expected }, index) => {
      test(`correct span element text - case ${index + 1}`, async ({
         portfolio,
      }) => {
         await portfolio.hasText(input, expected);
      });
   });
});

test.describe("Follow button", () => {
   test("follow button visibility", async ({ portfolio }) => {
      await portfolio.isVisible(followButtonLocator);
   });

   test("correct follow button text", async ({ portfolio }) => {
      await portfolio.hasText(followButtonLocator, "Follow");
   });
});