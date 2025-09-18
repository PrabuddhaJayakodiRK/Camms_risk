import { expect, type Locator, type Page } from '@playwright/test';

export class StrategicRiskRegisterPage {
  readonly page: Page;
  readonly username: Locator;
  readonly organisation: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.organisation = page.getByRole('textbox', { name: 'Username' });
    this.username = page.getByRole('textbox', { name: 'Password' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginbutton = page.getByRole('button', { name: 'Login' });
  }

  async navigateInthePage() {
    await this.loginbutton.click();
    await this.loginbutton.click();
    await this.loginbutton.click();
    await this.loginbutton.click();
  }

  async checkPageandGrid(db : string ,uname : string , pw : string) {
    await this.organisation.fill(db);
    await this.username.fill(uname);
    await this.password.fill(pw);
    await this.loginbutton.click();
    await this.page.waitForTimeout(1000);
  }

  async addNewRisk(db : string ,uname : string , pw : string) {
    await this.organisation.fill(db);
    await this.username.fill(uname);
    await this.password.fill(pw);
    await this.loginbutton.click();
    await this.page.waitForTimeout(1000);
  }
  
  async editTheRisk(db : string ,uname : string , pw : string) {
    await this.organisation.fill(db);
    await this.username.fill(uname);
    await this.password.fill(pw);
    await this.loginbutton.click();
    await this.page.waitForTimeout(1000);
  }

  async deleteTheRisk(db : string ,uname : string , pw : string) {
    await this.organisation.fill(db);
    await this.username.fill(uname);
    await this.password.fill(pw);
    await this.loginbutton.click();
    await this.page.waitForTimeout(1000);
  }
}