import { expect, type Locator, type Page } from '@playwright/test';
 
export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly organisation: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;
  readonly addbutton: Locator;
  readonly tocList: Locator;
  readonly initialRiskAssessmentLbl: Locator;
  readonly pageLoad: Locator;
 
 
  constructor(page: Page) {
    this.page = page;
    this.organisation = page.getByRole('textbox', { name: 'Organisation' });
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginbutton = page.getByRole('button', { name: 'Login' });
    this.addbutton = page.getByRole('button', { name: 'New', exact: true });
    this.initialRiskAssessmentLbl = page.locator('//span[text()="Inherent Risk Assessment"]');
    this.pageLoad = page.locator('');
 
  }
 
  async goto() {
    await this.page.goto('https://staging.cammsgroup.net/risk');
   // await this.page.waitForTimeout(10000);
    await expect(this.loginbutton).toBeVisible();
    
  }
 
  async logintoapplication() {
    await this.organisation.fill('FRQ2_Live_DuluxGroup_CommonAction_ON');
    await this.username.fill('sysadmin');
    await this.password.fill('123');
    await this.loginbutton.click();
    //await this.page.waitForTimeout(10000);
    await expect(this.addbutton).toBeVisible();
    //await this.page.waitForTimeout(10000);
    await this.addbutton.click();
   
   await expect(this.initialRiskAssessmentLbl).toBeVisible();
    //await expect(this.pageLoad).toBeHidden();
 
  }
 
 
}