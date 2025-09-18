import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('TC_001_loginto app.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.logintoapplication('Common-Action-QA' ,'sysadmin','123');
 
});

test('TC_001_navigate to strategic risk register.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.logintoapplication('Common-Action-QA' ,'sysadmin','123');
   
  });
