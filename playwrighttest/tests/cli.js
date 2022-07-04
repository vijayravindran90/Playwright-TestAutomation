const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.amazon.com/
  await page.goto('https://www.amazon.com/');

  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();

  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('shoes');

  // Click input:has-text("Go")
  await page.locator('input:has-text("Go")').click();
  await page.waitForURL('https://www.amazon.com/s?k=shoes&crid=1YJT7U6TBZUZG&sprefix=shoes%2Caps%2C273&ref=nb_sb_noss_1');

  // Click text=Under Armour Men's Charged Assert 9 Running Shoe
  await page.locator('text=Under Armour Men\'s Charged Assert 9 Running Shoe').click();
  await page.waitForURL('https://www.amazon.com/Under-Armour-Charged-Assert-Running/dp/B087T8Q2C4/ref=sr_1_2?crid=1YJT7U6TBZUZG&keywords=shoes&qid=1656669300&sprefix=shoes%2Caps%2C273&sr=8-2');

  // Click input:has-text("Add to Cart")
  await page.locator('input:has-text("Add to Cart")').click();

  // Click #dropdown_selected_size_name >> text=Select
  await page.locator('#dropdown_selected_size_name >> text=Select').click();

  // Click a:has-text("9 X-Wide")
  await page.locator('a:has-text("9 X-Wide")').click();
  await page.waitForURL('https://www.amazon.com/Under-Armour-Charged-Assert-Running/dp/B08CG1K9QK/ref=sr_1_2?crid=1YJT7U6TBZUZG&keywords=shoes&qid=1656669300&sprefix=shoes%2Caps%2C273&sr=8-2&th=1&psc=1');

  // Click span[role="radio"]:has-text("Add to List")
  await page.locator('span[role="radio"]:has-text("Add to List")').click();
  await page.waitForURL('https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Faw%2Fd%2FB08CG1K9QK&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&');

  // ---------------------
  await context.close();
  await browser.close();
})();