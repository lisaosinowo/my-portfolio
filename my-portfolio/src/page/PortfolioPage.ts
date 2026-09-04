import { type Page, type Locator, expect } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly feedSpan: Locator;
  readonly aboutSpan: Locator;
  readonly projectsSpan: Locator;
  readonly languagesSpan: Locator;

  constructor(page: Page) {
    this.page = page;
    this.feedSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[1]/span');
    this.aboutSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[2]/span');
    this.languagesSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[3]/span');
    this.projectsSpan = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div[4]/span');
  }

  async goTo() {
    await this.page.goto("http://localhost:5173/");
  }

  async close() {
    await this.page.close();
  }

  async navigateToFeedSection() {
    await this.feedSpan.click();
  }

  async navigateToAboutSection() {
    await this.aboutSpan.click();
  }

  async navigateToProjectsSection() {
    await this.projectsSpan.click();
  }

  async navigateToLanguagesSection() {
    await this.languagesSpan.click();
  }

  async isVisible(locator: string) {
    await expect(this.page.locator(locator)).toBeVisible();
  }

  async hasText(locator: string, text: string) {
    await expect(this.page.locator(locator)).toHaveText(text);
  }

  async goToNewPageAndVerifyUrl(locator: string, newUrl: string, url: string = 'http://localhost:5173/') {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.locator(locator).click(),
    ]);  

    await newPage.waitForLoadState(); // Wait for the new tab to finish loading
    await expect(newPage).toHaveURL(newUrl);
    await expect(this.page).toHaveURL(url);
  }
}