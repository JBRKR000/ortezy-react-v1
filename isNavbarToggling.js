const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
(async function testNavbar() {
    let options = new chrome.Options();
    options.addArguments('disable-gpu');
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('http://localhost:3000');
        const menuButton = await driver.findElement(By.css('.navbar-toggler'));
        await menuButton.click();
        let menu = await driver.findElement(By.id('navbarResponsive'));
        await driver.wait(until.elementIsVisible(menu), 5000);
        let menuClass = await menu.getAttribute('class');
        if (!menuClass.includes('show')) {
            throw new Error('Menu did not open');
        }
        await menuButton.click();
        await driver.wait(async function() {
            menuClass = await menu.getAttribute('class');
            return !menuClass.includes('show');
        }, 5000);
        console.log('Test passed: Menu toggles correctly.');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        await driver.quit();
    }
})();
