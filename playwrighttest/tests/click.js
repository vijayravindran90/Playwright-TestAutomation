const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:500});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    await page.click('#t1 > table > tr:nth-child(3) > td:nth-child(8) > button');
    await browser.close();
})();