const { Given, Then, When } = require("@wdio/cucumber-framework");
const DarkskyHomepage = require("../../Pages/Darksky/DarkskyHomepage");
const dskyhpage = new DarkskyHomepage();

Given(/^I am on darksky landing page$/, async function(){
    await browser.url('https://www.darksky.net/');
    await browser.pause(5000);
})
Then(/^I verify timeline has 12 data point with 2 hour gap from current hour$/, async function(){
    await dskyhpage.verifyTwoHourGap();
})
When(/^I scroll to Today's timeline and click on add button$/, async function(){
    await dskyhpage.clickAddButton();
    await browser.pause(3000);
})
Then(/^I verify minTemp on and in Today's timeline is same$/, async function(){
    
})