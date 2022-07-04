const{chromium} = require('@playwright/test');
describe('UI tests for bookstore using playwright',()=>{

    jest.setTimeout(10000);
    let browser = null;
    let page=null;
    let context=null;
    let firstRowCells = null;

beforeAll(async()=>{

    browser = await chromium.launch({headless:false})
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoqa.com/books');
});

afterAll(async()=>{
   await browser.close();
});

test('should load page',async()=>{

    expect(await page.not.toBeNull());
    expect(await page.title()).not.toBeNull();
});

test('should be able to search for eloquent using javascript',async()=>{

    await page.fill('#searchBox','eloquent');
    expect(await page.$('#searchBox').innerText().toBe('eloquent'));
});

});