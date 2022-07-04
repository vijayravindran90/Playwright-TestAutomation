const{webkit}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await webkit.launch({headless:false,slowMo:100});
    const page = await browser.newPage();
    //navigateing to site
    await page.goto('http://demoqa.com/frames');
   
   // logic to handle frames
 const frame1 = await page.frame({ url:/\/sample/ });
  
 //location heading inside the frame1
 const heading1 = await frame1.$('h1');
 console.log(await heading1.innerText());

    //closing the browser
    await browser.close();
})();