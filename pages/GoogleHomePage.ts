import { expect, type Locator, type Page } from '@playwright/test';

export class GoogleHomePage {
    readonly page: Page;
    readonly aboutHeaderLink: Locator;
    readonly storeHeaderLink: Locator;
    readonly gmailHeaderLink: Locator;


constructor(page: Page) {
    this.page = page;
    this.aboutHeaderLink = page.locator('a', { hasText: 'About' });
    this.storeHeaderLink = page.locator('a', { hasText: 'Store' });
    this.gmailHeaderLink = page.locator('a', { hasText: 'Gmail' });
}
    async goto() {
        await this.page.goto('https://www.google.com/');
      }
}