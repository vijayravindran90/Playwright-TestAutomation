const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:300});
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('https://paint.js.org');

    //code to use mouse
   await page.mouse.move(200,200);
   await page.mouse.down();
   await page.mouse.move(400,200);
   await page.mouse.move(400,400);
   await page.mouse.move(200,400);
   await page.mouse.move(200,200);

   await page.mouse.up();

    //closing the browser
    await browser.close();
})();