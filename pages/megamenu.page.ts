import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly megamenuicon: Locator;
  readonly lnk_stretegicriskregister: Locator;
  readonly lnk_operationriskregister: Locator;
  readonly lnk_futureriskregister: Locator;
  readonly lnk_EISregister: Locator;
  readonly lnk_controlregister: Locator;
  readonly lnk_actioniskregister: Locator;
  readonly lnk_risksettings: Locator;
  readonly lnk_actionsettings: Locator;


  readonly password: Locator;
  readonly loginbutton: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.megamenuicon = page.locator("//input[@name='Username']");
    this.username = page.getByRole('textbox', { name: 'Password' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginbutton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForTimeout(1000);
  }

  async logintoapplication(db : string ,uname : string , pw : string) {
    await this.organisation.fill(db);
    await this.username.fill(uname);
    await this.password.fill(pw);
    await this.loginbutton.click();
    await this.page.waitForTimeout(1000);
  }

  
}