import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToFeedSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

test.describe("Feed section visibility", () => {
   const textLocators = [
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/p',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/p',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[1]',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[2]',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[3]',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[2]/p',
   ];

   textLocators.forEach((locator, index) => {
      test(`text visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(locator);
      });
   });

   const imageLocators = [
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[1]/div/div/img',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[1]/div/img',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/img',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[3]/img',
   ];

   imageLocators.forEach((locator, index) => {
      test(`image visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(locator);
      });
   });
});

test.describe("Feed section texts", () => {
   const cases = [
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/p',
         expected: "Pinned",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/div/p',
         expected: "Lisa",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[1]',
         expected: "@lisaosinowo",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[2]',
         expected: "·",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[1]/p[3]',
         expected: "20/07/2026",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div/div[2]/div[2]/p',
         expected:
            "Welcome to my Portfolio 🤗 I had a lot of fun developing this site and I will be improving it when new ideas spawn. That's the life of a developer! 🫡 Use the four headers above this pinned post to explore!",
      },
   ];

   cases.forEach(({ input, expected }, index) => {
      test(`correct text - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.hasText(input, expected);
      });
   });
});