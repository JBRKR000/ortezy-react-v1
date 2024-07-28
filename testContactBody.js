const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testContactBody() {
    let options = new chrome.Options();
    options.addArguments('disable-gpu');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        await driver.get('http://localhost:3000/kontakt/');
        await driver.findElement(By.name('firstName')).sendKeys('Jan');
        await driver.findElement(By.name('lastName')).sendKeys('Kowalski');
        await driver.findElement(By.name('email')).sendKeys('jan.kowalski@example.com');
        await driver.findElement(By.name('message')).sendKeys('To jest testowa wiadomość.');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const modal = await driver.findElement(By.className('modal-dialog'));
        await driver.wait(until.elementIsVisible(modal), 5000);
        const modalTitle = await driver.findElement(By.className('modal-title')).getText();
        const modalBody = await driver.findElement(By.className('modal-body')).getText();
        if (modalTitle !== 'Wiadomość Wysłana') {
            throw new Error(`Expected modal title 'Wiadomość Wysłana', but got '${modalTitle}'`);
        }
        if (!modalBody.includes('Wiadomość wysłana')) {
            throw new Error(`Expected modal body to contain 'Wiadomość wysłana', but got '${modalBody}'`);
        }
        console.log('Test passed: Form submission and modal display are working correctly.');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        await driver.quit();
    }
})();
