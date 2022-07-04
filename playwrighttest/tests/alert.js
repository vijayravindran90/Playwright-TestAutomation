const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:600});
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('http://demoqa.com/alerts');
   
    //code to handle alerts
    page.once('dialog',async dialog=>{
    console.log(dialog.message());
    await dialog.accept();
    });
    await page.click('#confirmButton');

    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
        });
    await page.click('#promtButton')

    //closing the browser
    await browser.close();
})();