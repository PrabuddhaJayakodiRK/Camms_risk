import { expect, type Locator, type Page } from '@playwright/test';
 
export class StrategicRiskDetailPage {
 
 
  readonly page: Page;
  readonly riskTitle: Locator;
  readonly RO: Locator;
  readonly primaryRiskCategory: Locator;
  readonly approvalAuthority: Locator;
  readonly submitforApprovalBtn: Locator;
  readonly impactBtn: Locator;
  readonly impactValue: Locator;
  readonly impactSaveBtn: Locator;
  readonly likelihoodBtn: Locator;
  readonly likelihoodValue: Locator;
  readonly submitforSaveBtn:Locator;
  readonly returnBtn:Locator;
  readonly registerPageHeader:Locator;
  readonly filterBtn:Locator;
  readonly filterRiskTitle:Locator;
  readonly riskTitleCells:Locator;
  readonly searchBtn:Locator;

 
  constructor(page: Page) {
 
    this.page = page;
    this.riskTitle = page.getByRole('textbox', { name: 'Risk Title required' });
    this.RO = page.getByRole('listbox', { name: 'Risk Owner / Sponsor required' }).locator('span').nth(2);
    this.primaryRiskCategory = page.getByRole('listbox', { name: 'Primary Risk Category required' }).locator('span').nth(2);
    this.approvalAuthority = page.getByRole('button', { name: 'Submission/Approval ' });

    this.submitforApprovalBtn = page.locator('app-approval-inline-buttons').getByRole('button', { name: 'Submit for Approval' });
    this.impactBtn = page.getByRole('button', { name: 'Select Consequence' });
    this.impactValue = page.getByText('Between 2.5% and 5% of').nth(1);
    this.impactSaveBtn = page.locator('app-risk-consequence-table-selected-dialog').getByRole('button', { name: 'Save' });
    this.likelihoodBtn = page.getByRole('button', { name: 'Select Likelihood' });
    this.likelihoodValue = page.getByText('Theoretically possible but');
    this.submitforSaveBtn = page.locator('//button[@id="addNewRiskSave"]');

    this.returnBtn = page.locator("");
    this.registerPageHeader = page.locator("");
    this.filterBtn = page.locator("");
    this.filterRiskTitle = page.locator("");
    this.searchBtn = page.locator("");

    this.riskTitleCells = page.locator('table tbody tr td:nth-child(2) a');
   
  }
 
  /*async goto() {
    await this.page.goto('https://staging.cammsgroup.net/risk');
    await this.page.waitForTimeout(10000);
  }*/
 
    async fillRiskDetailPage() {
    await this.riskTitle.fill('Test risk 123');
    await expect(this.primaryRiskCategory).toBeVisible();
    await this.primaryRiskCategory.click();
    await this.page.click('li.k-item:has-text("Finance")');
    await expect(this.RO).toBeVisible();
    await this.RO.click();
    await this.page.click('li.k-item:has-text("Aaron Aulsebrook-Walker - Storeperson Level 3")');
    //await this.RO.selectOption('Aaron Aulsebrook-Walker - Storeperson Level 3 ');
    //await this.approvalAuthority.selectOption('Apsey, Esther - Strategic Planning');
    await this.impactBtn.click();
    await expect(this.impactValue).toBeVisible();
    await this.impactValue.click();
    await this.impactSaveBtn.click();
    await this.likelihoodBtn.click();
    await expect(this.likelihoodValue).toBeVisible();
    await this.likelihoodValue.click();
 
    //await this.page.waitForTimeout(10000);
 
    await this.submitforSaveBtn.click();
 
    //await this.page.waitForTimeout(10000);
   
  }


  async  checkAddedRisk(page: Page, expectedTitle: string) {

    await this.returnBtn.click();
    await expect(this.registerPageHeader).toBeVisible();
    await this.filterBtn.click();
    await this.filterRiskTitle.fill("");
    await this.searchBtn.click();

  
      // This targets the clickable title in the 2nd column
      const riskTitleCells = page.locator('table tbody tr td:nth-child(2) a');
    
      const count = await riskTitleCells.count();
      let found = false;
    
      for (let i = 0; i < count; i++) {
        const title = await riskTitleCells.nth(i).innerText();
        if (title.trim() === expectedTitle) {
          found = true;
          console.log(`✅ Found "${expectedTitle}" on current page`);
          break;
        }
      }
    
      // Assert the title exists on the current page
      expect(found).toBe(true);
    }






  }
