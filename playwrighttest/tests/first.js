const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:100});
    const page = await browser.newPage();
    await page.goto('http://the-internet.herokuapp.com/forgot_password');
   
    const search = await page.$('#email');
    await search.type('test123@test.com',{delay:50});
    await browser.close();
})();