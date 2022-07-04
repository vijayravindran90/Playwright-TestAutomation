const{chromium,devices}=require('@playwright/test');
const iPhone = devices['iPhone 11'];

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:300});
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude:19.432608,longitude:-99.133209},
        locale:'en-UK'
    });
    const page = await context.newPage();
    //navigateing to site
    await page.goto('https://www.google.com/maps');
   
    await page.waitForTimeout(5000);

    //closing the browser
    await browser.close();
})();