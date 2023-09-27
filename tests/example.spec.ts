import { GoogleHomePage } from "../pages/GoogleHomePage";
import { test, expect } from '@playwright/test';

//Array that stores the name of the link to click, and the expected destination
const testData  = [
  { headerItem: 'About', expectedUrl: 'https://about.google/' },
  { headerItem: 'Store', expectedUrl: 'https://store.google.com/US/' },
  { headerItem: 'Gmail', expectedUrl: 'https://www.google.com/gmail/about/' }];
  
  //for loop to make this a data-driven test using the testData array as imput
  for (const { headerItem, expectedUrl} of testData) 
  test(`Click header links and check destination url - ${ headerItem}`, async ({ page }) => {
//See the GoogleHomePage.ts "page class"
    const googHome = new GoogleHomePage(page);
    await googHome.goto();

  // added this because auto-wait only really seems to work in Chrome
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Click the header Link from testData array
  await page.getByRole('link', {name: headerItem}).click();
  
  // added this because auto-wait only really seems to work in Chrome
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Assert url is as expected 
  expect(page.url().split('?')[0]).toEqual(expectedUrl);
  
  });


