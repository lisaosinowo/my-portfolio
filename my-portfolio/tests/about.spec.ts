import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:5173/");
   const aboutSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span');
   await aboutSpan.click();
   test.setTimeout(10000);
});

test.afterEach(async ({ page }) => {
   await page.close();
});

test.describe('About section visibility', () => {
   test('text visability', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/p')).toBeVisible();
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/p')).toBeVisible();
   });

})
test.describe('About section texts', () => {    
   test('correct text', async({ page }) => {
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/h1')).toHaveText('Hello World! 😊');
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/p')).toHaveText("I am Lisa, a Software Development Engineer in Test, a Fullstack Developer, and an Automation Engineer. Here's a little backstory about me and how I got into coding.");
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/p')).toHaveText("My Chemical Engineering degree is where my problem solving and innovation skills stemmed from. After obtaining my degree, I found interest in coding thanks to my tech family. I decided to transition into the tech world where I initially taught myself how to code with Python.");
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/p')).toHaveText("In October 2024, I obtained a Frontend Development Fundamentals certificate after completing my Frontend Development bootcamp with Black Girls in Tech. Within the bootcamp, I learned HTML and CSS. I also learned JavaScript and React after the bootcamp to expand my skillset.");
      await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/p')).toHaveText("In January 2025, I started a 16-week CFGdegree in Fullstack Development with a +Masters in Cyber Security with Code First Girls. This course included HTML, CSS, JavaScript, React, TypeScript, Angular, and SQL. Thanks to Code First Girls, I was able to secure my first tech role at Capgemini as a Software Development Engineer in Test.");
   });
});
