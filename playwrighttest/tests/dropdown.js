const{chromium}=require('@playwright/test');

(async()=>{

    //function code
    const browser = await chromium.launch({headless:false,slowMo:500});
    const page = await browser.newPage();
    await page.goto('http://the-internet.herokuapp.com/dropdown');
   
    const dropdown = await page.$('#dropdown');
   await dropdown.selectOption({value:'1'});
   await dropdown.selectOption({label:'Option 2'});
   await dropdown.selectOption({index: 1});

   const availableOptions = await dropdown.$$('option');
   for(let i=0;i<availableOptions.length;i++)
   {
   console.log(await availableOptions[i].innerText());
   }
    await browser.close();
})();