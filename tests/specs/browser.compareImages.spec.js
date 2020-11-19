import CheckboxPage from '../pageobjects/checkbox.page';
import fs from 'fs';

describe('checkboxes', () => {
  it('does image compare', () => {
    CheckboxPage.open();
    CheckboxPage.firstCheckbox.waitForDisplayed(3000);
    let currentData = driver.takeScreenshot();
    let buffer = fs.readFileSync(`${process.cwd()}/baselineImages/CheckboxesPage.png`);
    let baselineData = buffer.toString('base64');
    console.log('STARTING SIMILARITY CHECK');
    let similarity = driver.compareImages('getSimilarity', currentData, baselineData);
    console.log(similarity);
  });
});
