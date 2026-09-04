import { test as base } from '@playwright/test';
import { PortfolioPage } from '../page/PortfolioPage'; 

// Define a new type that extends the base test with custom fixture
type MyFixtures = {
  portfolio: PortfolioPage;
};

// Extend the base test with the custom fixture
export const test = base.extend<MyFixtures>({
  // Define the portfolio fixture
  portfolio: async ({ page }, use) => {
    const portfolio = new PortfolioPage(page);
    // Make the portfolio instance available to tests
    await use(portfolio); 
  },
});

export { expect } from '@playwright/test';