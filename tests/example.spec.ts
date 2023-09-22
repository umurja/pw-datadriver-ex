import { test, expect } from '@playwright/test';

const headerItems = ['About', 'Store', 'Gmail'];
for (const item of headerItems) {
test(`Header link 1 - ${item}`, async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: `${item}` }).click();

  // Assert url is as expected
  await expect(page.url().split('?')[0]).toEqual(expectedUrl(`${item}`));
})};

const testData  = [
  { headerItem: 'About', expectedUrl: 'https://about.google/' },
  { headerItem: 'Store', expectedUrl: 'https://store.google.com/US/' },
  { headerItem: 'Gmail', expectedUrl: 'https://www.google.com/gmail/about/' }];
  
  for (const { headerItem, expectedUrl} of testData) 
  test(`Header link 2 - ${ headerItem}`, async ({ page }) => {
    await page.goto('https://www.google.com/');
  
  // Click the header Link.
    await page.getByRole('link', {name: headerItem}).click();
  
  // Assert url is as expected 
  expect(page.url().split('?')[0]).toEqual(expectedUrl);
  
  });

//function to return the url for the Header Label
function expectedUrl(lableString) {
  switch (lableString) {
    case 'About':
        return 'https://about.google/';
        break;
    case 'Store':
        return 'https://store.google.com/US/';
        break;
    case 'Gmail':
        return 'https://www.google.com/gmail/about/';
        break;
    default:
        return 'NOT FOUND';
        break;
  }
}

// Test data: Header items and expected URLS



