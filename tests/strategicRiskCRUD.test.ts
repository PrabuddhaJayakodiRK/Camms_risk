import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { StrategicRiskRegisterPage } from '../pages/strategicriskregister.page';
import { StrategicRiskDetailPage } from '../pages/strategicriskdetail.page';

test('TC_001_create a new risk.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const str_riskdetailPage = new StrategicRiskDetailPage(page);

  await loginPage.goto();
  await loginPage.logintoapplication();
  await str_riskdetailPage.fillRiskDetailPage();
 
});

