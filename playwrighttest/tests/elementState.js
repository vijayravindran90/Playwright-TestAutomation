const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch();
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('https://demoqa.com/automation-practice-form');

    //code to print the element state

    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');
   
    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());

    //closing the browser
    await browser.close();
})();