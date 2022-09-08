const { Given, When, Then } = require("@wdio/cucumber-framework");
const {expect} = require("chai");
const HotelsHomePage = require("../../Pages/Hotels/HotelsHomePage");
const hotelshpage = new HotelsHomePage();


Given(/^I am on hotels landing page$/, async function(){
    await browser.url('https://www.hotels.com');
    await browser.pause(3000);
})
When(/^I click on Learn about Hotels.com Rewards$/, async function(){
    await hotelshpage.clickOnLearnAboutLink();
    await browser.pause(3000);
})
Then(/^I verify Hotels Rewards opened in a new window$/, async function(){
    expect(await hotelshpage.windowCount(), 'Did not open new window').to.be.equal(2);
    await browser.pause(2000);

})
When(/^I click on Join Now$/, async function(){
    await hotelshpage.clickJoinNow();
    await browser.pause(3000);
})
// Then(/^I verify form is blank$/, async function(){
//     expect(await hotelshpage.verifyEmptyEmail(), 'Email field not empty').to.be.false;
// })



