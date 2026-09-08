import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToLanguagesSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

const textCases = [
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]',
      expected: "Frontend Languages",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/p',
      expected: "JavaScript",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/p',
      expected: "TypeScript",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/p',
      expected: "HTML",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/p',
      expected: "CSS",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]',
      expected: "Frontend Frameworks and Libraries",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/p',
      expected: "React",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/p',
      expected: "TailwindCSS",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/p',
      expected: "Bootstrap",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/p',
      expected: "Sass",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[3]',
      expected: "Backend Languages",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/p',
      expected: "Python",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/p',
      expected: "C#",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/p',
      expected: "Java",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/p',
      expected: "Node.js",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[4]',
      expected: "Backend Frameworks and Libraries",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/p',
      expected: "Express.js",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/p',
      expected: "Mongoose",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[5]',
      expected: "Databases",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/p',
      expected: "MySQL",
   },
   {
      input: '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/p',
      expected: "MongoDB",
   },
];

const imageLocators = [
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/div/img',
   '//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/div/img',
];

test.describe("Languages section visibility", () => {
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
});

test.describe("Languages section texts", () => {
   textCases.forEach(({ input, expected }, index) => {
      test(`correct text - case ${index + 1}`, async ({ portfolio }) => {
         await portfolio.hasText(input, expected);
      });
   });
});
