import { test } from "../src/fixtures/fixtures";

test.beforeEach(async ({ portfolio }) => {
   await portfolio.goTo();
   await portfolio.navigateToLanguagesSection();
   test.setTimeout(10000);
});

test.afterEach(async ({ portfolio }) => {
   await portfolio.close();
});

test.describe('Languages section visibility', () => {
   test('text visability', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[3]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[4]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[5]');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/p');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/p');
   });

   test('image visibility', async({ portfolio }) => {
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/div/img');
      await portfolio.isVisible('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/div/img');
   });
})
test.describe('Languages section texts', () => {
   test('correct text', async({ portfolio }) => {
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[1]', 'Frontend Languages');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[1]/div/p', 'JavaScript');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[2]/div/p', 'TypeScript');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[3]/div/p', 'HTML');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[1]/div[4]/div/p', 'CSS');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[2]', 'Frontend Frameworks and Libraries');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[1]/div/p', 'React');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[2]/div/p', 'TailwindCSS');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[3]/div/p', 'Bootstrap');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[2]/div[4]/div/p', 'Sass');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[3]', 'Backend Languages');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[1]/div/p', 'Python');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[2]/div/p', 'C#');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[3]/div/p', 'Java');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[3]/div[4]/div/p', 'Node.js');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[4]', 'Backend Frameworks and Libraries');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[1]/div/p', 'Express.js');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[4]/div[2]/div/p', 'Mongoose');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/p[5]', 'Databases');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[1]/div/p', 'MySQL');
      await portfolio.hasText('//*[@id="root"]/div/div[2]/div/div[2]/div[3]/div/div/div/div[5]/div[2]/div/p', 'MongoDB');
   });
});