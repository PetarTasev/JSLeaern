const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;// Declare reusable variables
describe('EZE tests', async function () {
    this.timeout('5000')

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });


    it('works', async () => {
        await page.goto('http://localhost:5500')
        await page.screenshot( {page: 'side.png'})

    })
});