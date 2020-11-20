import CheckboxPage from '../pageobjects/checkbox.page';
import fs from 'fs';

describe('checkboxes', () => {
  it('does image compare', () => {
    CheckboxPage.open();
    CheckboxPage.firstCheckbox.waitForDisplayed(3000);
    let currentData = driver.takeScreenshot();
    let buffer = fs.readFileSync(`${process.cwd()}/baselineImages/CheckboxesPage.png`);
    let baselineData = buffer.toString('base64');
    let similarity = driver.compareImages('getSimilarity', currentData, baselineData, {});
    expect(similarity.score).toBeGreaterThanOrEqual(0.96);
  });
});
