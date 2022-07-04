const{firefox}=require('@playwright/test');

(async()=>{

    //function code/*[@id="main"]/div
    const browser = await firefox.launch({headless:false,slowMo:300});
    const page = await browser.newPage();
    await page.goto('https://w3schools.com/howto/howto_css_custom_checkbox.asp');
    const checks = await page.$$('#main div :nth-child(1) > input[type="checkbox"]');
   
   //checks the second checkbox
    await checks[1].check();
   //unchecks the first checkbox
   await checks[0].uncheck();

   //select the second radio button
   const radios = await page.$$('#main div :nth-child(1) > input[type="radio"]');
   await radios[1].check();

   //closing the browser
    await browser.close();
})();