import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToAboutSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

test.describe("About section visibility", () => {
   const locators = [
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/p',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/p',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/p',
      '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/p',
   ];

   locators.forEach((locator, index) => {
      test(`text visibility - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.isVisible(locator);
      });
   });
});

test.describe("About section texts", () => {
   const cases = [
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1',
         expected: "Hello World! 😊",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/p',
         expected:
            "I am Lisa, a Software Development Engineer in Test, a Fullstack Developer, and an Automation Engineer. Here's a little backstory about me and how I got into coding.",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/p',
         expected:
            "My Chemical Engineering degree is where my problem solving and innovation skills stemmed from. After obtaining my degree, I found interest in coding thanks to my tech family. I decided to transition into the tech world where I initially taught myself how to code with Python.",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/p',
         expected:
            "In October 2024, I obtained a Frontend Development Fundamentals certificate after completing my Frontend Development bootcamp with Black Girls in Tech. Within the bootcamp, I learned HTML and CSS. I also learned JavaScript and React after the bootcamp to expand my skillset.",
      },
      {
         input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/p',
         expected:
            "In January 2025, I started a 16-week CFGdegree in Fullstack Development with a +Masters in Cyber Security with Code First Girls. This course included HTML, CSS, JavaScript, React, TypeScript, Angular, and SQL. Thanks to Code First Girls, I was able to secure my first tech role at Capgemini as a Software Development Engineer in Test.",
      },
   ];

   cases.forEach(({ input, expected }, index) => {
      test(`correct text - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.hasText(input, expected);
      });
   });
});
