const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:300});
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    //code to type using virtual keyboard
    await page.click('input');
    await page.keyboard.type("Welcome to the beautiful world")
    await page.keyboard.down('Shift');
    for(let i=0;i<'world'.length;i++)
    {
        await page.keyboard.press('ArrowLeft');
        
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type("Universe");


    //closing the browser
    await browser.close();
})();