const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:300});
    const context = await browser.newContext({
        recordVideo: {
            dir:"./recordings"
        }
    })
    const page = await context.newPage();
    //navigateing to site
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    //code to record video
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading',{state:'hidden'});
 await page.waitForTimeout(4000);

    //closing the browser
    await browser.close();
})();