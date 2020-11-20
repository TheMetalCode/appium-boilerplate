import TabBar from '../screenobjects/components/tab.bar';
import LoginScreen from '../screenobjects/login.screen';
import fs from 'fs';

fdescribe('WebdriverIO and Appium, when interacting with a login form,', () => {
  beforeEach(() => {
    TabBar.waitForTabBarShown(true);
    TabBar.openLogin();
    LoginScreen.waitForIsShown(true);
  });

  it('does image compare', () => {
    let currentData = driver.takeScreenshot();
    let buffer = fs.readFileSync(`${process.cwd()}/baselineImages/LoginScreen.png`);
    let baselineData = buffer.toString('base64');
    let similarity = driver.compareImages('getSimilarity', currentData, baselineData, {});
    expect(similarity.score).toBeGreaterThanOrEqual(0.99);
  });
});
