const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testFooter() {
    let options = new chrome.Options();
    options.addArguments('disable-gpu');
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    try {
        await driver.get('http://localhost:3000');
        const expectedLinks = {
            'Facebook': 'https://www.facebook.com/projektowaniewww',
            'Twitter': 'https://www.x.com/',
            'Instagram': 'https://www.instagram.com/',
            'LinkedIn': 'https://www.linkedin.com/company/pro-link-seo/',
            'Globe': 'https://www.pro-link.pl/'
        };
        for (const [name, expectedHref] of Object.entries(expectedLinks)) {
            const element = await driver.findElement(By.css(`a[href="${expectedHref}"]`));
            const actualHref = await element.getAttribute('href');
            if (actualHref !== expectedHref) {
                throw new Error(`Expected ${name} link to be '${expectedHref}', but got '${actualHref}'`);
            }
            console.log(`Verified ${name} link: ${actualHref}`);
        }
        const privacyLink = await driver.findElement(By.linkText('Polityka prywatności i Warunki użytkowania'));
        const privacyHref = await privacyLink.getAttribute('href');
        if (!privacyHref.endsWith('/privacy-and-terms')) {
            throw new Error(`Expected Privacy and Terms link to end with '/privacy-and-terms', but got '${privacyHref}'`);
        }
        console.log('Verified Privacy and Terms link.');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        await driver.quit();
    }
})();
