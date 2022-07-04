const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:300});
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('https://applitools.com/');

    //code to capture screenshot 
    await page.screenshot({path: 'screenshot.png'});
    
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'});
    await page.screenshot({path:'fullscreen.png',fullPage:true})

    //closing the browser
    await browser.close();
})();